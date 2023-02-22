"use strict";

// ----------------------------------------
/*
// v1
function solution(str) {
  let arrayOfPairs = [];

  for (let i = 0; i < str.length; i += 2) {
    arrayOfPairs.push(str[i] + str[i + 1]);
  };

  if (str.length % 2 !== 0) {
    arrayOfPairs.splice(arrayOfPairs.length - 1, 1, `${str[str.length - 1]}_`);
  };

  return arrayOfPairs;
};

// v2
function solution(str) {
  let arrayOfPairs = [];

  for (let i = 0; i < str.length; i += 2) {
    arrayOfPairs.push(`${str[i] + (str[i + 1] || '_')}`);
  };

  return arrayOfPairs;
};

console.log(solution("asdwv"));
console.log(solution("asdwvo"));
console.log(solution(""));
*/
// ----------------------------------------
/*
let inArray = (array1, array2) => {
  let itemArray = [];

  for (let item of array1) {
    for (let key of array2) {
      if (key.includes(item) && !itemArray.includes(item)) itemArray.push(item);
      };
  };

  return itemArray.sort();
};

console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));
console.log(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"]));
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]));
*/
// ----------------------------------------
/*
function sumDigPow(a, b) {
  function pow(x) {
    let result = 0;
    let string = String(x);

    for (let i = 0; i < string.length; i++) {
      result += Math.pow(parseInt(string[i]), i + 1);
    };
      
    return result; 
  };

  let relultNumbers = [];

  for (a; a < b; a++) {
    if (a === pow(a)) {
      relultNumbers.push(a);
    };
  };

  return relultNumbers;
};

console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));
console.log(sumDigPow(10, 100));
console.log(sumDigPow(90, 100));
console.log(sumDigPow(90, 150));
console.log(sumDigPow(50, 150));
console.log(sumDigPow(10, 150));
console.log(sumDigPow(417, 2450));
*/
// ----------------------------------------
/*
const aaa = ['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp'];

const tabsBeforeIndex = aaa.splice(2 - 1, 1);
console.log(tabsBeforeIndex);
console.log(aaa);
*/
// ----------------------------------------
/*
// v1
// function deleteNth(arr, n){
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (result.includes(arr[i]) && result.filter(item => item === arr[i]).length < n) result.push(arr[i]);
//     if (!result.includes(arr[i])) result.push(arr[i]);

//     continue;
//   };
//   return result;
// };

// v2
function deleteNth(arr, n){
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.filter(item => item === arr[i]).length < n) result.push(arr[i]);
  };

  return result;
};

console.log(deleteNth([20, 37, 20, 21,], 1));
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));
console.log(deleteNth([20, 40, 20, 40, 50, 50, 40, 40, 40, 20, 50, 30, 30, 70, 70, 70, 60,], 4));
*/
// ----------------------------------------
/*
function order(words) {
  let resultArray = [];

  for (let word of words.split(" ")) {
    let arrayOfLetters = word.split("");

    for (let i = 0; i < arrayOfLetters.length; i++) {
      if (+arrayOfLetters[i] > 0) {
        resultArray[+arrayOfLetters[i] - 1] = word;
      };
    };
  };

  return resultArray.join(" ");
};

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
*/
// ----------------------------------------