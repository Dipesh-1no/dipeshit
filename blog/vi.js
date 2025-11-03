// Add scroll reveal class
    document.querySelectorAll('.blog-content p, .blog-content h3, .blog-content li')
      .forEach(el => el.classList.add('reveal'));

    // Scroll animation
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        // Back to top button
    document.getElementById('scrollTopBtn').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });