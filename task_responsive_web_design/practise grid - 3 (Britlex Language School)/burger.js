"use strict";

$(document).ready(function () {
  $('.burger').click(function (event) {
    $('.burger, .nav__items, .burger__line').toggleClass('active');
    $('body').toggleClass('lock');
  });
});