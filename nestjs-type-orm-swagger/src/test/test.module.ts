import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
// 关联实体
import { Test } from './entities/test.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // 关联实体
  imports: [TypeOrmModule.forFeature([Test])],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
