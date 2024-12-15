function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw new Error("Invalid input types for addition. Both arguments must be numbers.");
  }
}

let result = addSafe(10,20); //Correct addition
console.log(result); 

let result2 = addSafe("hello", "world"); //Throws error
console.log(result2); 