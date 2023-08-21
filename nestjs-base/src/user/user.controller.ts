import {
  Controller,
  Delete,
  Get,
  Put,
  Post,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  // 注入 service 层
  constructor(private readonly userService: UserService) {}
  @Get('/hello')
  hello() {
    return this.userService.hello();
  }

  // 地址栏通过 ? + &（如： a?name="xxx"&age=18） 传递参数
  @Get('parametersQuery')
  // Record<string, any>： query的数据类型限制，类型键值对的形式
  parametersQuery(@Query() query: Record<string, any>) {
    console.log('query传参', query);
    return this.userService.parametersQuery(query);
  }

  // 地址栏通过 /xxx(如： a/123) 传递参数
  @Get('/parametersParam1/:id')
  parametersParam1(@Param('id') id: string) {
    return this.userService.parametersParam(id);
  }
  // Param 无参传递时，param将收到的是一个对象
  @Get('/parametersParam2/:id/:name')
  parametersParam2(@Param() param: { id: string; name: string }) {
    const id: string = param.id;
    const name: string = param.name;
    return `名字： ${name} - id： ${id}`;
  }

  @Delete(':id')
  deleteUserById(@Param() param: { id: string }) {
    return `删除id为： ${param.id} 的用户`;
  }

  @Put(':id')
  updateUserById(@Param('id') id: string) {
    return `更新当前用户通过id: ${id}`;
  }

  @Post()
  createUser(@Body() user: Record<string, any>) {
    return `当前用户创建成功： ${JSON.stringify(user)}`;
  }
}
