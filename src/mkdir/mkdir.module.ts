import { Module } from '@nestjs/common';
import { MkdirService } from './mkdir.service';
import { MkdirController } from './mkdir.controller';
import FileSchema from 'src/schema/File.schema';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'files', schema:FileSchema }])
  ],
  controllers: [MkdirController],
  providers: [MkdirService]
})
export class MkdirModule {}
