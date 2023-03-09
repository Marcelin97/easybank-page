// Mobile Menu ==> BTN Hamburger
const btnHambuger = document.querySelector("#btnHamburger");

const header = document.querySelector('.header')

const overlay = document.querySelector('.overlay');

const fadeElems = document.querySelectorAll('.has-fade')

const body = document.querySelector('body');

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    body.classList.remove('noscroll');
    header.classList.remove("open");
    fadeElems.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
      });
  } else {
    // lock scroll when open the menu
    body.classList.add('noscroll');

    // Open hamburger menu
    header.classList.add("open");
    fadeElems.forEach(function(element){
        element.classList.add('fade-in')
        element.classList.remove('fade-out')
    })
  }
});
