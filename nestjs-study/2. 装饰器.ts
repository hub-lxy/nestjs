// 装饰器就是一个函数
// 1. 测试类装饰器
const docClass: ClassDecorator = (target: any) => {
  // target 就是装饰的类
  console.dir(target);
  // 在传入类的原型身上添加自定义属性
  target.prototype._name_ = "类装饰器添加的自定义变量";
};

// 使用类装饰器
@docClass
class DecClass {
  constructor() {}
}

// 测试通过装饰器添加的额外属性
const decC: any = new DecClass();
console.log(decC._name_);

// 2. 测试属性装饰器
const doc: PropertyDecorator = (target: any, key: string | symbol) => {
  // target 为 DecClass2 的原型对象; key 当前属性
  target.name2 = "yyyy";
  console.log("属性装饰器：", target, key);
};

class DecClass2 {
  // 属性装饰器
  @doc
  public name: string;
  constructor() {
    this.name = "xxxx";
  }
}
// 测试
const decC2: any = new DecClass2();
console.log(decC2.name, decC2.name2);

// 3. 测试方法装饰器
const doc3: MethodDecorator = (
  target: any,
  key: string | symbol,
  descriptor: any
) => {
  // target 为 DecClass3 的原型对象; key 当前属性； descriptor 描述符
  console.log("方法装饰器：", target, key, descriptor);
};

class DecClass3 {
  constructor() {}
  // 方法装饰器
  @doc3
  getMsg() {}
}
// 测试
const decC3: any = new DecClass3();

// 4. 参数装饰器
const doc4: ParameterDecorator = (
  target: any,
  key: string | symbol | undefined,
  index: any
) => {
  // target 为 DecClass3 的原型对象; key 当前方法； index 参数索引
  console.log("方法参数的装饰器：", target, key, index);
};

class DecClass4 {
  constructor() {}
  getMsg(@doc4 msg: string) {}
}
// 测试
const decC4: any = new DecClass4();
