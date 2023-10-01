window.addEventListener('scroll', () => {
     document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

// show/hide nav menu

const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
     menu.style.display = "flex"
     menuBtn.style.display = 'none'
     closeBtn.style.display = 'inline-block'
})
closeBtn.addEventListener('click', () => {
     menu.style.display = "none"
     menuBtn.style.display = 'inline-block'
     closeBtn.style.display = 'none'
})

