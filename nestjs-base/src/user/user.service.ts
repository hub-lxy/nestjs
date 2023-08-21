import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  hello() {
    return 'hello user9999';
  }
  parametersQuery(query: Record<string, any>) {
    return `地址栏通过 ? + &（如： a?name="xxx"&age=18） 传递参数: ${JSON.stringify(
      query,
    )}`;
  }
  parametersParam(id: string) {
    return `地址栏通过 /xxx(如： a/123) 传递参数:  ${id}`;
  }
}
