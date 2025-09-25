// Scroll-behavior: show sections on scroll down, hide on scroll up.
    (function(){
      const sections = Array.from(document.querySelectorAll('.section'));
      let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
      let ticking = false;

      function inViewport(el){
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight - 80 && rect.bottom > 120; // visible area
      }

      function onScroll(){
        const current = window.pageYOffset || document.documentElement.scrollTop;
        const directionDown = current > lastScroll;
        sections.forEach(sec => {
          if(inViewport(sec)){
            if(directionDown) sec.classList.add('visible');
            else sec.classList.remove('visible');
          } else {
            // if element is far above viewport and user scrolled up, hide it
            if(sec.getBoundingClientRect().top > window.innerHeight) sec.classList.remove('visible');
          }
        });
        lastScroll = current <= 0 ? 0 : current; // For Mobile or negative scrolling
      }

      window.addEventListener('scroll', ()=>{
        if(!ticking){
          window.requestAnimationFrame(()=>{ onScroll(); ticking = false; });
          ticking = true;
        }
      }, {passive:true});

      // initial run
      onScroll();

      // touchmove fallback for some mobiles
      let touchStartY = 0;
      window.addEventListener('touchstart',(e)=>{ touchStartY = e.touches[0].clientY; }, {passive:true});
      window.addEventListener('touchmove',(e)=>{
        const touchY = e.touches[0].clientY;
        const directionDown = touchStartY > touchY; // if finger moved up, content moving down
        sections.forEach(sec => {
          if(inViewport(sec)){
            if(directionDown) sec.classList.add('visible'); else sec.classList.remove('visible');
          }
        });
        touchStartY = touchY;
      }, {passive:true});

      // Accessibility: keyboard users should be able to reveal sections with arrow keys
      window.addEventListener('keydown', (e)=>{
        if(e.key === 'ArrowDown'){
          sections.forEach(sec=>{ if(inViewport(sec)) sec.classList.add('visible'); });
        }
        if(e.key === 'ArrowUp'){
          sections.forEach(sec=>{ if(inViewport(sec)) sec.classList.remove('visible'); });
        }
      });

    })();