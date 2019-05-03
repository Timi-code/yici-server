import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: true, // 不显示错误信息
    whitelist: true, // 开启过滤
  }))
  await app.listen(3000);
}
bootstrap();
