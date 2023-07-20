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

//
const addSubmission = (array, newName, newScore) => {
  array.push({ name: newName, score: newScore, passed: newScore >= 60 });
};
// addSubmission(submissions, "James", 100);
// console.log(submissions);

const deleteSubmissionByIndex = (array, index) => array.splice(index, 1);
// deleteSubmissionByIndex(submissions, 2);

const deleteSubmissionByName = (array, name) => {
  const nameIndex = array.findIndex((item) => item.name === name);
  array.splice(nameIndex, 1);
  // Below deletes multiple!
  // change array to LET
  // array.filter((item) => item.name !== name);
};
// deleteSubmissionByName(submissions, "Jack");
// console.log(submissions);

const editSubmission = (array, index, score) => {
  // find the Index that matches the name given in the search
  // const index = array.findIndex((item) => item.name === name)
  // looking in the given array, at the given index, at JUST the score, will now be the new given score
  array[index].score = score;
  // looking in the array, at the given index, at the passed area- is the score greaterthan or equel to 60? True or False.
  array[index].passed = score >= 60;
};
// editSubmission(submissions, 2, 80);

const findSubmissionByName = (array, name) =>
  array.find((item) => item.name === name);
// console.log(findSubmissionByName(submissions, "Jill"));

// reducde method will only return ONE thing
// pv = array[0] cv = array[1] if none undefined
// loop through the array, if cv.score is less than pv.score, return cv, if not, reutrn pv
// is current score less than previous score? if true return current : if false return previous
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
// const currentLowest = findLowestScore(array);
// const newArray = [];
// array.forEach((item) => item.score <= currentLowest.score)
// console.log(findLowestScore(submissions));

const findAverageScore = (array) => {
  return array.reduce((pv, cv) => pv + cv.score, 0) / array.length;
};
// console.log(findAverageScore(submissions));

// function filderPassing NEEDS an Array RETURN array.filter ((itemInArray) RETURN itemInArray.IFPASSEDISTRUE)
const filterPassing = (array) => array.filter((item) => item.passed);
// console.log(filterPassing(submissions));

const filter90AndAbove = (array) => array.filter((item) => item.score >= 90);
// console.log(filter90AndAbove(submissions));

const createRange = (start, end) => {
  const rangeArray = [];
  for (let i = start; i <= end; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
  // whilte(start <= end) {rangeArray.push(start++);} return rangeArray;
};
console.log(createRange(2, 5));

const countElements = (array) => {
  const newObject = {};
  array.forEach((item) => {
    if (newObject[item]) {
      newObject[item]++;
    } else {
      newObject[item] = 1;
    }
  });
  return newObject;
};
console.log(countElements(["a", "c", "a", "b", "a", "b"]));
