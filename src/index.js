const hamburgerBtn = document.querySelector('.btn--hamburger');
const hamburgerTop = document.querySelector('.hamburger--top');
const hamburgerBottom = document.querySelector('.hamburger--bottom');


const navBtns = [...document.querySelectorAll('.btn--nav')];
const featuresBtn = document.querySelector('.btn--features');
const companyBtn = document.querySelector('.btn--company');

const navMenu = document.querySelector('.nav__menu');
const navShadow = document.querySelector('.nav__shadow');

const navShow = () => {

  setTimeout(() => {
    navMenu.classList.remove('slide-in');
    navShadow.classList.remove('fade-in');

    hamburgerBtn.removeAttribute('disabled');
  }, 500);

  hamburgerBtn.setAttribute('disabled', 'true');

  hamburgerTop.classList.add('flip-top');
  hamburgerBottom.classList.add('flip-bottom');

  navMenu.classList.add('slide-in');
  navShadow.classList.add('fade-in');
  
  navMenu.classList.remove('hidden');
  navShadow.classList.remove('hidden');
}

const navHide = () => {

  setTimeout(() => {
    navMenu.classList.add('hidden');
    navMenu.classList.remove('slide-out');

    navShadow.classList.add('hidden');
    navShadow.classList.remove('fade-out');

    hamburgerBtn.removeAttribute('disabled');
  }, 500);

  hamburgerBtn.setAttribute('disabled', 'true');

  hamburgerTop.classList.remove('flip-top');
  hamburgerBottom.classList.remove('flip-bottom');

  navMenu.classList.add('slide-out');
  navShadow.classList.add('fade-out');
}

hamburgerBtn.addEventListener('click', e => {
  navMenu.classList.contains('hidden') ?
  navShow() :
  navHide();
});

