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
/*
function firstNonRepeatingLetter(str) {
  if (str.length === 1) {
    return str;
  };

  let arr = str.toLowerCase().split("");
  let wordsArr = [];

  for (let i = 0; i < arr.length; i++) {
    wordsArr = arr.filter(item => item === arr[i]);

    if (wordsArr.length === 1) {
      return str[i];
    };
  };

  return '';
};

console.log(firstNonRepeatingLetter('stress'));
console.log(firstNonRepeatingLetter('moonmen'));
console.log(firstNonRepeatingLetter(''));
console.log(firstNonRepeatingLetter('a'));
console.log(firstNonRepeatingLetter('sTreSS'));
console.log(firstNonRepeatingLetter('moonmEn'));
*/
// ----------------------------------------
/*
function sumStrings(a, b) { 
  console.log(BigInt(a));
  let createNumber = y => y === "" ?  0n : BigInt(y);
  return String(createNumber(a) + createNumber(b));
};

console.log(sumStrings('1', '2'));
console.log(sumStrings('', '2'));
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));
*/
// ----------------------------------------
/*
function rgb(r, g, b) {
  let checkMax = item => {
    if (item > 255) return 255;
    if (item < 0) return 0;

    return item;
  };

  return [checkMax(r), checkMax(g), checkMax(b)].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('').toUpperCase();
};

console.log(rgb(255, 255, 255));
console.log(rgb(0, 0, 0));
console.log(rgb(148, 0, 211));
console.log(rgb(255, 255, 300));
console.log(rgb(173, 255, 47));
console.log(rgb(0, 0, -1));
*/
// ----------------------------------------
/*
function formatDuration(time) {
  if (time === 0) { return "now"; };

  const years = Math.floor(time / (60 * 60 * 24 * 365));
  const days = Math.floor(time / (60 * 60 * 24)) % 365;
  const hours = Math.floor(time / (60 * 60)) % 24;
  const minutes = Math.floor(time / 60) % 60;
  const seconds = time % 60;

  const timeValues = [years, days, hours, minutes, seconds];
  const units = ['year', 'day', 'hour', 'minute', 'second'];

  const connect = timeValues.map((value, index) => {
    if (value > 1) {return value + ' ' + units[index] + 's'}
    if (value === 1) {return value + ' ' + units[index]}
  }).filter(value => value !== undefined);

  if (connect.length > 1) {
    const last = connect.pop();
    return connect.join(', ') + ' and ' + last;
  };

  return connect[0];
};

console.log(formatDuration(0));
console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(83543));
console.log(formatDuration(7534537));
*/
// ----------------------------------------
/*
// v1
function generateMarkdowns(markdown, text, urlOrLanguage) {
  if (markdown === "link") {
    return `[${text}](${urlOrLanguage})`;
  };

  if (markdown === "img") {
    return `![${text}](${urlOrLanguage})`;
  };

  if (markdown === "code") {
    return `\`\`\`${urlOrLanguage}\n${text}\n\`\`\``;
  };
  
  return;
};

// v2
let generateMarkdowns = (markdown, text, urlOrLanguage) => markdown === "link" 
  ? `[${text}](${urlOrLanguage})` : markdown === "img" 
  ? `![${text}](${urlOrLanguage})` : markdown === "code" 
  ? `\`\`\`${urlOrLanguage}\n${text}\n\`\`\`` : undefined;
*/
// ----------------------------------------
/*
function ipsBetween(start, end) {
  let startArr = start.split(".");
  let endArr = end.split(".");
  let resultArr = [];

  for (let i = 0; i < 4; i++) {
    startArr[i] === endArr[i] ? resultArr.push(0) : resultArr.push(endArr[i] - startArr[i]);
  };

  return resultArr[0] * Math.pow(256, 3) + resultArr[1]*Math.pow(256, 2) + resultArr[2] * 256 + resultArr[3];
};

console.log(ipsBetween("150.0.0.0", "150.0.0.1"), "--- 1"); 
console.log(ipsBetween("10.0.0.0", "10.0.0.50"), "--- 50");
console.log(ipsBetween("20.0.0.10", "20.0.1.0"), "--- 246");
console.log(ipsBetween("10.11.12.13", "10.11.13.0"), "--- 243");
console.log(ipsBetween("160.0.0.0", "160.0.1.0"), "--- 256");
console.log(ipsBetween("170.0.0.0", "170.1.0.0"), "--- 65536");
console.log(ipsBetween("50.0.0.0", "50.1.1.1"), "--- 65793");
console.log(ipsBetween("180.0.0.0", "181.0.0.0"), "--- 16777216");
console.log(ipsBetween("1.2.3.4", "5.6.7.8"), "--- 67372036");
console.log(ipsBetween("0.0.0.0", "255.255.255.255"), "--- ?");
*/
// ----------------------------------------
