/*
      Reveal + image lazy loader
      - Use a single IntersectionObserver to:
        1) add .visible to reveal elements
        2) swap data-src -> src for images inside revealed cards
      - We also add a 'loaded' class on image load to remove blur (nice UX)
    */

    (function(){
      // all elements that should reveal
      const revealEls = Array.from(document.querySelectorAll('.reveal'));

      // find images that we lazy-load (they have data-src)
      const lazyImages = Array.from(document.querySelectorAll('img[data-src]'));

      // Common observer options
      const opts = { root: null, rootMargin: '0px 0px 120px 0px', threshold: 0.12 };

      // When element is visible, reveal it and start loading images inside it.
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            const el = entry.target;
            // reveal the element
            el.classList.add('visible');

            // find images inside this element and set src
            const imgs = el.querySelectorAll('img[data-src]');
            imgs.forEach(img => {
              if(!img.dataset.src) return;
              // set actual src to start loading; keep loading="lazy" as fallback
              img.src = img.dataset.src;
              // once src assigned, remove data-src to avoid double-handling
              img.removeAttribute('data-src');

              // when image finishes loading, add .loaded to remove blur
              img.addEventListener('load', () => {
                img.classList.add('loaded');
              }, { once:true });

              // if image errors, gracefully remove blur so UI doesn't stay fuzzy
              img.addEventListener('error', () => {
                img.classList.add('loaded');
              }, { once:true });
            });

            // if we've revealed, unobserve to avoid future callbacks
            obs.unobserve(el);
          }
        });
      }, opts);

      // observe each reveal element
      revealEls.forEach(el => observer.observe(el));

      // Additionally: an observer specifically for images that are outside reveal wrappers
      // (if you later add hero images not inside .reveal)
      const imgObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            const img = entry.target;
            if(img.dataset && img.dataset.src){
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              img.addEventListener('load', () => img.classList.add('loaded'), { once:true });
              img.addEventListener('error', () => img.classList.add('loaded'), { once:true });
            }
            obs.unobserve(img);
          }
        });
      }, { rootMargin: '0px 0px 200px 0px', threshold: 0.05 });

      lazyImages.forEach(img => {
        // If image already has src (unlikely) skip
        if(!img.dataset.src) return;
        imgObserver.observe(img);
      });

      // Accessibility: keyboard focus reveal for users tabbing to cards
      document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('focusin', () => card.classList.add('visible'));
      });

      // small enhancement: Smooth scroll for internal anchors (if any)
      if('scrollBehavior' in document.documentElement.style){
        // nothing to do — browser supports it by default.
      }

    })();
