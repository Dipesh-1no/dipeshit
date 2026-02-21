const boxes = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.25});

boxes.forEach(box=>observer.observe(box));
// ===== One Time Mobile Popup =====

document.addEventListener("DOMContentLoaded", function(){

  const popup = document.getElementById("devicePopup");
  const closeBtn = document.getElementById("closePopup");

  // Check if already shown
  if(!localStorage.getItem("popupShown")){

    // Show only on mobile
    if(window.innerWidth < 768){
      popup.classList.add("active");
    }

    localStorage.setItem("popupShown", "true");
  }

  closeBtn.addEventListener("click", function(){
    popup.classList.remove("active");
  });

});