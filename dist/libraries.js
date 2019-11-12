"use strict";

$(document).ready(function () {
  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();
    var sectionId = $(this).data('scroll');
    var sectionOffset = $(sectionId).offset().top;
    $('html, body').animate({
      scrollTop: sectionOffset
    }, 1000);
  });
});