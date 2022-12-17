import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GetFileModule } from './get_file/get_file.module';
import { MkdirModule } from './mkdir/mkdir.module';
import { UploadFileModule } from './upload_file/upload_file.module';
import { CleverPassModule } from './clever_pass/clever_pass.module';

@Module({
  imports: [
    GetFileModule,
    MongooseModule.forRoot('mongodb://localhost/file_server'),
    MkdirModule,
    UploadFileModule,
    CleverPassModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
