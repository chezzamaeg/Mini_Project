// 10 - Array Statistics (sum, average, min, max)
function stats(numbers) {
  const sum = numbers.reduce((total, n) => total + n, 0);
  return {
    sum,
    average: sum / numbers.length,
    min: Math.min(...numbers),
    max: Math.max(...numbers),
  };
}

console.log(stats([4, 8, 15, 16, 23, 42]));