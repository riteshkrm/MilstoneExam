const numbers = [12, 7, 9, 21, 18, 14, 27];

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (num % 2 === 0) {
    continue;
  }
  if (num % 3 === 0) {
    console.log(num);
  }
}
