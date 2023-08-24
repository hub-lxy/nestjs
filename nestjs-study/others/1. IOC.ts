//  IOC 高层模块不应该依赖底层模块，二者都应该依赖其抽象；抽象不应该依赖细节；细节应该依赖抽象（DI 依赖注入）
class A {
  name: string;
  constructor() {
    // 当A类中的name属性需要通过外部new实例的时候传进来,那么此时就需要去修改B/C类使用到A类实例化A类的代码 => B/C强依赖与A
    // constructor(name: string) {
    //   this.name = name;
    this.name = "xxx";
  }
}

class B {
  a: any;
  constructor() {
    this.a = new A().name;
  }
}

class C {
  a: any;
  constructor() {
    this.a = new A().name;
  }
}

// 依赖注入/控制反转的方式解决上述问题
class D {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class F {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// 创建一个容器用来收集引用
class Container {
  mo: any;
  constructor() {
    this.mo = {};
  }

  // 提供注入的方式 => 收集引用
  provide(key: string, mo: any) {
    this.mo[key] = mo;
  }

  // 取引用类型
  get(key: string) {
    return this.mo[key];
  }
}

const mo = new Container();
mo.provide("d", new D("xxx"));
mo.provide("f", new F("yyy"));

class G {
  d: any;
  f: any;
  constructor(mo: Container) {
    this.d = mo.get("d");
    this.f = mo.get("f");
  }
}
// 在引入IOC容器 Container 之后，G 和 D/F的代码逻辑已经解耦，可以单独拓展其他功能，也方便引入其他模块
