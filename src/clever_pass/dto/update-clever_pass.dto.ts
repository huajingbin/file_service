import { PartialType } from '@nestjs/mapped-types';
import { CreateCleverPassDto } from './create-clever_pass.dto';

export class UpdateCleverPassDto extends PartialType(CreateCleverPassDto) {}
