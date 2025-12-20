// Reproduction for @stylistic/semi-spacing crash
// The crash occurs at TSTypeAnnotation when checking semicolon spacing

// Try various patterns that might trigger the issue

// Type annotation on variable declarations
const value: number = 42

// Type annotation with interface
interface MyInterface {
  prop: string
}

// Type annotation in function parameters
function test(param: string): void {
  const localValue: number = 42
  console.log(param, localValue)
}

// Type annotation in arrow functions
const arrowFn: (x: number) => number = (x) => x * 2

// Type assertion
const assertion = {} as { foo: string }

// Generic type annotation
const arr: Array<string> = []

// Object with type annotation
const obj: { key: string } = { key: "value" }

export { test, value, arrowFn, assertion, arr, obj }
export type { MyInterface }
