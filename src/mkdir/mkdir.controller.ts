import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MkdirService } from './mkdir.service';
import { CreateMkdirDto } from './dto/create-mkdir.dto';
import { UpdateMkdirDto } from './dto/update-mkdir.dto';

@Controller('mkdir')
export class MkdirController {
  constructor(private readonly mkdirService: MkdirService) {}

  @Post()
  create(@Body() createMkdirDto: CreateMkdirDto) {
    return this.mkdirService.create(createMkdirDto);
  }

  @Get()
  findAll() {
    return this.mkdirService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mkdirService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMkdirDto: UpdateMkdirDto) {
    return this.mkdirService.update(+id, updateMkdirDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mkdirService.remove(+id);
  }
}
