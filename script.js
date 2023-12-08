const closeNavMenuBtn = document.querySelector('.close-mobile-menu-btn');
const overlay = document.querySelector('.overlay');
const hamburgerBtn = document.querySelector('.hamburger-menu');
const body = document.querySelector('.body');
const navWrap = document.querySelector('.nav-menu-wrap');
const mobileContactLink = document.querySelector('.mobile-contact-link');
const catalogueLink = document.querySelector('.catalouge-link');
const mobileCatelogueLink = document.querySelector('.mobile-catalogue-link');

navWrap.addEventListener('click', (e) => e.stopPropagation());

closeNavMenuBtn.addEventListener('click', () => {
  overlay.style.left = '200%';
  body.style.overflowY = 'visible';
  catalogueLink.setAttribute('tabIndex', '0');
});

overlay.addEventListener('click', () => {
  overlay.style.left = '200%';
  body.style.overflowY = 'visible';
  catalogueLink.setAttribute('tabIndex', '0');
});

mobileContactLink.addEventListener('click', () => {
  overlay.style.left = '200%';
  body.style.overflowY = 'visible';
  catalogueLink.setAttribute('tabIndex', '0');
});

hamburgerBtn.addEventListener('click', () => {
  overlay.style.left = '0';
  body.style.overflowY = 'hidden';
  catalogueLink.setAttribute('tabIndex', '-1');
  mobileCatelogueLink.focus();
});
