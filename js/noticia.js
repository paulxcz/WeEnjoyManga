const  btnHamburgerMenu = document.querySelector('.hamburger-menu-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');

btnHamburgerMenu.addEventListener('click', () => {
    
    hamburgerMenu.classList.toggle('showed');
})
