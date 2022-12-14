import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GetFileService } from './get_file.service';
import { CreateGetFileDto } from './dto/create-get_file.dto';
import { UpdateGetFileDto } from './dto/update-get_file.dto';

@Controller('get_file')
export class GetFileController {
  constructor(private readonly getFileService: GetFileService) {}

  @Post()
  create(@Body() createGetFileDto: CreateGetFileDto) {
    return this.getFileService.create(createGetFileDto);
  }

  @Get()
  async findAll() {
    return await this.getFileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getFileService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGetFileDto: UpdateGetFileDto) {
    return this.getFileService.update(+id, updateGetFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.getFileService.remove(+id);
  }
}
