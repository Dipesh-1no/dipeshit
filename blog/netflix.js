 // Scroll reveal using IntersectionObserver (fast & efficient)
    (function(){
      const els = document.querySelectorAll('[data-hidden]');
      if(!('IntersectionObserver' in window)){
        els.forEach(e=>e.classList.add('revealed'));
        return;
      }
      const io = new IntersectionObserver((entries,observer)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.classList.add('revealed');
            entry.target.removeAttribute('data-hidden');
            observer.unobserve(entry.target);
          }
        })
      },{threshold:0.12});
      els.forEach(e=>io.observe(e));
    })();

    // Optional: defer heavy images until after initial paint (very small improvement)
    // Images already set with loading="lazy". If you want progressive LQIP, replace src with tiny base64 then swap on load.

    // Accessibility: allow users to reveal all content via keyboard (press 'r')
    window.addEventListener('keydown', (e)=>{
      if(e.key.toLowerCase()==='r'){
        document.querySelectorAll('[data-hidden]').forEach(el=>{el.classList.add('revealed');el.removeAttribute('data-hidden')});
      }
    });