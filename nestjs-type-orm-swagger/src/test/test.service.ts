import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test } from './entities/test.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private usersRepository: Repository<Test>,
  ) {}

  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }

  // 查询所有
  findAll() {
    return this.usersRepository.find();
  }

  // 通过 id 查询当前信息
  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  // 通过 id 删除
  async remove(id: number) {
    await this.usersRepository.delete(id);
    return `id: ${id} 删除成功`;
  }
}
