"use strict";

// ----------------------------------------
// function first() {

//   function third() {
//     console.log("function third " + a);
//   }

//   let a = "function first " + 8;
//   console.log(a);
//   second();
//   third();
// }

// function second() {
//   console.log("function second " + a);
// }

// let a = "global " + 5;
// console.log(a);
// first();

// ----------------------------------------
// var x = 10;
// if ( (null) || (console.log("Hello")) || x > 5 ) {
//   console.log("Hello");
// }

// ----------------------------------------
// const fafa = Object();
// fafa.name = "Marta";
// fafa.years = 8;
// fafa.color = 'red';

// console.log(fafa);
// console.log("Person name is: " + fafa.name);
// console.log("Person years is: " + fafa['years']);

// const colors = 'color';
// console.log("Person color is: " + fafa[colors]);

// fafa.obj = Object();
// const firstName = "firstBook";
// const secondName = "secondBook";
// fafa.obj[firstName] = 'hero';
// fafa.obj[secondName] = 'weather';

// console.log(fafa);
// console.log(fafa.obj.firstBook);
// console.log(fafa.obj[secondName]);

// ----------------------------------------
// const fafa = {
//   name: "Marta",
//   years: 8,
//   color: 'red',
//   obj: {
//     firstBook: 'hero',
//     secondBook: 'weather',
//   },
// };

// console.log(fafa);
// console.log("Person name is: " + fafa.name);
// console.log("Person years is: " + fafa['years']);
// console.log("Person color is: " + fafa['color']);

// console.log(fafa);
// console.log("Person book is: " + fafa.obj.firstBook);
// console.log("Person book is: " + fafa.obj['secondBook']);

// ----------------------------------------
// function credit(time) {
//   const result = function (price, percentage) {
//     return ((price + price * percentage / 100) / time).toFixed(2);
//   };

//   return result;
// };

// const halfYear = credit(6);
// console.log('Щомісячний платіж: ' + halfYear(10000, 10) + " грн");

// const quarterYear = credit(3);
// console.log('Щомісячний платіж: ' + quarterYear(8000, 5) + " грн");

// ----------------------------------------
// function makeMultiplier(multiplier) {
//   var myFunFunc = function (x) {
//     return multiplier * x;
//   };
  
//   return myFunFunc;
// }

// var operation = makeMultiplier(10);
// console.log(operation(10));

// ----------------------------------------
// function Rectangle(a, b) {
//   this.firstSide = a;
//   this.secondSide = b;
// };

// Rectangle.prototype.Area = function () {
//   return (this.firstSide * this.secondSide);
// };

// const myRectangle = new Rectangle(10, 5);
// console.log(myRectangle);
// console.log(myRectangle.Area());

// ----------------------------------------
// function firstDog(name) {
//   this.name = name;
// }

// firstDog.prototype.bark = function () {
//   console.log(this.name + " likes barking! Bark!");
// }

// var max = new firstDog("Max", "Buddy");
// console.log(max);
// max.bark();

// ----------------------------------------

// function secondDog(firstName, secondName) {
//   this.firstName = firstName;
//   this.secondName = secondName;
// }

// secondDog.prototype.bark = function () {
//   console.log(this.firstName + " likes barking! Bark!");
//   console.log(this.secondName + " likes barking! Bark!");
// }

// var max = new secondDog("Max", "Buddy");
// console.log(max);
// max.bark();

// ----------------------------------------
// const books = {
//   first: "Weather",
//   second: "Home",
//   third: "Banana",
//   fourth: "Item",
// };
// console.log("--------------------------");
// console.log("for-in for object");
// console.log("--------------------------");
// for (let book in books) {
//   console.log(book + ": " + books[book]);
// };

// const Books = ["Weather", "Home", "Banana", "Item"];

// console.log("--------------------------");
// console.log("for-in for array");
// console.log("--------------------------");
// for (let book in Books) {
//   console.log(book + ": " + Books[book]);
// };

// console.log("--------------------------");
// console.log("for-of for array");
// console.log("--------------------------");
// for (let book of Books) {
//   console.log(book);
// };

// ----------------------------------------
// var counter = 0;
// var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
// for (var i = 0; i < myArray.length; i++) {
//   counter++;
// }
// console.log(counter);

// ----------------------------------------
// const firstPerson = {};
// firstPerson.name = "Oleksii";
// firstPerson.hello = function () {
//   console.log(`Welcome ${firstPerson.name}!`);
// }

// const secondPerson = {};
// secondPerson.name = "Julia";
// secondPerson.hello = function () {
//   console.log(`Welcome ${secondPerson.name}!`);
// }

// const thirdPerson = {};
// thirdPerson.hello = function (name) {
//   console.log(`Welcome ${name}!`);
// }

// firstPerson.hello();
// secondPerson.hello();
// thirdPerson.hello("Ludmila");

// ----------------------------------------
// (function(window) {

//   var obj = {};
//   obj.dreamOn = function () {
//   console.log("I want to see the global scope! Let me out!");
//   };

//   window.doer = obj;

// })(window);

// doer.dreamOn();

// ----------------------------------------
// function checkObj(obj, checkProp) {
//   // Only change code below this line
//   console.log(obj.hasOwnProperty(checkProp));
//   console.log(checkProp);

//   if (obj.hasOwnProperty(checkProp)) {
//     console.log(obj[checkProp]);
//     return obj.checkProp;
//   } else {
//     return "Not Found";
//   };
//   // Only change code above this line
// };

// checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift");

// ----------------------------------------
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     delete records[id][prop];
//   } else if (prop !== "tracks" && prop !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && !([prop] in records[id])) {
//     records[id][prop] = [value];
//   } else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   };

//   return records;
// }

// updateRecords(recordCollection, 2548, "artist", "")

// ----------------------------------------
// Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// const firstNameAr = "Akira";
// const firstNameAr = "Bob";
// const prop = "likes";

// for (let i = 0; i < contacts.length; i++) {
//   for (const item in contacts[i]) {
//     if (contacts[i][item] === firstNameAr && item in contacts[i]) {
//       console.log("Done");
//       console.log(contacts[i][prop]);
//       // return contacts[i][prop];
//     } else if (!(contacts[i].firstName === firstNameAr)) {
//       console.log(!(contacts[i].firstName === firstNameAr));
//       console.log("No such contact");
//     };
//   };
// };

// let result = null;

// for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === firstNameAr && prop in contacts[i]) {
//       console.log("Done");
//       console.log(contacts[i][prop]);
//       // result = contacts[i][prop];
//     } else if (!(contacts[i].firstName === firstNameAr)) {
//       let result = "No such contact";
//       console.log(contacts[i].firstName);
//       console.log(!(contacts[i].firstName === firstNameAr));
//       console.log("No such contact");
//       // result = "No such contact";
//   };
  
// };

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   let result;

//   for (let i = 0; i < contacts.length; i++) {
//       if (contacts[i].firstName === name && prop in contacts[i]) {
//         console.log("Done");
//         console.log(contacts[i][prop]);
//         return contacts[i][prop];
//       } else if (contacts[i].firstName === name && !(prop in contacts[i])) {
//         console.log(prop in contacts[i]);
//         console.log(!(prop in contacts[i]));
//         console.log("No such property");
//         return "No such property";
//       } else if (!(contacts[i].firstName === name)) {
//         console.log(contacts[i].firstName);
//         console.log(!(contacts[i].firstName === name));
//         console.log("No such contact");
//         result = "No such contact";
//       };
//   };

//   console.log("-----------------------------------------");
//   console.log(result);
//   return result;
//   // Only change code above this line
// };

// lookUpProfile("Akira", "likes");
// console.log("-----------------------------------------");
// lookUpProfile("Bob", "likes");
// console.log("-----------------------------------------");
// lookUpProfile("Akira", "potato");

// ----------------------------------------
// function randomRange(myMin, myMax) {
//   // Only change code below this line
//   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Math.floor(Math.random() * (10 - 5 + 1)) + 5
//   // Only change code above this line
// }

// console.log(randomRange(5, 10));
// console.log(randomRange(5, 10));
// console.log(randomRange(5, 10));
// console.log(randomRange(5, 10));

// ----------------------------------------
// function convertToInteger(str) {
//   return parseInt(str);
// };

// console.log(convertToInteger("56"));
// console.log(convertToInteger("4"));
// console.log(convertToInteger("478282"));
// console.log(convertToInteger(" "));
// console.log(convertToInteger("a"));
// console.log(convertToInteger("fox"));

// ----------------------------------------

// function convertToInteger(str) {
//   return parseInt(str, 2);
// }

// console.log(convertToInteger("100110110110"));
// console.log(convertToInteger("303"));
// console.log(convertToInteger("1"));
// console.log(convertToInteger("0"));

// ----------------------------------------

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     console.log(n);
//     console.log(countArray);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));

// ----------------------------------------
// function countdown(n){
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     console.log(n);
//     console.log(countArray);
//     countArray.unshift(n);
//     return countArray;
//   };
// };

// console.log(countdown(10));

// ----------------------------------------
// function rangeOfNumbers(startNum, endNum) {
//   if (startNum <= 0 || endNum <= 0 || startNum > endNum) {
//     return [];
//   } else {
//     const numArray = rangeOfNumbers(startNum + 1, endNum - 1);
//     console.log(startNum);
//     console.log(endNum);
//     console.log(numArray);
//     numArray.push(endNum);
//     return numArray;
//   };
// };

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum <= 0 || endNum <= 0 || startNum > endNum) {
//     return [];
//   } else if (startNum === endNum) {
//     return [startNum];
//   } else {
//     const numArray = rangeOfNumbers(startNum, endNum - 1);
//     console.log(startNum);
//     console.log(endNum);
//     console.log(numArray);
//     numArray.push(endNum);
//     return numArray;
//   };
// };

// console.log(rangeOfNumbers(4, 4));

// ----------------------------------------
// let name = "oleksii",
//   value = 28,
//   habits = ["sport", "eat"];

// console.log(name);
// console.log(value);
// console.log(habits);

// ----------------------------------------
// let userEyesColor;

// let user;
// let USER_NAME = 'Vasya';
// user = USER_NAME;

// console.log(user);

// ----------------------------------------
// console.log("35" + - "22");
// console.log("35" * "22");
// // console.log("558" > 22++);

// let userName = 0;
// let newUser = userName++;
// console.log(newUser);
// console.log(userName);

// console.log(!false && 11 || 18 && !"");
// console.log(11 && 18);

// let name = 0;
// console.log(name ?? "Hello");

// ----------------------------------------
/*
const s = [5, 7, 2];
console.log(s);
function editInPlace() {
  // Only change code below this line
  // Using s = [2, 5, 7] would be invalid
  // let x = ;
  // console.log(x);
  s.unshift(s.pop(s.length - 1));
  // console.log(s);
  // Only change code above this line
}
editInPlace();
console.log(s);
*/
// ----------------------------------------
/*
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

console.log(sum(1,2,3,4));
*/
// ----------------------------------------
/*
let a = 8, b = 6; 

const array = [a, b];

console.log(a);
console.log(b);
console.log(array);

[b, a] = array;

console.log(a);
console.log(b);
console.log(array);
*/
// ----------------------------------------
/*
function removeFirstTwo(list) {
  // Only change code below this line
  const [,, ...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo);
*/
// ----------------------------------------
/*
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
console.log(stats.max);
console.log(stats.min);

const half = ({ max, min }) => (max + min) / 2.0;
console.log(half(stats));
// Only change code above this line
*/
// ----------------------------------------
// var1
/*
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
  // Only change code below this line
  const failureItems = [
    `<li class="text-warning">${result.failure[0]}</li>`,
    `<li class="text-warning">${result.failure[1]}</li>`,
    `<li class="text-warning">${result.failure[2]}</li>`
  ];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);
*/
// ----------------------------------------
// var2
/*
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
  // Only change code below this line
  const failureItems = [];

  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`);
  };
  // Only change code above this line

  return failureItems;
};

const failuresList = makeList(result.failure);
console.log(failuresList);
*/
// ----------------------------------------
/*
class Thermostat {
  constructor(temp) {
    this._temp = temp;
  }
  // getter
  get temperature() {
    return (5 / 9 * (this._temp - 32));
  }
  // setter
  set temperature(updatedTemp) {
    this._temp = updatedTemp * 9.0 / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos);
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
*/
// ----------------------------------------
/*
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});
*/
// ----------------------------------------
/*
if (10 > 9 && !"" == true) console.log("hello!");
console.log("-----------");
if ("" == false || null == true) console.log("hello!");
console.log(null == true);
console.log("-----------");
if (true) console.log("hello!");
console.log("-----------");
if (Boolean("1") === Boolean(1)) console.log("hello!");
console.log("-----------");
if (Boolean(undefined) === Boolean(0)) console.log("hello!");
*/
// ----------------------------------------
/*
let x = 5;
const MAX = 50;
const ARRAY = [];

for (; x < MAX; x++) {
  console.log(x);
  ARRAY.push(x);
  if (x === 39) {
    console.log(`Incorrect value: ${x}. The end!`);
    break;
  };
};

console.log('---------------');
console.log(ARRAY);
*/
// ----------------------------------------
/*
const ARRAY = [];

function evenNumbers(startNumber, endNumber) {
  for (; startNumber <= endNumber; startNumber++) {
    if (startNumber % 2 !== 0) continue;
    ARRAY.push(startNumber);
  };
};

evenNumbers(0, 100)
console.log(ARRAY);
*/
// ----------------------------------------
/*
const ARRAY = [[1, 4, 8, 2], [3, 7, 4, 6, 12, 44, 2], [11, 28, 49, 2, 4], [240, 2, 110, 14], [240, 11, 22, 14], [2, 0, 22, 14]];
let value = 0;

reset: for (let i = 0; i < ARRAY.length; i++) {
  for (let j = 0; j < ARRAY[i].length; j++) {
    if (ARRAY[i][j] === 2) {
      value++;
      continue reset;
    };
  };
};

console.log(`${value} "two" were found in this array.`);
*/
// ----------------------------------------
/*
let num = 8;
while (num) {
  console.log(num);
  num--;
}
*/
// ----------------------------------------
/*
let showMessage = (name, text) => console.log(`${text} ${name}!`);
setTimeout(showMessage, 500, "Oleksii", "Hello");

let showNumbers = (startNumber, endNumber) => {
  console.log(startNumber);
  if (startNumber < endNumber) {
    setTimeout(showNumbers, 1000, startNumber += 2, endNumber);
  };
};
setTimeout(showNumbers, 1000, 10, 50);

let showNumbers = (startNumber, endNumber) => {
  console.log(startNumber);
  let clear = setTimeout(showNumbers, 1000, startNumber += 2, endNumber);
  if (startNumber > endNumber) {
    clearTimeout(clear);
  };
};
setTimeout(showNumbers, 1000, 10, 50);
*/
// ----------------------------------------

// let result = 0;
// let value = 0;

// let showRandomNumber = (minNumber, maxNumber, maxValue) => {
//   let number = Math.round((Math.random() * (maxNumber - minNumber)) + minNumber);
//   result += number;
//   value++;

//   console.log(number);

//   if (result >= maxValue) {
//     clearInterval(timeID);
//     console.log(`The sum of numbers is more than ${maxValue}!\nQuantity of numbers: ${value}.`);
//   }
// }
// let timeID = setInterval(showRandomNumber, 500, 5, 50, 500);

// ----------------------------------------

// let showName = () => console.log("Vasya!");
// setTimeout(showName, 0);
// console.log("Kolya!");

// ----------------------------------------
/*
const OBJ = {
  firstName: "Oleksii",
  lastName: "Anoshkin",
  age: 28,
};

let newObj = Object.assign({}, OBJ);

console.log(OBJ);
console.log(newObj);

newObj.firstName = "Ludmila";
newObj.lastName = "Kilomiets";
newObj.age = 46;

console.log('------------------------');
console.log(OBJ);
console.log(newObj);

newObj = Object.assign({}, { firstName: "Julia", lastName: "Kilomiets", age: 24 });

console.log('------------------------');
console.log(OBJ);
console.log(newObj);

newObj = Object.assign(OBJ, { firstName: "Richard" });

console.log('------------------------');
console.log(OBJ);
console.log(newObj);
*/
// ----------------------------------------
/*
const OBJ = {
  firstName: "Oleksii",
  lastName: "Anoshkin",
  age: 28,
  adress: {
    city: 'Kharkiv',
    country: 'Ukrain',
  },
}

console.log(OBJ.firstName);
console.log(OBJ.adress.house);
console.log(OBJ?.adress?.house);
*/
// ----------------------------------------
/*
let userInfo = {
  name: "Vasya",
  age: 30,
  "58": "Значення",
};
console.log(userInfo[58]);
*/
// ----------------------------------------
/*
let userInfo = {
  name: "Vasya",
  age: 30,
};

let user = userInfo;
user.age = 45;
console.log(userInfo.age);
*/
// ----------------------------------------
/*
let userInfo = {
  name: "Vasya",
  age: 30,
  showInfo() {
    console.log(`${this.name}`);
  },
};

let user = userInfo;
userInfo = null;
user.showInfo();
console.log(user);
*/
// ----------------------------------------
/*
let x = 123 + "123";
console.log(x);

let y = 'Oleksii';
console.log(y.toUpperCase());
console.log(y[3]);
console.log(y.slice(3, y.length - 1));
console.log(y.includes("leks"));
*/
// ----------------------------------------
/*
let mainArray = [
  { name: "Oleksii", age: 28, },
  { name: "Julia", age: 24, },
  { name: "Ludmila", age: 46, },
  { name: "Oleksandr", age: 43, },
  { name: "Richsrd", age: 14, },
  { name: "Tolya", age: 16, },
  { name: "Sveta", age: 17, },
];


let userName = "Oleksii";
let infoName = array.find(function (item, index, array) {
  console.log(item);
  console.log(index);
  console.log(array);
  return item.name === userName;
});
// let info = array.find(item => item.name === userName); // скорочена форма
console.log(infoName);

let userAge = 18;
// let infoAge = array.filter(function (item, index, array) {
//   return item.age < userAge;
// });
let infoAge = array.filter(item => item.age < userAge); // скорочена форма
console.log(infoAge);

// ----------------------------------------
// console.log(mainArray);
// let reverseArray = mainArray.concat().reverse();
// console.log(reverseArray);

let CreateNameArray = array => {
  let nameArray = [];
  if (array.length === 0) {
    return array;
  } else {
    for (let i = 0; i < array.length; i++) {
      nameArray.push(array[i].name);
    };

    return nameArray;
  };    
};

console.log(CreateNameArray(mainArray));

let sortNameArray = CreateNameArray(mainArray).sort();
console.log(sortNameArray);
*/
// ----------------------------------------
/*
let arr = [9, 2, 8,];
let reduceValue = arr.reduce(function (x, y, z, a) {
  console.log(x);
});
console.log(reduceValue);
*/
// ----------------------------------------
/*
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(array, bookName) {
  console.log(array);
  console.log(bookName);

  return array.concat(bookName);
  
  // Change code above this line
}

// console.log(add(bookList, "A Brief History of Time"));
// console.log(bookList);

// Change code below this line
function remove(array, bookName) {
  const book_index = array.indexOf(bookName);
  console.log(book_index);

  if (book_index >= 0) {
    
    return array.concat().splice(0, book_index).concat(array.concat().splice(book_index + 1, array.length));

    // Change code above this line
    }
}

// console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));
// console.log(bookList);

console.log(remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies"));
*/
// ----------------------------------------
/*
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  // Only change code above this line
  return newArray;
};

[23, 65, 98, 5, 13].myMap(item => item * 2);
*/
// ----------------------------------------
/*
// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const filteredList = watchList.filter(item => item["imdbRating"] >= 8.0).map(item => ({ title: item["Title"], rating: item["imdbRating"] }));

// Only change code above this line

console.log(filteredList);
*/
// ----------------------------------------
/*
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    };
  };
  // Only change code above this line
  return newArray;
};

console.log([23, 65, 98, 5, 13].myFilter(item => item % 2));
*/
// ----------------------------------------
/*
// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList) {
  // Only change code below this line
  let arrLength = (arr) => (arr.filter(item => item["Director"] === "Christopher Nolan")).length;
  let arrSum = (arr) => arr.filter(item => item["Director"] === "Christopher Nolan").reduce((sum, item) => {
    return sum += parseFloat(item["imdbRating"])
  }, 0);
  let result = (arr) => arrSum(arr) / arrLength(arr);

  let averageRating = result(watchList);
  // Only change code above this line
  return averageRating;
}

console.log(getRating(watchList));
*/
// ----------------------------------------
/*
const squareList = arr => {
  // Only change code below this line
  return arr.filter(number => number > 0 && Number.isInteger(number)).map(number => Math.pow(number, 2));
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
*/
// ----------------------------------------
/*
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line

  return arr.concat([]).sort( (a, b) => a - b );

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
console.log(nonMutatingSort([1, 30, 4, 21, 100000]));
*/
// ----------------------------------------
/*
function splitify(str) {
  // Only change code below this line
  return str.split(/[ ,-]/);

  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));
*/
// ----------------------------------------
/*
// Only change code below this line
function urlSlug(title) {
  return title.toLowerCase().split(/[ ]/).filter(item => item.length !== 0).join("-");

}
// Only change code above this line
console.log(urlSlug(" Winter Is  Coming"));
*/
// ----------------------------------------
/*
// v1
function add(x) {
  // Only change code below this line
    return function(y) {
      return function(z) {
        return x + y + z;
    };
  };
  // Only change code above this line
}

// v2
let add = x => y => z => x + y + z;

console.log(add(10)(20)(30));
*/
// ----------------------------------------
/*
function reverseString(str) { 
  return str.split("").reverse().join("");
};

console.log(reverseString("hello"));
*/
// ----------------------------------------
/*
// v1
// function factorialize(num) {
//   let sum = 1;

//   for (num; num > 0; num--) {
//     console.log(num);
//     sum *= num;
//     console.log(sum);
//   };
    
//   return sum;
// };

// v2
function factorialize(num) {
  let sum = 1;

  console.log(num);

  if (num > 0) {
    sum = num * factorialize(num - 1);
    console.log(sum);
  }

  return sum;
};

console.log(factorialize(5));
*/
// ----------------------------------------
/*
function findLongestWordLength(str) {
  return str.split(" ").map(item => item.length).sort((a, b) => a - b).pop();
};

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
*/
// ----------------------------------------
/*
function largestOfFour(arr) {
  return arr.map(arrey => arrey.sort((a, b) => a - b).pop());
};

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
*/
// ----------------------------------------
/*
function confirmEnding(str, target) {
  return str.slice(str.length - target.length, str.length) === target;
};

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Bastian", "an"));
console.log(confirmEnding("Bastian", "on"));
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
console.log(confirmEnding("Abstraction", "action"));
*/
// ----------------------------------------
/*
function repeatStringNumTimes(str, num) {
  let newStr = "";
  if (num > 0) for (let i = 0; i < num; i++) newStr += str;
  return newStr;
};

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));
*/
// ----------------------------------------
/*
function truncateString(str, num) {
  // console.log(num >= str.length || "...");
  if (num >= str.length) {
    return str;
  };
  return str.slice(0, num) + "...";
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
*/
// ----------------------------------------
/*
function findElement(arr, func) {
  return arr.find(func);
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));
*/
// ----------------------------------------
/*
function booWho(bool) {
  return typeof bool === "boolean";
};

console.log(booWho(null));
console.log(booWho(false));
*/
// ----------------------------------------
/*
function titleCase(str) {
  return str.toLowerCase().split(" ").map(item => item.replace(item[0], item[0].toUpperCase())).join(" ");
}

console.log(titleCase("I'm a little tea pot"));
*/
// ----------------------------------------
/*
function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.concat();
  arr1.map((arr, index) => newArr.splice(index + n, 0, arr));
  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
*/
// ----------------------------------------
/*
function bouncer(arr) {
  return arr.filter(item => Boolean(item) !== false);
};

console.log(bouncer([7, "ate", "", false, 9]));
*/
// ----------------------------------------
/*
function getIndexToIns(arr, num) {
  if (arr.length === 0) return 0;
  if (num > arr.sort((a, b) => a - b)[arr.length - 1]) return (arr.length);
  return arr.sort((a, b) => a - b).findIndex((item) => item >= num);
};

console.log(getIndexToIns([2, 20, 10], 19), ": 2");
console.log(getIndexToIns([2, 5, 10], 15), ": 3");
*/
// ----------------------------------------
/*
// v1
// function mutation(arr) {
//   let secondArr = arr[1].toLowerCase().split("");
//   // console.log(secondArr);
//   // console.log(arr[0].toLowerCase().includes("h"));

//   for (let i = 0; i < secondArr.length; i++) {
//     // console.log(secondArr[i]);
//     // console.log(arr[0].toLowerCase().includes(secondArr[i]));
//     if (!arr[0].toLowerCase().includes(secondArr[i])) return false;
//   };

//   return true;
// };

// v2
function mutation(arr) {
  for (let i = 0; i < arr[1].toLowerCase().split("").length; i++) {
    if (!arr[0].toLowerCase().includes(arr[1].toLowerCase().split("")[i])) return false;
  };
  return true;
}

console.log(mutation(["hello", "neo"], ": false"));
console.log(mutation(["Mary", "Aarmy"], ": true"));
*/
// ----------------------------------------
/*
function chunkArrayInGroups(arr, size) {
  let newArr = [];

  for (let i = 0; i < arr.length; i += size) {
    // console.log(newArr);
    // console.log(arr.slice(i, i + size));
    newArr.push(arr.slice(i, i + size));
    // console.log(newArr);
    // console.log(arr);
  };

  return newArr;
};

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
*/
// ----------------------------------------
/*
// v1
// function sumAll(arr) {
//   let resultArr = [];
//   let funcArr = arr.sort((a, b,) => a - b);
//   let i = funcArr[0];

//   for (i; i <= funcArr[funcArr.length - 1]; i++) {
//     resultArr.push(i);
//   }

//   return resultArr.reduce((sum, item) => sum + item, 0);
// };

// v2
function sumAll(arr) {
  let funcArr = arr.sort((a, b,) => a - b);
  let result = 0;

  for (let i = funcArr[0]; i <= funcArr[funcArr.length - 1]; i++) {
    result += i;
  }

  return result;
};

console.log(sumAll([1, 4]));
*/
// ----------------------------------------
/*
function diffArray(arr1, arr2) {
  let checkArr = x => y => x.filter(item => !y.includes(item));
  return [].concat(checkArr(arr1)(arr2), checkArr(arr2)(arr1));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
*/
// ----------------------------------------
/*
function destroyer(arr1, ...arr2) {
  // console.log(arr1);
  // console.log(arr2);
  return arr1.filter(item => !arr2.includes(item));
};

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
*/
// ----------------------------------------
// Regular Expressions

// let ourStr = "Regular expressions";
// let ourRegex = /expressions/;
// console.log(ourStr.match(ourRegex));
// console.log(ourStr);

// let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/g;
// testStr.match(ourRegex);
// console.log(testStr.match(ourRegex));
// console.log(testStr);

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/ig; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line
// console.log(result);

// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/; // Change this line
// let $result = unRegex.test(exampleStr);

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig; // Change this line
// let _result = quoteSample.match(vowelRegex); // Change this line
// console.log(_result);

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line

// let jennyStr = "Jenny8675309";
// let myRegex = /[a-z0-9]/ig;
// jennyStr.match(myRegex);

// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result);

// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou0-9]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; // Change this line
// let result = difficultSpelling.match(myRegex);

// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;

// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;

// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; // Change this line
// let result = movieName.match(numRegex).length;

// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g; // Change this line
// let result = movieName.match(noNumRegex).length;

// let username = "Z97";
// let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
// let result = userCheck.test(username);
// console.log(result);

// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g; // Change this line
// let result = sample.match(countWhiteSpace);

// let ohStr = "Ohhh no";
// let ohRegex = /Oh{3,6}\sno/; // Change this line
// let result = ohRegex.test(ohStr);

// let haStr = "Hazzzzah";
// let haRegex = /Haz{4,}ah/; // Change this line
// let result = haRegex.test(haStr);

// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/; // Change this line
// let result = timRegex.test(timStr);

// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);

// let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// checkPass.test(password);

// let sampleWord = "astronaut";
// let pwRegex = /(?=\w{6,})(?=\D*\d{2})/; // Change this line
// let result = pwRegex.test(sampleWord);

// let myString = "Eleanor Roosevelt";
// let myRegex = /(Franklin|Eleanor|Franklin D.)\sRoosevelt/; // Change this line
// let result = myRegex.test(myString); // Change this line
// // After passing the challenge experiment with myString and see how the grouping works

// let repeatNum = "42 42 42";
// let reRegex = /^(\d+) \1 \1$/; // Change this line
// let result = reRegex.test(repeatNum);

// let str = "one two three";
// let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
// let replaceText = "$3 $2 $1"; // Change this line
// let result = str.replace(fixRegex, replaceText);

// let hello = "   Hello, World!  ";
// let wsRegex = /^\s+|\s+$/g; // Change this line
// let result = hello.replace(wsRegex, ""); // Change this line
// console.log(result);

// ----------------------------------------
/*
// v1
// function whatIsInAName(collection, source) {
//   let result = [];

//   collection.filter(obj => {
//     for (let key in obj) {
//       console.log(key);
//       console.log(obj[key]);

//       for (let item in source) {
//         console.log(item);
//         console.log(source[item]);
//         if (key === item) {
//           obj[key] === source[item] && result.push(obj);
//         };
//       };
//     };
//   });

//   return result;
// };

// v2
// function whatIsInAName(collection, source) {
//   let result = [];

//   collection.filter(obj => {
//     for (let key in source) {
//       console.log(key);
//       console.log(source[key]);

//       console.log(obj.hasOwnProperty(key));
//       console.log(source[key] === obj[key]);
//       if (obj.hasOwnProperty(key) && (source[key] === obj[key])) {
//         result.push(obj);
//         console.log("+");
//       };
//     };
//   });

//   return result;
// };

// v3
function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);

  return collection.filter(obj => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (!obj.hasOwnProperty(sourceKeys[i]) ||
          obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
};

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }), ": [{ first: \"Tybalt\", last: \"Capulet\" }]");
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }), ": [{ \"apple\": 1, \"bat\": 2 }, { \"apple\": 1, \"bat\": 2, \"cookie\": 2 }]");
*/
// ----------------------------------------
/*
function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\s+|_+/g, "-").toLowerCase();
};

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase('thisIsSpinalTap'));
*/
// ----------------------------------------
/*
function translatePigLatin(str) {
  return !/[aeiou]/.test(str)
    ? str + "ay" : /^[aeiou]/.test(str)
      ? str + "way" : str.replace(/(^[^aeiou]+)(\w+)/, "$2") + str.match(/^[^aeiou]+/) + "ay";
};

console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("glove"));
*/
// ----------------------------------------
/*
function myReplace(str, before, after) {
  return /^[A-Z]/.test(before) === /^[A-Z]/.test(after) || /^[a-z]/.test(before) === /^[a-z]/.test(after)
    ? str.replace(before, after) : /^[A-Z]/.test(before)
      ? str.replace(before, after[0].toUpperCase() + after.slice(1, after.length)) : str.replace(before, after.toLowerCase());
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("I think we should look Up there", "Up", "down"));
*/
// ----------------------------------------
/*
function pairElement(str) {
  let pairsArr = [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"],];
  let resultArr = [];

  str.split("").forEach(key => {
    pairsArr.forEach(pair => {
      if (pair[0] === key) {
        resultArr.push(pair);
      };
    });    
  });

  return resultArr; 
};

console.log(pairElement("GCG"));
console.log(pairElement("TTGAG"));
*/
// ----------------------------------------
/*
function uniteUnique(...arr) {
  let resultArr = [];

  arr.forEach(item => item.forEach(numb => {
    if (!resultArr.includes(numb)) resultArr.push(numb)
  }));

  return resultArr;
};

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
*/
// ----------------------------------------
/*
function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  return str.split("").map(entity => htmlEntities[entity] || entity).join("");
};

console.log(convertHTML("Dolce & Gabbana"));
*/
// ----------------------------------------
/*
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current =>  previous + current), 0);
console.log(`Sum of array values is: ${arraySum}`);
*/
// ----------------------------------------
/*
function palindrome(str) {
  let arr = str.toLowerCase().match(/[a-z0-9]/g);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  };
  
  return true;
};

console.log(palindrome("eye"), "--- true");
console.log(palindrome("not a palindrome"), "--- false");
console.log(palindrome("My age is 0, 0 si ega ym."), "--- true");
console.log(palindrome("0_0 (: /-\ :) 0-0"), "--- true");
console.log(palindrome("five|\_/|four"), "--- false");
*/
// ----------------------------------------
/*
function convertToRoman(num) {
  // false input number
  if (num >= 10000 || num <= 0) {
    return "Sorry, unable to calculate.";
  };

  // roman numbers
  let createArabicNumerals = (numb, index) => {
    if (numb === 0) {
      return "";
    };

    if (index === 0) {
      let result = ""; 

      for (let i = 1; i <= numb; i++) {
        result += "M";
      };

      return result;
    };

    if (index === 1) {
      switch (numb) {
        case 1:
          return "C";
          break;
        case 2:
          return "CC";
          break;
        case 3:
          return "CCC";
          break;
        case 4:
          return "CD";
          break;
        case 5:
          return "D";
          break;
        case 6:
          return "DC";
          break;
        case 7:
          return "DCC";
          break;
        case 8:
          return "DCCC";
          break;
        case 9:
          return "CM";
          break;
      };
    };

    if (index === 2) {
      switch (numb) {
        case 1:
          return "X";
          break;
        case 2:
          return "XX";
          break;
        case 3:
          return "XXX";
          break;
        case 4:
          return "XL";
          break;
        case 5:
          return "L";
          break;
        case 6:
          return "LX";
          break;
        case 7:
          return "lXX";
          break;
        case 8:
          return "LXXX";
          break;
        case 9:
          return "XC";
          break;
      };
    };

    if (index === 3) {
      switch (numb) {
        case 1:
          return "I";
          break;
        case 2:
          return "II";
          break;
        case 3:
          return "III";
          break;
        case 4:
          return "IV";
          break;
        case 5:
          return "V";
          break;
        case 6:
          return "VI";
          break;
        case 7:
          return "VII";
          break;
        case 8:
          return "VIII";
          break;
        case 9:
          return "IX";
          break;    
      };
    };
  };

  // check numbers
  let thousands = Math.floor(num / 1000);
  let hundreds = Math.floor((num % 1000) / 100);
  let dozens = Math.floor((num % 1000 % 100) / 10);
  let units = Math.floor((num % 1000 % 100 % 10));
  let arabicNumArr = [thousands, hundreds, dozens, units];

  // result roman numbers
  let romanNumArr = [];
  arabicNumArr.forEach((item, index) => romanNumArr.push(createArabicNumerals(item, index)));

  return romanNumArr.join("");
};

console.log(convertToRoman(4), "--- IV");
console.log(convertToRoman(36), "--- XXXVI");
console.log(convertToRoman(68), "--- LXVIII");
console.log(convertToRoman(99), "--- XCIX");
console.log(convertToRoman(891), "--- DCCCXCI");
console.log(convertToRoman(3999), "--- MMMCMXCIX");
*/
// ----------------------------------------
/*
function rot13(str) {
  // check letter
  let transformLetter = (letter) => { 
    let basicStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return basicStr[basicStr.indexOf(letter) <= 12 ? basicStr.indexOf(letter) + 13 : basicStr.indexOf(letter) - 13];
  };

  return str.split("").map(item => /[A-Z]/.test(item) ? transformLetter(item) : item).join("");
};

console.log(rot13("SERR PBQR PNZC"), "--- FREE CODE CAMP");
console.log(rot13("SERR YBIR?"), "--- FREE LOVE?");
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."), "--- THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
*/
// ----------------------------------------

// function telephoneCheck(str) {
//   return /^\+?[1]?[- ]?\d{3}[ -]*?\d{3}[ -]?\d{4}$|\d{3}-\d{3}-\d{4}$|^\+?[1]?[ (]?\d{3}[) ]*?\d{3}[ -]?\d{4}$/.test(str);
// };

// function telephoneCheck(str) {
//   return /^[\d]{1}\ \([\d]{3}\)\ [\d]{3}-[\d]{4}$/.test(str);
// };

// function telephoneCheck(str) {
//   if (str.length < 10 || str.length > 16) {
//     return false;
//   };
//   if (/[*&!?#.a-zA-Z:;/\\]/.test(str)) {
//     return false;
//   };

//   if (str.length >= 10 && str.length <= 12) {
//     return /^\d{3}[ -]\d{3}[ -]\d{4}$|^[(]\d{3}[)]\d{3}[ -]\d{4}$|^\d{10}$/.test(str)
//   };

//   if (str.length >= 13 && str.length <= 14) {
//     if (/^[1]\ \d{3}\)+/.test(str)) {
//       return false;
//     };

//     if (/^[1][ (]+?\d{3}[ )-]+\d{3}[ -]\d{4}$/.test(str)) {
//       return true;
//     };
//   };

//   if (str.length >= 13 && str.length <= 16) {
//     if (str.length === 16 && /^[1]\ \(\d{3}\)\ \d{3}\-\d{4}$/.test(str)) {
//       return true;
//     };

//     if (/^[(]\d{3}[)]\d{3}[- ]\d{4}$/.test(str)) {
//       return true;
//     };

//     if (/^[^1]*/.test(str)) {
//       return false;
//     };
//   };
// };

// console.log(telephoneCheck("555-555-5555"));
// console.log(telephoneCheck("(555)555-5555"));
// console.log(telephoneCheck("(555) 555-5555"));
// console.log(telephoneCheck("555 555 5555"));
// console.log(telephoneCheck("5555555555"));
// console.log(telephoneCheck("(555-555-5555"));
// console.log(telephoneCheck("11 555-555-5555"));
// ----------------------------------------
/*
function checkCashRegister(price, cash, cid) {
  // money values
  const MONEY = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];

  // sum money
  let sumBank = 0;
  for (let i = 0; i < cid.length; i++) { sumBank += cid[i][1]; };

  // check "CLOSED"
  if (sumBank === (cash - price)) {
    return {status: "CLOSED", change: cid};
  };

  // check rest
  const sumRest = cash - price;
  const restArr = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

  // sort rest
  let x = 0;

  for (let i = cid.length - 1; i >= 0; i--) {
    if (sumRest % MONEY[i][1] === 0) {
      if ( sumRest === cid[i][1] || sumRest < cid[i][1]) {
        console.log("+");
        restArr[i][1] = sumRest;
        break;
      } else if (numberOfBills > cid[i][1]) {
        console.log("*")
      };      
    };
  };

  return restArr;
};

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(3.26, 203.26, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 300]]));
*/
