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
(function(window) {

  var obj = {};
  obj.dreamOn = function () {
  console.log("I want to see the global scope! Let me out!");
  };

  window.doer = obj;

})(window);

doer.dreamOn();

// ----------------------------------------