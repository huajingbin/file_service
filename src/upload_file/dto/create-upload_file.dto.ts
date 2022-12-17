export class FileDto {
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
  buffer: Buffer
  size:number
}

export class CreateUploadFileDto {
  user_path:string
}
