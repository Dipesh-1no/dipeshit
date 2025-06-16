// -----------------------------
// 1. Toggle Mobile Navigation
// -----------------------------
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}

document.getElementById("hamburger").addEventListener("click", toggleMenu);

// Close menu when link is clicked (mobile)
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('show');
  });
});

// -----------------------------
// 2. Scroll-triggered Card Animation
// -----------------------------
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  observer.observe(card);
});

// -----------------------------
// 3. Hide/Show Navbar on Scroll
// -----------------------------
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll down
    navbar.classList.add("hidden");
  } else {
    // Scroll up
    navbar.classList.remove("hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
