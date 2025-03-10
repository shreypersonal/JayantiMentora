export interface IDownloadFileType {
  documentName?: string | null
  onComplete?: () => void
  onError?: () => void
  onProgress?: ({ received, total }: IOnprogressType) => void
  url: string
}

export interface IOnprogressType {
  received: number
  total: number
}

export interface IUploadFileInfoType {
  name: string
  size: number
  uri: string
}

export type UploadToS3Type = {
  fileName: string
  filePath: string
  onUploadComplete?: (path: string) => void
  onUploadError?: (error: unknown) => void
  projectId: number
  type: string
  unitId: number
}

export interface IFileInfo {
  fileSize?: number
  url?: string
}
