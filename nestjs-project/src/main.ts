import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 集成 swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RoleGuard } from './role/role.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 集成 swagger
  const options = new DocumentBuilder()
    .setTitle('接口文档')
    .setDescription('接口文档描述')
    .setVersion('1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);
  // 全局守卫
  // app.useGlobalGuards(new RoleGuard());
  await app.listen(3000);
}
bootstrap();
