import { Injectable } from '@nestjs/common';
import { CreateUploadFileDto,FileDto } from './dto/create-upload_file.dto';
import { UpdateUploadFileDto } from './dto/update-upload_file.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File } from 'src/types';
import {join} from 'path';
import { writeFileSync } from 'fs'
import {v4 as uuid} from 'uuid'
import { savePath,assetsAddress } from 'src/config';
@Injectable()
export class UploadFileService {
  constructor(
    @InjectModel('files') private readonly fileModel:Model<File>
  ){}
  async create(files: FileDto[], body: CreateUploadFileDto) {
    for await (let file of files) {
      const saveName = uuid() + '-' + file.originalname
      writeFileSync(join(savePath, saveName), file.buffer)
      const network_address = assetsAddress + saveName
      this.fileModel.create({
        name: saveName,
        originalname: file.originalname,
        network_address,
        type: file.mimetype,
        user_path: body.user_path,
        size:file.size
      })
    }
    return '成功'
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
