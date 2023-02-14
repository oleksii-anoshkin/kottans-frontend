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
function firstDog(name) {
  this.name = name;
}

firstDog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new firstDog("Max", "Buddy");
console.log(max);
max.bark();

// ----------------------------------------

function secondDog(firstName, secondName) {
  this.firstName = firstName;
  this.secondName = secondName;
}

secondDog.prototype.bark = function () {
  console.log(this.firstName + " likes barking! Bark!");
  console.log(this.secondName + " likes barking! Bark!");
}

var max = new secondDog("Max", "Buddy");
console.log(max);
max.bark();

// ----------------------------------------