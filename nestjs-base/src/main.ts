import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './logger/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 使用全局自定义中间件（logger： 函数中间件）
  app.use(logger);
  await app.listen(3000);
}
bootstrap();
