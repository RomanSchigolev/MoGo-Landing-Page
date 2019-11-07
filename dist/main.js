"use strict";

(function () {
  //Accordion
  var accordion = document.querySelector('.service__accordion');
  var accordionItems = accordion.querySelectorAll('.accordion__item');
  var accordionButtons = accordion.querySelectorAll('.accordion__header');

  function toggleAccordion() {
    var thisItem = this.parentNode;
    accordionItems.forEach(function (item) {
      if (thisItem === item) {
        thisItem.classList.toggle('open');
        return;
      }

      item.classList.remove('open');
    });
  }

  accordionButtons.forEach(function (accordion__header) {
    return accordion__header.addEventListener('click', toggleAccordion);
  }); //Pop-Up Map

  var openModalButtons = document.querySelectorAll('[data-open-modal]');
  var closeModalButtons = document.querySelectorAll('[data-close-modal]');
  var overlay = document.querySelector('.modal__overlay');
  openModalButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var modal = document.querySelector(button.dataset.openModal);
      openModal(modal);
    });
  });
  closeModalButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var modal = button.closest('.modal');
      closeModal(modal);
    });
  });
  overlay.addEventListener('click', function () {
    var modals = document.querySelectorAll('.modal.active');
    modals.forEach(function (modal) {
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) {
      return;
    }

    modal.classList.add('active');
    overlay.classList.add('active');

    document.onkeydown = function (event) {
      var modals = document.querySelectorAll('.modal.active');
      modals.forEach(function (modal) {
        if (event.key === "Escape") {
          closeModal(modal);
          event.preventDefault();
        }
      });
    };
  }

  function closeModal(modal) {
    if (modal == null) {
      return;
    }

    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.onkeydown = null;
  } // Mobile Menu


  var burgerButton = document.querySelector('.burger');
  var menu = document.querySelector('.menu__list');
  var menuLinks = menu.querySelectorAll('.menu__link');

  function mobileMenu() {
    burgerButton.addEventListener('click', function () {
      menu.classList.toggle('menu__list--active');
      burgerButton.classList.toggle('burger--active');
    });
  }

  mobileMenu();
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      burgerButton.classList.remove('burger--active');
      menu.classList.remove('menu__list--active');
    });
  }); // Fixed Header (max-width: 992px)

  var intro = document.querySelector('.intro');
  var header = document.querySelector('.header');

  function fixedHeader() {
    if (window.scrollY >= intro.offsetHeight) {
      header.classList.add('header--fixed');
      document.querySelector('.logo__link').style.fontSize = '3.3vmax';
    } else {
      header.classList.remove('header--fixed');
      document.querySelector('.logo__link').style.fontSize = '2.3vmax';
    }
  }

  window.addEventListener('scroll', fixedHeader); //Slider

  /*
  const sliderList = document.querySelector('.testimonials__items');
  const sliderItems = sliderList.querySelectorAll('.testimonials__item');
  const sliderItemWidth = sliderItems[0].getBoundingClientRect().width; // Find out the width of the element
    const buttonPrev = document.querySelector('.testimonials__btn--prev');
  const buttonNext = document.querySelector('.testimonials__btn--next');
    let counter = 1; // counter of elements
  sliderList.style.transform = `translateX(${(-sliderItemWidth) * counter}px)`; // Initially let's move to the next element
    const animationSlider = (slider, itemWidth, itemIndex) => {
    slider.style.transition = 'transform 0.5s ease-in';
    slider.style.transform = `translateX(${(-itemWidth) * itemIndex}px)`;
  };
    buttonPrev.addEventListener('click', (event) => {
    if (counter <= 0) { // In order to repeated and quick clicking on the "back" button the slider work correctly, otherwise you will see a "void"
      return;
    }
    counter--;
    animationSlider(sliderList, sliderItemWidth, counter);
  });
    buttonNext.addEventListener('click', (event) => {
    if (counter >= sliderItems.length - 1) {  // In order to repeated and quick clicking on the "forward" button the slider work correctly, otherwise you will see a "void"
      return;
    }
    counter++;
    animationSlider(sliderList, sliderItemWidth, counter);
  });
    buttonPrev.addEventListener('touchstart', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (counter <= 0) {  // In order to repeated and quick clicking on the "back" button the slider work correctly, otherwise you will see a "void"
      return;
    }
    counter--;
    animationSlider(sliderList, sliderItemWidth, counter);
  }, false);
    // For mobile device
  buttonNext.addEventListener('touchstart', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (counter >= sliderItems.length - 1) {  // In order to repeated and quick clicking on the "forward" button the slider work correctly, otherwise you will see a "void"
      return;
    }
    counter++;
    animationSlider(sliderList, sliderItemWidth, counter);
  }, false);
    // After animation
  sliderList.addEventListener('transitionend', (event) => {
    if (sliderItems[counter].id === 'lastClone') {
      sliderList.style.transition = 'none';
      counter = sliderItems.length - 2;
      sliderList.style.transform = `translateX(${(-sliderItemWidth) * counter}px)`;
    }
    if (sliderItems[counter].id === 'firstClone') {
      sliderList.style.transition = 'none';
      counter = sliderItems.length - counter;
      sliderList.style.transform = `translateX(${(-sliderItemWidth) * counter}px)`;
    }
  });
  */
})();