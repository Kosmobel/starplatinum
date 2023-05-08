const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav');

menu.style.display = 'none';

menuBtn.addEventListener('click', function() {
  if (menu.style.display === 'none') {
    menu.style.display = 'grid';
    menu.style.position = 'fixed';
  } else {
    menu.style.display = 'none';
  }
});