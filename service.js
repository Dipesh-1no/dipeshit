  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // remove class when out of view
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => {
    observer.observe(card);
    
  });
  // -----------------------------
// 1. Toggle Mobile Navigation
// -----------------------------
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

// -----------------------------
// 2. Scroll-triggered Card Animation
// -----------------------------
const card = document.querySelectorAll('.card');

// Create observer
const observers = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Show card
    } else {
      entry.target.classList.remove('visible'); // Hide card on scroll out
    }
  });
}, {
  threshold: 0.2 // Trigger when 20% of card is visible
});

// Observe each card
cards.forEach(card => {
  observer.observe(card);
});

