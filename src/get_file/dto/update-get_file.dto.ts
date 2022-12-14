import { PartialType } from '@nestjs/mapped-types';
import { CreateGetFileDto } from './create-get_file.dto';

export class UpdateGetFileDto extends PartialType(CreateGetFileDto) {}
