import axios, { AxiosResponse, ParamsSerializerOptions } from 'axios'
import { isNil, omitBy } from 'lodash'

import { log } from '@config'
import { API, API_TIMEOUT, ApiStatusCode, IApiResponse, RequestType } from '@constants'

import { getAccessToken } from './firebase-service'

const axiosConfig = <Params = undefined>({
  authToken,
  isTbkApi,
  params,
}: {
  authToken: string
  isTbkApi?: boolean
  params?: Params
}) => ({
  baseURL: isTbkApi ? API.tbkUrl : API.baseUrl,
  timeout: API_TIMEOUT,
  headers: { Authorization: `Bearer ${authToken}` },
  params,
  paramsSerializer(queryParams: ParamsSerializerOptions) {
    const paramsWithValues = omitBy(queryParams, isNil)

    return Object.entries(paramsWithValues)
      .flatMap(([key, value]) => {
        if (Array.isArray(value)) {
          return value.map(item => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`)
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      })
      .join('&')
  },
})

const mapAxiosResponseToLocalResponseType = <RequestData, ResponseData>(
  axiosResponse: AxiosResponse<ResponseData, RequestData>,
): IApiResponse<ResponseData> => ({
  headers: axiosResponse.headers,
  status: axiosResponse.status,
  message: axiosResponse.statusText,
  data: axiosResponse.data,
})

const errorResponse = <T>(
  errorCode: number | string,
  errorMessage: string,
  data?: T,
  type = '',
) => ({
  code: errorCode,
  data,
  message: errorMessage,
  type,
})

const getApiResponseUsingRequestVerb = async <
  RequestData,
  ResponseData,
  Params = undefined,
  Data = undefined,
>({
  configParam,
  endpoint,
  isTbkApi,
  request,
  requestData,
}: {
  configParam?: {
    data?: Data
    params?: Params
  }
  endpoint: string
  isTbkApi?: boolean
  request: RequestType
  requestData?: RequestData
}): Promise<AxiosResponse<ResponseData, RequestData> | null> => {
  let authToken = ''
  if (!isTbkApi) {
    authToken = (await getAccessToken()) ?? ''
  }
  log.info('token', authToken)
  const { params, data } = configParam || {}
  const config = axiosConfig<Params>({ authToken, isTbkApi, params })

  const header = isTbkApi ? { ...API.tbkHeader } : { ...config.headers }
  config.headers = header

  switch (request) {
    case RequestType.GET:
      return axios.get(endpoint, config)
    case RequestType.POST:
      return axios.post(endpoint, requestData, config)
    case RequestType.PUT:
      return axios.put(endpoint, requestData, config)
    case RequestType.PATCH:
      return axios.patch(endpoint, requestData, config)
    case RequestType.DELETE:
      return axios.delete(endpoint, { ...config, data })
    default: {
      return Promise.resolve(null)
    }
  }
}

export const makeApiCall = async <RequestData, ResponseData, Params = undefined, Data = undefined>({
  configParam,
  endpoint,
  isTbkApi,
  request,
  requestData,
}: {
  configParam?: {
    data?: Data
    params?: Params
  }
  endpoint: string
  isTbkApi?: boolean
  request: RequestType
  requestData?: RequestData
}): Promise<IApiResponse<ResponseData>> => {
  try {
    const response = await getApiResponseUsingRequestVerb<RequestData, ResponseData, Params, Data>({
      configParam,
      endpoint,
      isTbkApi,
      request,
      requestData,
    })

    log.info('API Response', {
      baseUrl: isTbkApi ? API.tbkUrl : API.baseUrl,
      endpoint,
      payload: requestData,
      response: response?.data,
    })
    if (response?.status) {
      return mapAxiosResponseToLocalResponseType<RequestData, ResponseData>(response)
    }
    // May be we need to return specific error messages in future.
    return errorResponse(500, 'Could not get a response from API')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (exception: any) {
    // May be we need to return specific error messages in future.
    log.error(
      `API Error: ${API.baseUrl}${endpoint}`,
      `\n${exception}`,
      '\nresponse:',
      exception?.response?.data,
    )
    if (exception?.response?.status) {
      return errorResponse(
        exception?.response?.status,
        exception?.response?.data?.responseException?.exceptionMessage,
        exception?.response?.data,
        request.toLowerCase(),
      )
    }

    return errorResponse(
      ApiStatusCode.NetworkError,
      exception,
      exception?.response?.data,
      request.toLowerCase(),
    )
  }
}
