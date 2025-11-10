 // Simple scroll-reveal using IntersectionObserver (no external libs)
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach((el, idx) => {
      el.style.transitionDelay = el.style["--d"] || (0.04 * idx) + "s";
      io.observe(el);
    });

    // Smooth scroll for anchor buttons
    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
      anchor.addEventListener('click', (e)=>{
        const id = anchor.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if(target){
          e.preventDefault();
          target.scrollIntoView({ behavior:'smooth', block:'start' });
        }
      });
    });
