    //   Scroll Animation Script
     const sections = document.querySelectorAll(".section");

      const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach((sec) => {
          const boxTop = sec.getBoundingClientRect().top;

          if (boxTop < triggerBottom) {
            sec.classList.add("visible");
          }
        });
      };

      window.addEventListener("scroll", revealOnScroll);
      revealOnScroll();