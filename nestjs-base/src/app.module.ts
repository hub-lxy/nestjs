import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { Test2Controller } from './test2/test2.controller';
import { Test2Service } from './test2/test2.service';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [],
  controllers: [AppController, UserController, Test2Controller],
  providers: [AppService, UserService, Test2Service],
})
export class AppModule {
  // 引入自定义中间件: LoggerMiddleware
  configure(consumer: MiddlewareConsumer) {
    // 拦截请求地址含 test2 的
    consumer.apply(LoggerMiddleware).forRoutes('test2');
    // 拦截请求地址为 get 请求的 user/parametersQuery 的请求
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'user/parametersQuery', method: RequestMethod.GET });
    // 给控制器(UserController)加上 自定义中间件
    consumer.apply(LoggerMiddleware).forRoutes(UserController);
    // 给控制器加上了中间件，如果不想请求某个地址经过中间件处理
    // consumer
    //   .apply(LoggerMiddleware)
    //   .exclude({
    //     path: '/user',
    //     method: RequestMethod.POST,
    //   })
    //   .forRoutes(UserController);
  }
}
