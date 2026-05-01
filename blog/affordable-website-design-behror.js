// affordable-website-design-behror.js — Scroll Reveal + Performance
(function() {
  'use strict';

  // Scroll Reveal using IntersectionObserver (performant, no library)
  function initScrollReveal() {
    var elements = document.querySelectorAll('.scroll-reveal');
    if (!elements.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      elements.forEach(function(el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show everything immediately
      elements.forEach(function(el) {
        el.classList.add('revealed');
      });
    }
  }

  // Smooth scroll for TOC links
  function initSmoothScroll() {
    var tocLinks = document.querySelectorAll('.toc a[href^="#"]');
    tocLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').slice(1);
        var target = document.getElementById(targetId);
        if (target) {
          var offset = 80; // nav height
          var pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      });
    });
  }

  // Navbar scroll effect
  function initNavScroll() {
    var nav = document.querySelector('.site-nav');
    if (!nav) return;
    
    var lastScroll = 0;
    window.addEventListener('scroll', function() {
      var scroll = window.pageYOffset;
      if (scroll > 100) {
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
      } else {
        nav.style.boxShadow = 'none';
      }
      lastScroll = scroll;
    }, { passive: true });
  }

  // Stat counter animation
  function initCounterAnimation() {
    var statNums = document.querySelectorAll('.stat-num');
    if (!statNums.length) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNums.forEach(function(el) { observer.observe(el); });
  }

  function animateCounter(el) {
    var text = el.textContent.trim();
    var match = text.match(/(\d+)/);
    if (!match) return;

    var target = parseInt(match[1], 10);
    var suffix = text.replace(match[0], '');
    var duration = 1200;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      var current = Math.round(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  // Initialize everything on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    initScrollReveal();
    initSmoothScroll();
    initNavScroll();
    initCounterAnimation();
  });
})();
