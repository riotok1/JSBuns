var navBurger = document.querySelector('.navBurger');
var burgerWrapper = document.querySelector('.burgerWrapper');
var nav = document.querySelector('.nav');

burgerWrapper.addEventListener('click', function(){
    navBurger.classList.toggle('navBurger-active');
    nav.classList.toggle('nav-active');
});