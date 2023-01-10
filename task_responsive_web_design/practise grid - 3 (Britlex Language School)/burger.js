"use strict";

$(document).ready(function () {
  $('.burger').click(function (event) {
    $('.burger, .nav').addClass('active');
    $('body').addClass('lock');
  });

  $('.close__btn').click(function (event) {
    $('.burger, .nav').removeClass('active');
    $('body').removeClass('lock');
  });

  $('.nav__link').click(function (event) {
    $('.burger, .nav').removeClass('active');
    $('body').removeClass('lock');
  });
});