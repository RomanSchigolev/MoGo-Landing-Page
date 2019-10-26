$(document).ready(function() {
  $('[data-scroll]').on('click', function(event) {
    event.preventDefault();
    const sectionId = $(this).data('scroll');
    const sectionOffset = $(sectionId).offset().top;

    $('html, body').animate({scrollTop: sectionOffset}, 1000);
  });
  // $('burger').on("click", function(event) {
  //   event.preventDefault();
  //   $(this).toggleClass('burger--active');
  //   $('.menu__list').toggleClass('.menu__list--active').show();
  // });

  // $('[data-scroll]').on('click', function(event){
  //   event.preventDefault();
  //   $('burger').removeClass('burger--active');
  //   $('.menu__list').hide();
  //   $('burger').removeClass('active');
// });
});