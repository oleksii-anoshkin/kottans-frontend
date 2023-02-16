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
console.log("35" + - "22");
console.log("35" * "22");
// console.log("558" > 22++);

let userName = 0;
let newUser = userName++;
console.log(newUser);
console.log(userName);

console.log(!false && 11 || 18 && !"");
console.log(11 && 18);

let name = 0;
console.log(name ?? "Hello");