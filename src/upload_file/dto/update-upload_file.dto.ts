import { PartialType } from '@nestjs/mapped-types';
import { CreateUploadFileDto } from './create-upload_file.dto';

export class UpdateUploadFileDto extends PartialType(CreateUploadFileDto) {}
