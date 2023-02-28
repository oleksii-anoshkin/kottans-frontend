"use strict";

//--------------------------------------------
const arrow = document.querySelector(".header__arrow");
const textHidden = document.querySelectorAll(".text");

arrow.addEventListener("click",
  function (event) {
    //

    // hidden text
    for (let text of textHidden) {
      text.classList.toggle("hidden");
    };
  }
);