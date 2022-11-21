"use strict";

$(document).ready(function () {
  $('.burger').click(function (event) {
    $('.burger, .burger__line, .nav, .nav__items, .tel__link').toggleClass('active');
    $('body').toggleClass('lock');
  });
});