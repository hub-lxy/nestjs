import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// v1 路由前缀
@Controller('v1')
export class AppController {
  // 依赖注入 相当于自动 new 了一个 AppService
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
