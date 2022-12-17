import { Controller, Post, Body } from '@nestjs/common';
import { CleverPassService } from './clever_pass.service';
import { CreateCleverPassDto } from './dto/create-clever_pass.dto';

@Controller('clever_pass')
export class CleverPassController {
  constructor(private readonly cleverPassService: CleverPassService) {}

  @Post()
  async create(@Body() createCleverPassDto: CreateCleverPassDto) {
    return await this.cleverPassService.create(createCleverPassDto);
  }
}
