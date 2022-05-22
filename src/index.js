// Hamburger button variables
const hamburgerBtn = document.querySelector('.btn--hamburger');
const hamburgerTop = document.querySelector('.hamburger--top');
const hamburgerBottom = document.querySelector('.hamburger--bottom');

// Nav variables

// Immutably spreads the NodeList to an array.
const navBtns = [...document.querySelectorAll('.btn--nav')];
// Immutably spreads the NodeList to an array.
const navLists = [...document.querySelectorAll('.nav__list--secondary')];
// Immutably spreads the NodeList to an array.
const navArrows = [...document.querySelectorAll('.arrow')];
const navMenu = document.querySelector('.nav__menu');
const navShadow = document.querySelector('.nav__shadow');

/* Disables the hamburger button to prevent button spamming and rotates the hamburger 
icon into an "X". Adds the hidden and animation classes to navMenu and navShadow. Uses 
an asynchronous function to re-enable the hamburger btn and removes animation
classes from navMenu and navShadow upon animation completion. The setTimeout time limit 
and animation time are both 500ms. */
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

/* Disables the hamburger button to prevent button spamming and reverts the hamburger
icon back to it's original shape. Adds the hidden and animation classes to navMenu and 
navShadow. Uses an asynchronous function to re-enable the hamburger btn and removes animation
classes from navMenu and navShadow upon animation completion. The setTimeout time limit 
and animation time are both 500ms. */
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

// Removes hidden class from nav__list--secondary and rotates its arrow.
const listShow = (list, arrow) => {
  list.classList.remove('hidden');
  arrow.classList.add('rotate');
}

// Adds hidden class to nav__list--secondary and rotates its arrow.
const listHide = (list, arrow) => {
  list.classList.add('hidden');
  arrow.classList.remove('rotate');
}

/**************************************
  EVENT LISTENERS
**************************************/

/* Uses the ternary operator to determine whether to show or hide the nav overlay,
based on the existence of class hidden in navMenu. */
hamburgerBtn.addEventListener('click', e => {
  navMenu.classList.contains('hidden') ?
  navShow() :
  navHide();
});

/* Uses the ternary operator to determine whether to show or hide the corresponding
nav__list--secondary, based on the existence of class hidden in the current list. 
Uses the index of the button that is being clicked to run a function on the proper
list. */
navBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    const currentList = navLists[navBtns.indexOf(e.currentTarget)];
    const currentArrow = navArrows[navBtns.indexOf(e.currentTarget)];
    
    currentList.classList.contains('hidden') ?
    listShow(currentList, currentArrow) :
    listHide(currentList, currentArrow);
  })
});
