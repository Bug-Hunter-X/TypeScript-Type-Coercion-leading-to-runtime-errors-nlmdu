# TypeScript Type Coercion Runtime Error

This repository demonstrates a common issue in TypeScript where type coercion can lead to unexpected runtime errors despite the code compiling without errors.  The example involves adding two strings, where TypeScript allows the operation but performs string concatenation instead of numerical addition, resulting in a runtime error.

The `bug.ts` file contains the erroneous code.  The `bugSolution.ts` demonstrates the fix by using type guards or narrowing to prevent this issue.

This example highlights the importance of robust type checking and handling potential type errors to avoid unexpected behavior in your TypeScript applications.