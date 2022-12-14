class FileDto {
  name: string
  size: number
  type:string
  filename:string
  path: string
  originalname:string
}

export class CreateUploadFileDto {
  fileName: string
  path: string
  file: FileDto
}
