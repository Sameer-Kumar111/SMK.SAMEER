// script.js

const menuToggle = document.querySelector('.menu-toggle');
const navbarUl = document.querySelector('.neon-navbar ul');

menuToggle.addEventListener('click', () => {
  navbarUl.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

// Hero Button Click Event
document.querySelector('.neon-button').addEventListener('click', function() {
  window.location.href = 'https://gladiatorsbattle.com';
});
