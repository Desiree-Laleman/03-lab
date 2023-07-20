"use strict";
const submissions = [
  {
    name: "Jane",
    score: 95,
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    passed: true,
  },
];

const addSubmission = (array, newName, newScore) => {
  array.push({ name: newName, score: newScore, passed: newScore >= 60 });
};
// addSubmission(submissions, "James", 100);

// const addSubmission = (array, newName, newScore) =>
//   array.push({ name: newName, score: newScore, passed: score >= 60 });
// addSubmission(submissions, "James", 100);
// console.log(submissions);

const deleteSubmissionByIndex = (array, index) => array.splice(index, 1);
// deleteSubmissionByIndex(submissions, 2);

const deleteSubmissionByName = (array, name) => {
  const nameIndex = array.findIndex((item) => item.name === name);
  array.splice(nameIndex, 1);
};
// deleteSubmissionByName(submissions, "Jack");

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
// editSubmission(submissions, 2, 80);

const findSubmissionByName = (array, name) =>
  array.find((item) => item.name === name);
// console.log(findSubmissionByName(submissions, "Jill"));

// pv = array[0] cv = array[1] if none defined
// loop through the array, if cv.score is less than pv.score, return cv, if not, reutrn pv
const findLowestScore = (array) => {
  return array.reduce((pv, cv) => (cv.score < pv.score ? cv : pv));
  //   let currentLowest = array[0];
  //   array.forEach((item) => {
  //     if (item.score < currentLowest.score) {
  //       currentLowest = item;
  //     }
  //   });
  //   return currentLowest;
};
// console.log(findLowestScore(submissions));

let sum = 0;
const findAverageScore = (array) => {
  return array.reduce((pv, cv) => pv + cv.score, 0) / array.length;
};
// console.log(findAverageScore(submissions));

const filterPassing = (array) => array.filter((item) => item.passed);
// console.log(filterPassing(submissions));

const filter90AndAbove = (array) => array.filter((item) => item.score >= 90);
// console.log(filter90AndAbove(submissions));

// God hath not seen thine R A G E like my furious and severe lack of understanding of what I am doing with these.
const createRange = (start, end) => {
  const rangeArray = [start];
  // WHILE the ending object/item is larger than the starting item
  // Plus one to the starting item, and slap it on the END of the new array....
  // I know I need to use the .reduce() method here for pv and cv so I can go "if the cv value === end then ABORT MISSION"
  // but how do I understand how to do that... MATHMATICALLY/SYSTEMATICALLY
  while (end > start) {
    rangeArray.push(start++);
  }
};
console.log(createRange(2, 5));

// Despite trying my best, I still can't get shit in detroit /ba-dum-tss
const countingArray = ["a", "c", "a", "b", "a", "b"];
const countElements = (array) => {
  array.findIndex((item) => {
    // my beautiful counters
    let aNum = 0;
    let bNum = 0;
    let cNum = 0;
    if (item === "a") {
      aNum++;
    } else if (item === "b") {
      bNum++;
    } else {
      cNum++;
    }
    // I'm hoping I just put the return wrong or something and this doesn't end up neeing the .map() method
    return [`a: ${aNum}`, `b: ${bNum}`, `c: ${cNum}`];
  });
};
console.log(countElements(countingArray));
