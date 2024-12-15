function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", "world");
console.log(result); // This will compile but throw an error at runtime