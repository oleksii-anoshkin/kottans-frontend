"use strict";

$(document).ready(function () {
  $('.burger__box').click(function (event) {
    $('.burger__box, .nav__links, .burger').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.link__item-header').click(function (event) {
    // if ($('.block').hasClass('one')){
    //   $('.link__item-header').not($(this)).removeClass('active');
    //   $('link__item-text').not($(this).next()).slideUp(300);
    // }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});