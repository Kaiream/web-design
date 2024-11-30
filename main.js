// Toggle hamburger menu
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('open');
});

// Toggle search field visibility on mobile
const searchToggle = document.querySelector('.search-toggle');
const search = document.querySelector('.search');

searchToggle.addEventListener('click', () => {
    search.classList.toggle('active');
});

const searchMobile = document.querySelector('.search-mobile');

searchToggle.addEventListener('click', () => {
    searchMobile.classList.toggle('active');
});