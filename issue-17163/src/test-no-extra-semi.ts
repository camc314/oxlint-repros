// Reproduction for @stylistic/no-extra-semi crash
// The crash occurs at MethodDefinition when checking for class body

// Class with various method definitions
class Compute {
  private value: number

  constructor(value: number) {
    this.value = value
  }

  getValue(): number {
    return this.value
  }

  compute(factor: number): number {
    return this.value * factor
  }

  // Static method
  static create(value: number): Compute {
    return new Compute(value)
  }

  // Getter
  get doubleValue(): number {
    return this.value * 2
  }

  // Setter
  set newValue(val: number) {
    this.value = val
  }

  // Async method
  async asyncMethod(): Promise<number> {
    return this.value
  }

  // Private method
  #privateMethod(): void {
    console.log(this.value)
  }
}

// Abstract class
abstract class AbstractClass {
  abstract abstractMethod(): void
}

// Class expression
const MyClass = class {
  method(): void {
    console.log("method")
  }
}

export { Compute, AbstractClass, MyClass }
