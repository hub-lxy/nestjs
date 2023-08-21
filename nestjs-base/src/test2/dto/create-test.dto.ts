import { Test2 } from '../interfaces/test.interface';

// dto 层是对前端传入的数据进行校验
export class CreateTestDto implements Test2 {
  name: string;
  age: number;
}
