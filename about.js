// ===== Navbar hide/show on scroll =====
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling Down
    navbar.classList.add('navbar-hidden');
  } else {
    // Scrolling Up
    navbar.classList.remove('navbar-hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ===== Hamburger menu toggle =====
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});
