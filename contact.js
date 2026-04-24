// ===== EmailJS Configuration =====
const EMAILJS_PUBLIC_KEY = "bdHhtiipJummQtZh2";
const EMAILJS_SERVICE_ID = "service_1x61mff";
const EMAILJS_TEMPLATE_ID = "template_ucty24b";

// Initialize EmailJS
(function() {
  emailjs.init(EMAILJS_PUBLIC_KEY);
})();

// ===== Hamburger Menu =====
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const navbar = document.getElementById("navbar");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }

  // Scroll hide/show navbar
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

// ===== Form Submission with EmailJS =====
const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const spinner = document.getElementById("spinner");
const statusMsg = document.getElementById("statusMsg");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  // Show loading state
  submitBtn.disabled = true;
  spinner.style.display = "inline-block";
  submitBtn.querySelector(".btn-text").style.display = "none";

  // Collect form data
  const templateParams = {
    from_name: document.getElementById("user_name").value,
    from_email: document.getElementById("user_email").value,
    user_phone: document.getElementById("user_phone").value || "Not provided",
    service: document.getElementById("service_type").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Send email via EmailJS
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
      showStatus("✅ Message sent successfully! We'll get back to you soon.", "success");
      contactForm.reset();
    })
    .catch(function(error) {
      console.error("FAILED...", error);
      showStatus("❌ Failed to send message. Please try again or email us directly.", "error");
    })
    .finally(function() {
      submitBtn.disabled = false;
      spinner.style.display = "none";
      submitBtn.querySelector(".btn-text").style.display = "inline-flex";
    });
});

// ===== Status Message Display =====
function showStatus(message, type) {
  statusMsg.textContent = message;
  statusMsg.className = type; // 'success' or 'error'
  
  // Auto-hide after 6 seconds
  setTimeout(() => {
    statusMsg.style.opacity = "0";
    setTimeout(() => {
      statusMsg.className = "";
      statusMsg.style.opacity = "1";
    }, 500);
  }, 6000);
}

// ===== FAQ Accordion =====
function toggleFaq(element) {
  const faqItem = element.parentElement;
  const isActive = faqItem.classList.contains("active");

  // Close all FAQ items
  document.querySelectorAll(".faq-item").forEach(item => {
    item.classList.remove("active");
  });

  // Toggle clicked item
  if (!isActive) {
    faqItem.classList.add("active");
  }
}
