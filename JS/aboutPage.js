const menuButton = document.querySelector('.menu-btn');
const navMobile = document.querySelector('.nav-mobile');
const btnCloseNav = document.querySelector('.button-close');
const linkHome = document.querySelector('.link-home');
const linkProgram = document.querySelector('.link-program');
const linkJoin = document.querySelector('.link-join');
const linkSponsor = document.querySelector('.link-sponsor');

menuButton.addEventListener('click', () => {
    menuButton.classList.add('hidden');
    navMobile.classList.remove('hidden');
});

btnCloseNav.addEventListener('click', () => {
    menuButton.classList.remove('hidden');
    navMobile.classList.add('hidden');
});

linkHome.addEventListener('click', () => {
    navMobile.classList.add('hidden');
    menuButton.classList.remove('hidden');
});

linkProgram.addEventListener('click', () => {
    navMobile.classList.add('hidden');
    menuButton.classList.remove('hidden');
});

linkJoin.addEventListener('click', () => {
    navMobile.classList.add('hidden');
    menuButton.classList.remove('hidden');
});

linkSponsor.addEventListener('click', () => {
    navMobile.classList.add('hidden');
    menuButton.classList.remove('hidden');
});
