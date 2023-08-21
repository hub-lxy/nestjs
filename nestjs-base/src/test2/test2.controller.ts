import { Body, Controller, Post } from '@nestjs/common';
import { Test2Service } from './test2.service';
import { CreateTestDto } from './dto/create-test.dto';

@Controller('test2')
export class Test2Controller {
  // 注入 service 层
  constructor(private readonly test2Service: Test2Service) {}
  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    return this.test2Service.create(createTestDto);
  }
}
