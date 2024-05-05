document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

   
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');  
        const ariaExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !ariaExpanded); 
    });
});