"use strict";

$(document).ready(function () {
  $('.link__item-header').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300)
  })
});