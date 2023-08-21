import { Injectable } from '@nestjs/common';
import { Test2 } from './interfaces/test.interface';

@Injectable()
export class Test2Service {
  create(test: Test2) {
    return `${JSON.stringify(test)} - 创建成功`;
  }
}
