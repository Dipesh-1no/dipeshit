document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const darkToggle = document.getElementById("darkToggle");

  // Hamburger toggle
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // ✅ TYPING ANIMATION FIXED
const typingEl = document.getElementById("typing");
const fullText = typingEl.textContent.trim(); // Get text from HTML
const parts = [
  { end: 6 },  // Dipesh
  { end: 8 },  // IT
  { end: 16 }  // solution
];

const colorPalette = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c"];
let loopCount = 0;
let index = 0;
let isDeleting = false;
let currentColors = {};
let colorMap = [];

function getColorSet(loop) {
  const a = colorPalette[loop % colorPalette.length];
  const b = colorPalette[(loop + 1) % colorPalette.length];
  const c = colorPalette[(loop + 2) % colorPalette.length];
  return { dipesh: a, it: b, solution: c };
}

function updateTyping() {
  typingEl.innerHTML = "";

  for (let i = 0; i < index; i++) {
    const span = document.createElement("span");
    span.classList.add("char");

    if (isDeleting && colorMap[i]) {
      span.style.color = colorMap[i];
    } else {
      let color;
      if (i < parts[0].end) {
        color = index > parts[2].end ? currentColors.solution :
                index > parts[1].end ? currentColors.it : currentColors.dipesh;
      } else if (i < parts[1].end) {
        color = index > parts[2].end ? currentColors.solution : currentColors.it;
      } else {
        color = currentColors.solution;
      }
      colorMap[i] = color;
      span.style.color = color;
    }

    span.textContent = fullText[i];
    typingEl.appendChild(span);
  }

  const cursor = document.createElement("span");
  cursor.classList.add("cursor");
  cursor.textContent = "।";
  typingEl.appendChild(cursor);
}

function animate() {
  if (!isDeleting && index === 0) {
    currentColors = getColorSet(loopCount);
    colorMap = [];
  }

  updateTyping();

  if (!isDeleting) {
    if (index <= fullText.length) {
      index++;
    } else {
      isDeleting = true;
      setTimeout(animate, 1000);
      return;
    }
  } else {
    if (index > 0) {
      index--;
    } else {
      isDeleting = false;
      loopCount++;
    }
  }

  setTimeout(animate, isDeleting ? 80 : 140);
}

animate();

  // Scroll behavior
  let lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});
