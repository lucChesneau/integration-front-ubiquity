const burgerMenu = document.querySelector('#burger-menu');
const navMenu  = document.querySelector('#header-nav');

burgerMenu.addEventListener("click", function() {
    navMenu.classList.toggle("header-nav-visible");
})
