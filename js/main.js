const  btnHamburgerMenu = document.querySelector('.hamburger-menu-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');

//swiper configs
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
/////////////////////////////////

btnHamburgerMenu.addEventListener('click', () => {
    
    hamburgerMenu.classList.toggle('showed');
})
