import { Injectable } from '@nestjs/common';
import { CreateGetFileDto } from './dto/create-get_file.dto';
import { UpdateGetFileDto } from './dto/update-get_file.dto';
import { Model } from 'mongoose';
import { File } from 'src/types';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class GetFileService {
  constructor(
    @InjectModel('files') private readonly fileModel:Model<File>
  ) {}
  create(createGetFileDto: CreateGetFileDto) {
    return 'This action adds a new getFile';
  }

  findAll():Promise<File[]> {
    return this.fileModel.find().exec()
  }

  findOne(id: string) {
    return this.fileModel.find({_id:id})
  }

  update(id: number, updateGetFileDto: UpdateGetFileDto) {
    return `This action updates a #${id} getFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} getFile`;
  }
}
