(() => {
  // Accordion
  const accordion = document.querySelector('.service__accordion');
  const accordionItems = accordion.querySelectorAll('.accordion__item');
  const accordionButtons = accordion.querySelectorAll('.accordion__header');

  function toggleAccordion() {
    const thisItem = this.parentNode;

    accordionItems.forEach(item => {
      if (thisItem === item) {
        thisItem.classList.toggle('open');
        return;
      }
      item.classList.remove('open');
    });
  }

  accordionButtons.forEach(accordion__header => accordion__header.addEventListener('click', toggleAccordion));

  // Pop-Up Map
  const openModalButtons = document.querySelectorAll('[data-open-modal]');
  const closeModalButtons = document.querySelectorAll('[data-close-modal]');
  const overlay = document.querySelector('.modal__overlay');

  openModalButtons.forEach(button => {
    button.addEventListener('click', event => {
      const modal = document.querySelector(button.dataset.openModal);
      openModal(modal);
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', event => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });

  overlay.addEventListener('click', event => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal === null) {
      return;
    }
    modal.classList.add('active');
    overlay.classList.add('active');
    document.querySelector("html").style.overflowY = "hidden";
    document.onkeydown = event => {
      const modals = document.querySelectorAll('.modal.active');
      modals.forEach(modal => {
        if (event.key === "Escape") {
          closeModal(modal);
          event.preventDefault();
        }
      });
    }
  }

  function closeModal(modal) {
    if (modal === null) {
      return;
    }
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.querySelector("html").style.overflowY = "auto";
    document.onkeydown = null;
  }

  // Mobile Menu
  const burgerButton = document.querySelector('.burger');
  const menu = document.querySelector('.menu__list');
  const menuLinks = menu.querySelectorAll('.menu__link');

  function mobileMenu() {
    burgerButton.addEventListener('click', (event) => {
      menu.classList.toggle('menu__list--active');
      burgerButton.classList.toggle('burger--active');
    });
  }

  mobileMenu();

  menuLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      burgerButton.classList.remove('burger--active');
      menu.classList.remove('menu__list--active');
    });
  });


  // Fixed Header (max-width: 992px)
  const intro = document.querySelector('.intro');
  const header = document.querySelector('.header');

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

