import { Injectable } from '@nestjs/common';
import { CreateCleverPassDto } from './dto/create-clever_pass.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File } from 'src/types';

@Injectable()
export class CleverPassService {
  constructor(
    @InjectModel('files') private fileModel:Model<File>
  ){}
  async create(createCleverPassDto: CreateCleverPassDto) {
    const file = await this.fileModel.findOne({ md5: createCleverPassDto .md5})
    if (!file) {
      return '无'
    }
    this.fileModel.create({
      name: file.name,
      originalname: createCleverPassDto.name,
      network_address: file.network_address,
      type: file.type,
      user_path: createCleverPassDto.user_path,
      size: file.size,
      md5:file.md5
    })
    return '成功';
  }
}
