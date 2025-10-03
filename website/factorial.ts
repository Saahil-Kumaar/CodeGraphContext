// factorial.ts
// Recursive factorial function in TypeScript

function factorial(n: number): number {
  if (n < 0) {
    throw new Error("Negative numbers are not allowed.");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Example usage
try {
  console.log(factorial(5)); // Output: 120
} catch (error) {
  console.error(error.message);
}
