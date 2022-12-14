import { Module } from '@nestjs/common';
import { GetFileService } from './get_file.service';
import { GetFileController } from './get_file.controller';
import FileSchema from 'src/schema/File.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name:'files',schema:FileSchema}])
  ],
  controllers: [GetFileController],
  providers: [GetFileService]
})
export class GetFileModule {}
