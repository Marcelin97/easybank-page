// Mobile Menu ==> BTN Hamburger
const btnHambuger = document.querySelector("#btnHamburger");

const header = document.querySelector('.header')

const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    overlay.classList.add('fade-out')
    overlay.classList.remove('fade-in')
  } else {
    // Open hamburger menu
    header.classList.add("open");
    overlay.classList.add('fade-in')
    overlay.classList.remove('fade-out')
  }
});
