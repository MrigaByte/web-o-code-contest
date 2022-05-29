const menuBtn = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.navbar-right');

menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    menuBtn.classList.toggle('active');
})