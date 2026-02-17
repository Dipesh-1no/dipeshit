const boxes = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.25});

boxes.forEach(box=>observer.observe(box));
