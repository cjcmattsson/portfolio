import loading from './loading.js';
import project from './project.js';

const scroll = document.querySelector('.scroll');
const name = document.querySelector('h1');
const textLanding = document.querySelector('.text-content-landing');
const contact = document.querySelector('.button');
const contactMenu = document.querySelector('.contact-menu');
const menuShow = document.querySelector('.menuFromBurger');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  menuShow.classList.toggle('menuShowOnClick');
})


const homeMenu = document.querySelector('.home-menu');
const workMenu = document.querySelector('.work-menu');
const aboutMenu = document.querySelector('.about-menu');

const home = document.querySelector('#home');
const work = document.querySelector('#work');
const about = document.querySelector('#about');

// console.log(window.scrollY);

scroll.addEventListener('click', () => {
  work.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
})

homeMenu.addEventListener('click', () => {
  menuShow.classList.toggle('menuShowOnClick');
  hamburger.classList.remove('is-active');
  home.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
});

workMenu.addEventListener('click', () => {
  menuShow.classList.toggle('menuShowOnClick');
  hamburger.classList.remove('is-active');
  work.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
})
aboutMenu.addEventListener('click', () => {
  menuShow.classList.toggle('menuShowOnClick');
  hamburger.classList.remove('is-active');
  about.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
})

const navbar = document.querySelector("nav");
const sticky = navbar.offsetTop;

window.addEventListener('scroll', function() {

  const top = work.getBoundingClientRect().top;
  // console.log(top);

  if (top <= 430 && !textLanding.classList.contains('hide-landing')) {
    textLanding.classList.add('hide-landing');
  }
   if (top > 250 && textLanding.classList.contains('hide-landing')) {
    textLanding.classList.remove('hide-landing');
  }

  if (top <= 430 && !scroll.classList.contains('hide-landing')) {
    scroll.classList.add('hide-landing');
  }
   if (top > 250 && scroll.classList.contains('hide-landing')) {
    scroll.classList.remove('hide-landing');
  }

    // console.log(window.scrollY);

  });
