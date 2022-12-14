import { Module } from '@nestjs/common';
import { UploadFileService } from './upload_file.service';
import { UploadFileController } from './upload_file.controller';
import { MongooseModule } from '@nestjs/mongoose';
import FileSchema from 'src/schema/File.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name:'files',schema:FileSchema}])
  ],
  controllers: [UploadFileController],
  providers: [UploadFileService]
})
export class UploadFileModule {}
