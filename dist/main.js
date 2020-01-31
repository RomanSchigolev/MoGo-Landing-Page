"use strict";

(function () {
  // Accordion
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
  }); // Pop-Up Map

  var openModalButtons = document.querySelectorAll('[data-open-modal]');
  var closeModalButtons = document.querySelectorAll('[data-close-modal]');
  var overlay = document.querySelector('.modal__overlay');
  openModalButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      var modal = document.querySelector(button.dataset.openModal);
      openModal(modal);
    });
  });
  closeModalButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      var modal = button.closest('.modal');
      closeModal(modal);
    });
  });
  overlay.addEventListener('click', function (event) {
    var modals = document.querySelectorAll('.modal.active');
    modals.forEach(function (modal) {
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal === null) {
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
    if (modal === null) {
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
    burgerButton.addEventListener('click', function (event) {
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

  window.addEventListener('scroll', fixedHeader);
})();