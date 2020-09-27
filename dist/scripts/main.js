"use strict";function _createForOfIteratorHelper(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){a=!0,c=e},f:function(){try{l||null==r.return||r.return()}finally{if(a)throw c}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}!function(){var e,t=_createForOfIteratorHelper(document.querySelectorAll(".menu__link[href*='#']"));try{for(t.s();!(e=t.n()).done;){e.value.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))}}catch(e){t.e(e)}finally{t.f()}var r=document.querySelector(".service__accordion"),o=r.querySelectorAll(".accordion__item");function n(){var e=this.parentNode;o.forEach((function(t){e!==t?t.classList.remove("open"):e.classList.toggle("open")}))}r.querySelectorAll(".accordion__header").forEach((function(e){return e.addEventListener("click",n)}));var c=document.querySelectorAll("[data-open-modal]"),l=document.querySelectorAll("[data-close-modal]"),a=document.querySelector(".modal__overlay");function i(e){null!==e&&(e.classList.remove("active"),a.classList.remove("active"),document.querySelector("html").style.overflowY="auto",document.onkeydown=null)}c.forEach((function(e){e.addEventListener("click",(function(){!function(e){if(null===e)return;e.classList.add("active"),a.classList.add("active"),document.querySelector("html").style.overflowY="hidden",document.onkeydown=function(e){document.querySelectorAll(".modal.active").forEach((function(t){"Escape"===e.key&&(i(t),e.preventDefault())}))}}(document.querySelector(e.dataset.openModal))}))})),l.forEach((function(e){e.addEventListener("click",(function(){i(e.closest(".modal"))}))})),a.addEventListener("click",(function(){document.querySelectorAll(".modal.active").forEach((function(e){i(e)}))}));var u=document.querySelector(".burger"),s=document.querySelector(".menu__list"),d=s.querySelectorAll(".menu__link");u.addEventListener("click",(function(){s.classList.toggle("menu__list--active"),u.classList.toggle("burger--active"),s.classList.contains("menu__list--active")?document.querySelector("html").style.overflowY="hidden":document.querySelector("html").style.overflowY="auto"})),d.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),u.classList.remove("burger--active"),s.classList.remove("menu__list--active"),document.querySelector("html").style.overflowY="auto"}))}));var f=document.querySelector(".intro"),m=document.querySelector(".header");window.addEventListener("scroll",(function(){window.scrollY>=f.offsetHeight?(m.classList.add("header--fixed"),document.querySelector(".logo__link").style.fontSize="3.3vmax"):(m.classList.remove("header--fixed"),document.querySelector(".logo__link").style.fontSize="2.3vmax")}))}();