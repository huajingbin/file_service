import { PartialType } from '@nestjs/mapped-types';
import { CreateMkdirDto } from './create-mkdir.dto';

export class UpdateMkdirDto extends PartialType(CreateMkdirDto) {}
