import { Injectable, NestMiddleware } from '@nestjs/common';
// 中间件，需要在 app.module.ts 中进行注册
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('LoggerMiddleware 中间件逻辑触发');
    next();
  }
}

// 定义可以用于全局的中间件（需要在 main.ts 下进行使用）
export function logger(req, res, next) {
  console.log('自定义全局中间件 logger');
  next();
}
