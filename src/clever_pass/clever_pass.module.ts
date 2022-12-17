import { Module } from '@nestjs/common';
import { CleverPassService } from './clever_pass.service';
import { CleverPassController } from './clever_pass.controller';
import { MongooseModule } from '@nestjs/mongoose';
import FileSchema from 'src/schema/File.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name:'files',schema:FileSchema}])
  ],
  controllers: [CleverPassController],
  providers: [CleverPassService]
})
export class CleverPassModule {}
