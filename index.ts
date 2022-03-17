declare const EmptyType: unique symbol;

/**
 * 自制 空类型
 */
class Empty {
  // 如果两个类型具有相似的结构，TypeScript会认为他们是兼容的 所以需要添加一个虚拟的viod属性
  [EmptyType]: void;
  private constructor() {}
}

function raise(message: string): Empty {
  // return 1 as unknown
  throw new Error('123')
}



declare const UnitType: unique symbol;
/**
 * 单元类型 只有一个值的的类型，可以任务是只有一个值的枚举 或者 没有状态的单例？？？
 */
class Unit {
  [UnitType]: void;
  private constructor() {}
  static readonly value: Unit = new Unit();
}

function greet(): Unit {
  console.log(123)
  return Unit.value;
}
