import { Injectable } from '@nestjs/common';
import { CreateMkdirDto } from './dto/create-mkdir.dto';
import { UpdateMkdirDto } from './dto/update-mkdir.dto';
import { File } from 'src/types';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MkdirService {
  constructor(
    @InjectModel('files') private readonly fileModel:Model<File>
  ){}
  async create(createMkdirDto: CreateMkdirDto) {
    const res = await this.fileModel.create({
      name: createMkdirDto.name,
      originalname: '',
      network_address: '',
      type: 'folder',
      user_path:createMkdirDto.path
    })
    console.log(res);
    return true;
  }

  findAll() {
    return `This action returns all mkdir`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mkdir`;
  }

  update(id: number, updateMkdirDto: UpdateMkdirDto) {
    return `This action updates a #${id} mkdir`;
  }

  remove(id: number) {
    return `This action removes a #${id} mkdir`;
  }
}
