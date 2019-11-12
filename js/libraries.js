$(document).ready(function() {
  $('[data-scroll]').on('click', function(event) {
    event.preventDefault();
    const sectionId = $(this).data('scroll');
    const sectionOffset = $(sectionId).offset().top;

    $('html, body').animate({scrollTop: sectionOffset}, 1000);
  });
});