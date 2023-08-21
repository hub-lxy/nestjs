1. nest 命令行帮助信息： `nest -h`
2. 生成一个控制器： `nest g co '控制器名称如：cat'` => 会生成对应的 cat.controller.ts（创建）； cat.controller.spec.ts（创建-jest的测试用例）； app.module.ts（更新）
3. 生成一个service层： `nest g s 'service名称如：cat'`
4. controller 注入 service 层逻辑：
   ```js
    <!-- Controller层： -->
    @Controller('cat')
    export class CatController {
      // 注入 service 层
      constructor(private readonly catservice: CatService) {}
      @Get('/hello')
      hello() {
        return this.catservice.hello();
      }
    }
    <!-- service层： -->
    @Injectable()
    export class CatService {
      hello() {
        return 'hello cat9999';
      }
    }
   ```
5. get 请求地址栏传参
6. 创建中间件： `nest g mi '中间件名称： logger'`