"use strict";

//-----------------------------------------

let dataValue = document.querySelector("div").getAttribute("data-say-hi");
console.log(dataValue);

let x = document.querySelector("li:last-of-type");
console.log(x);

let y = document.querySelectorAll(".like");
let z = document.getElementsByClassName("like");
console.log(z);
console.log(y);

const list = document.querySelectorAll('ul');
console.log(list);
// list.insertAdjacentHTML('beforeend', '<li>Текст</li>');

//-----------------------------------------