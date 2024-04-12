console.log('nav-toggle.js');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('before:hidden');
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('nav-closed');
    navMenu.classList.toggle('nav-open');
});