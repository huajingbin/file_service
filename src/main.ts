import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
import { savePath, port, assetsAPI } from './config'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(savePath,{
    prefix: `/${assetsAPI}`
  })
  await app.listen(port);
}
bootstrap();
