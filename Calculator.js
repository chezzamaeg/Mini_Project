function calculate(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? "Cannot divide by zero" : a / b;
    default: return "Unknown operator";
  }
}

console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 5, "/")); // 2
console.log(calculate(10, 0, "/")); // Cannot divide by zero