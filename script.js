const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navs');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});