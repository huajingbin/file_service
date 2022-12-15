import { Controller, Get, Post, Body, Patch, Param, Delete,UseInterceptors,UploadedFiles } from '@nestjs/common';
import { UploadFileService } from './upload_file.service';
import { CreateUploadFileDto, FileDto } from './dto/create-upload_file.dto';
import { UpdateUploadFileDto } from './dto/update-upload_file.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('upload_file')
export class UploadFileController {
  constructor(private readonly uploadFileService: UploadFileService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  create(@UploadedFiles() files: FileDto[], @Body() body: CreateUploadFileDto) {
    return this.uploadFileService.create(files,body)
  }

  @Get()
  findAll() {
    return this.uploadFileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadFileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadFileDto: UpdateUploadFileDto) {
    return this.uploadFileService.update(+id, updateUploadFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadFileService.remove(+id);
  }
}
