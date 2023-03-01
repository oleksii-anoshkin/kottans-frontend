"use strict";

//--------------------------------------------
const WRAP = document.querySelector(".wrap");
const SIDEBAR = document.querySelector(".sidebar");
const ARROW = document.querySelector(".sidebar__arrow");

// arrow btn
ARROW.addEventListener("click",
  function (event) {
    // hidden
    SIDEBAR.classList.toggle("hidden");
    WRAP.classList.toggle("hidden");
  }
);

ARROW.addEventListener("keydown",
  function (event) {
    // hidden
    if (event.code === "Space" || event.code === "Enter") {
      SIDEBAR.classList.toggle("hidden");
      WRAP.classList.toggle("hidden");
    }
  }
);