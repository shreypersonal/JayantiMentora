/**
 * Converts keys of an object from snake_case to camelCase recursively
 * @param obj Input object whose key need to be converted
 * @returns Object with keys converted to camelCase
 */
export const convertKeysToCamelCase = (obj: any): any => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(item => convertKeysToCamelCase(item))
  }

  return Object.keys(obj).reduce((acc, key) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
    const value = obj[key]

    acc[camelCaseKey] =
      typeof value === 'object' && value !== null ? convertKeysToCamelCase(value) : value

    return acc
  }, {})
}

export const toSnakeCase = (str: string): string =>
  str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')
    .toLowerCase()

export const convertKeysToSnakeCase = (data: any): any => {
  let res = data
  if (Array.isArray(data)) {
    res = data.map(convertKeysToSnakeCase)
  } else if (data !== null && typeof data === 'object') {
    res = Object.entries(data).reduce((acc, [key, value]) => {
      const newKey = toSnakeCase(key)
      acc[newKey] = convertKeysToSnakeCase(value)
      return acc
    }, {} as { [key: string]: any })
  }
  return res
}
