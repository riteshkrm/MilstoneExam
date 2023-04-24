let name = prompt("Enter your name: ");

let vowels = "aeiouAEIOU";
let count = 0;

for (let i = 0; i < name.length; i++) {
  if (vowels.includes(name[i])) {
    count++;
  }
}

console.log(`The number of vowels in your name is: ${count}`);
