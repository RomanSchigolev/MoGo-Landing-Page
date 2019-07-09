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



// const carouselSlide = document.querySelector('.testimonials__list');
// const carouselItems = document.querySelectorAll('.testimonials__item');
//
// //Buttons
// const prevBtn = document.querySelector('.testimonials__btn--prev');
// const nextBtn = document.querySelector('.testimonials__btn--next');
//
// //Counter
// let counter = 1;
// const size = carouselItems[0].clientWidth;
//
// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//
// //Button Listener
// nextBtn.addEventListener('click', () => {
//     carouselSlide.style.transition="transform 0.3s ease";
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });


// let carouselItem = document.querySelectorAll('.testimonials__list .testimonials__item');
// let current = 0;
//
// function slider(){
//     for (let i = 0; i < carouselItem.length; i++){
//         carouselItem[i].classList.add('opacityZero');
//     }
//     carouselItem[current].classList.remove('opacityZero');
//     if(current+1 == carouselItem.length){
//         current = 0;
//     }
//     else {
//         current++;
//     }
// }
//
// // document.querySelector('.testimonials__list').onclick = slider;
// document.querySelector('.testimonials__btn--prev').onclick = () =>{
//     if (current - 1 == -1){
//         current = carouselItem.length - 1;
//     }
//     else {
//         current--;
//     }
//     slider();
// };
// document.querySelector('.testimonials__btn--next').onclick = () =>{
//     if (current + 1 == carouselItem.length){
//         current = 0;
//     }
//     else {
//         current++;
//     }
//     slider();
// };