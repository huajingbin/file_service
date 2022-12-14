import { Injectable } from '@nestjs/common';
import { CreateUploadFileDto } from './dto/create-upload_file.dto';
import { UpdateUploadFileDto } from './dto/update-upload_file.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File } from 'src/types';
@Injectable()
export class UploadFileService {
  constructor(
    @InjectModel('files') private readonly fileModel:Model<File>
  ){}
  create(createUploadFileDto: CreateUploadFileDto) {
    
    return 'This action adds a new uploadFile';
  }

  findAll() {
    return `This action returns all uploadFile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} uploadFile`;
  }

  update(id: number, updateUploadFileDto: UpdateUploadFileDto) {
    return `This action updates a #${id} uploadFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} uploadFile`;
  }
}
