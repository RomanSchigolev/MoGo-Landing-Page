//Accordion
const accordion = document.querySelector('.service__accordion');
const items = accordion.querySelectorAll('.accordion__item');
const buttons = accordion.querySelectorAll('.accordion__header');

function toggleAccordion() {
    const thisItem = this.parentNode;

    items.forEach(item =>{
        if (thisItem == item){
            thisItem.classList.toggle('open');
            return;
        }
        item.classList.remove('open');
    });
}
buttons.forEach(accordion__header => accordion__header.addEventListener('click', toggleAccordion));

//PopUp Map
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
    if (modal == null){
        return;
    }
    modal.classList.add('active');
    overlay.classList.add('active');
    document.onkeydown = (event) => {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            if (event.key === "Escape"){
                closeModal(modal);
            }
        });
    }
}

function closeModal(modal) {
    if (modal == null){
        return;
    }
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.onkeydown = null;
}


// WORK IT
// const menuSlide = () => {
//     const burger = document.querySelector('.menu__burger');
//     const menu = document.querySelector('.menu__list');
//     const menuItem = document.querySelectorAll('.menu__item');
//
//     burger.addEventListener('click', () =>{
//         menu.classList.toggle('menu__active');
//
//         menuItem.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = '';
//             } else {
//                 link.style.animation = `menuItemFade 0.5s ease forwards ${index / 3 + 0.3}s`;
//             }
//         });
//     });
// }
//
// menuSlide();