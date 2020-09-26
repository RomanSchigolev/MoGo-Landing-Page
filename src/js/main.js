(() => {
  // Smooth scroll to link
  const linkList = document.querySelectorAll(".menu__link[href*='#']");
  for (const linkItem of linkList) {
    linkItem.addEventListener("click", function (event) {
      event.preventDefault();
      const linkHref = this.getAttribute("href");
      document.querySelector(linkHref).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }


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
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.openModal);
      openModal(modal);
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });

  overlay.addEventListener('click', () => {
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

  const mobileMenu = () => {
    menu.classList.toggle('menu__list--active');
    burgerButton.classList.toggle('burger--active');
    if (menu.classList.contains("menu__list--active")) {
      document.querySelector("html").style.overflowY = "hidden";
    } else {
      document.querySelector("html").style.overflowY = "auto";
    }
  };
  burgerButton.addEventListener('click', mobileMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      burgerButton.classList.remove('burger--active');
      menu.classList.remove('menu__list--active');
      document.querySelector("html").style.overflowY = "auto";
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

