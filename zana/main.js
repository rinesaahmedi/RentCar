let menu = document.querySelectorAll('#menu-icon');
let navbar = document.querySelectorAll('.navbar');

menu.onclick = () => {
    menu.classList.toggle('menu');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('menu');
    navbar.classList.remove('active');
 }
 