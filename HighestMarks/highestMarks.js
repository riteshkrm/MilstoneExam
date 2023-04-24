const marks = [82, 91, 77, 95, 88 , 108];

let highestMarks = 0;

marks.forEach(mark => {
  highestMarks = mark > highestMarks ? mark : highestMarks;
});

console.log(`The highest marks scored by a student is ${highestMarks}.`);
