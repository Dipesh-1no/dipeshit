    function scrollToId(id){
      document.getElementById(id).scrollIntoView({behavior:"smooth"});
      document.getElementById("navLinks").classList.remove("show");
    }

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if(e.isIntersecting){
          e.target.classList.add("show");
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));