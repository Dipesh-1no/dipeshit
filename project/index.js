/* =====================================================
   POPUP CLOSE
===================================================== */
function closePopup() {
  const popup = document.getElementById("hodPopup");
  if (popup) {
    popup.style.display = "none";
  }
}

/* =====================================================
   SCROLL REVEAL ANIMATION (SINGLE CLEAN VERSION)
===================================================== */
const revealElements = document.querySelectorAll(".reveal");

function handleScrollReveal() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleScrollReveal);
window.addEventListener("load", handleScrollReveal);

/* =====================================================
   MOBILE HAMBURGER MENU TOGGLE
===================================================== */
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

/* =====================================================
   MOBILE DROPDOWN CLICK CONTROL
   (No space taken by dropdown)
===================================================== */
document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent document click close

    const parent = toggle.parentElement;

    // Close other dropdowns
    document.querySelectorAll(".has-dropdown").forEach(item => {
      if (item !== parent) {
        item.classList.remove("active");
      }
    });

    // Toggle current dropdown
    parent.classList.toggle("active");
  });
});

/* =====================================================
   CLOSE DROPDOWN WHEN CLICKING OUTSIDE
===================================================== */
document.addEventListener("click", (e) => {
  if (!e.target.closest(".has-dropdown")) {
    document.querySelectorAll(".has-dropdown").forEach(item => {
      item.classList.remove("active");
    });
  }
});

/* =====================================================
   CLOSE MOBILE MENU ON LINK CLICK (OPTIONAL BUT GOOD UX)
===================================================== */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active");
  });
});
