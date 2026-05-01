// ============================================
// SERVICE PAGE — ENHANCED JAVASCRIPT
// ============================================

// -----------------------------
// 1. Toggle Mobile Navigation
// -----------------------------
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}

document.getElementById("hamburger").addEventListener("click", toggleMenu);

// Close menu when link is clicked (mobile)
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('show');
  });
});

// -----------------------------
// 2. Scroll-triggered Card Animation
// -----------------------------
const cards = document.querySelectorAll('.card');
const whyItems = document.querySelectorAll('.why-item');

const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger animation for each card
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
    }
  });
}, observerOptions);

cards.forEach(card => animateOnScroll.observe(card));
whyItems.forEach(item => animateOnScroll.observe(item));

// -----------------------------
// 3. Hide/Show Navbar on Scroll
// -----------------------------
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// -----------------------------
// 4. Service Detail Modal
// -----------------------------
const serviceData = {
  fullstack: {
    title: "Full-Stack Website Design",
    image: "image/fullstack-service.png",
    desc: "We build custom, responsive, and high-performance websites from scratch. Whether you need a business landing page, e-commerce platform, or a full web application — we handle the complete front-end and back-end development with modern technologies.",
    features: [
      "Custom UI/UX Design tailored to your brand",
      "Front-end with React, Next.js, or vanilla JS",
      "Back-end with Node.js, Express, or Python",
      "Database integration (MongoDB, MySQL)",
      "Mobile-responsive & SEO-optimized",
      "Free 3-month maintenance & support"
    ]
  },
  video: {
    title: "Video Editing",
    image: "image/video-editing-service.png",
    desc: "Professional video editing services for all your content needs. From YouTube videos and Instagram reels to corporate promos and wedding highlights — we deliver cinematic quality that captivates your audience.",
    features: [
      "YouTube long-form video editing",
      "Instagram Reels & YouTube Shorts",
      "Corporate & brand promotional videos",
      "Color grading & visual effects",
      "Subtitles, transitions & motion graphics",
      "Fast turnaround with unlimited revisions"
    ]
  },
  graphic: {
    title: "Graphic Designing",
    image: "image/graphic-design-service.png",
    desc: "Creative design solutions that make your brand stand out. We craft visually stunning logos, banners, social media creatives, and complete brand identity kits that communicate your message powerfully.",
    features: [
      "Professional logo & brand identity design",
      "Social media post templates & stories",
      "Business card & letterhead design",
      "Banner & poster design for events",
      "Packaging & merchandise design",
      "Unlimited revisions until you're satisfied"
    ]
  },
  seo: {
    title: "SEO Optimization",
    image: "image/seo-service.png",
    desc: "Get your website to the top of Google search results. Our proven SEO strategies increase your organic traffic, improve keyword rankings, and help your business get discovered by the right audience.",
    features: [
      "Comprehensive website SEO audit",
      "On-page SEO (meta tags, headings, content)",
      "Keyword research & competitor analysis",
      "Technical SEO (speed, mobile, schema)",
      "Quality backlink building",
      "Monthly performance reports & analytics"
    ]
  },
  social: {
    title: "Social Media Management",
    image: "image/social-media-service.png",
    desc: "Let us handle your social media while you focus on your business. We create engaging content, grow your follower base, run targeted ad campaigns, and build a strong online community for your brand.",
    features: [
      "Instagram & Facebook page management",
      "Content calendar & post scheduling",
      "Creative post design & copywriting",
      "Targeted ad campaign management",
      "Community engagement & audience growth",
      "Monthly analytics & growth reports"
    ]
  }
};

const modal = document.getElementById('serviceModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalFeatures = document.getElementById('modalFeatures');

// Open modal on card click
document.querySelectorAll('.card[data-service]').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.service;
    const data = serviceData[key];
    if (!data) return;

    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;

    // Build features list
    modalFeatures.innerHTML = '';
    data.features.forEach(feature => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="fas fa-check-circle"></i> ${feature}`;
      modalFeatures.appendChild(li);
    });

    // Update WhatsApp pre-filled message
    const whatsappBtn = document.getElementById('modal-cta-whatsapp');
    if (whatsappBtn) {
      const message = encodeURIComponent(`Hello DipeshITsolution! I am interested in your "${data.title}" service. Can we discuss this?`);
      whatsappBtn.href = `https://wa.me/918306073071?text=${message}`;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// Close modal
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// -----------------------------
// 5. Smooth scroll for anchor links
// -----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// -----------------------------
// 6. Animate stat numbers on scroll
// -----------------------------
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

function animateStats() {
  if (statsAnimated) return;

  statNumbers.forEach(stat => {
    const text = stat.textContent;

    // Extract numeric part
    const match = text.match(/(\d+)/);
    if (!match) return;

    const target = parseInt(match[1]);
    const suffix = text.replace(match[1], '').trim();
    let current = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(counter);
      }
      stat.textContent = Math.floor(current) + suffix;
    }, 16);
  });

  statsAnimated = true;
}

const statsBar = document.querySelector('.stats-bar');
if (statsBar) {
  const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateStats();
    }
  }, { threshold: 0.5 });

  statsObserver.observe(statsBar);
}
