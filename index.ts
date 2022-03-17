declare const EmptyType: unique symbol;

class Empty {
  // 如果两个类型具有相似的结构，TypeScript会认为他们是兼容的 所以需要添加一个虚拟的viod属性
  [EmptyType]: void;
  private constructor() {}
}

function raise(message: string): Empty {
  // return 1 as unknown
  throw new Error('123')
}