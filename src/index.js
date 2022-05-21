const hamburgerBtn = document.querySelector('.btn--hamburger');
const hamburgerTop = document.querySelector('.hamburger--top');
const hamburgerBottom = document.querySelector('.hamburger--bottom');

const navBtns = [...document.querySelectorAll('.btn--nav')];
const navLists = [...document.querySelectorAll('.nav__list--secondary')];
const navArrows = [...document.querySelectorAll('.arrow')];

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

const listShow = (list, arrow) => {
  list.classList.remove('hidden');
  arrow.classList.add('rotate');
}

const listHide = (list, arrow) => {
  list.classList.add('hidden');
  arrow.classList.remove('rotate');
}

/**************************************
  EVENT LISTENERS
**************************************/

hamburgerBtn.addEventListener('click', e => {
  navMenu.classList.contains('hidden') ?
  navShow() :
  navHide();
});

navBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    const currentList = navLists[navBtns.indexOf(e.currentTarget)];
    const currentArrow = navArrows[navBtns.indexOf(e.currentTarget)];
    
    currentList.classList.contains('hidden') ?
    listShow(currentList, currentArrow) :
    listHide(currentList, currentArrow);
  })
});
