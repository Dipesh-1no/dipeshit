// reddit-kya-hai.js — Scroll Reveal, Particles, Reading Progress, Back to Top
(function(){
  'use strict';

  // Scroll Reveal
  function initScrollReveal(){
    var els=document.querySelectorAll('.scroll-reveal');
    if(!els.length)return;
    if('IntersectionObserver' in window){
      var obs=new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if(e.isIntersecting){e.target.classList.add('revealed');obs.unobserve(e.target);}
        });
      },{threshold:0.1,rootMargin:'0px 0px -30px 0px'});
      els.forEach(function(el){obs.observe(el);});
    }else{els.forEach(function(el){el.classList.add('revealed');});}
  }

  // Smooth scroll for TOC
  function initSmoothScroll(){
    document.querySelectorAll('.toc a[href^="#"]').forEach(function(link){
      link.addEventListener('click',function(e){
        e.preventDefault();
        var t=document.getElementById(this.getAttribute('href').slice(1));
        if(t){window.scrollTo({top:t.getBoundingClientRect().top+window.pageYOffset-80,behavior:'smooth'});}
      });
    });
  }

  // Navbar shadow on scroll
  function initNavScroll(){
    var nav=document.querySelector('.site-nav');
    if(!nav)return;
    window.addEventListener('scroll',function(){
      nav.style.boxShadow=window.pageYOffset>60?'0 4px 30px rgba(0,0,0,.3)':'none';
    },{passive:true});
  }

  // Reading progress bar
  function initReadingProgress(){
    var bar=document.querySelector('.reading-progress');
    if(!bar)return;
    window.addEventListener('scroll',function(){
      var h=document.documentElement.scrollHeight-window.innerHeight;
      bar.style.width=h>0?(window.pageYOffset/h*100)+'%':'0%';
    },{passive:true});
  }

  // Back to top
  function initBackToTop(){
    var btn=document.querySelector('.back-to-top');
    if(!btn)return;
    window.addEventListener('scroll',function(){
      btn.classList.toggle('visible',window.pageYOffset>500);
    },{passive:true});
    btn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
  }

  // Floating particles
  function initParticles(){
    var container=document.querySelector('.particles-bg');
    if(!container)return;
    for(var i=0;i<30;i++){
      var span=document.createElement('span');
      span.style.left=Math.random()*100+'%';
      span.style.animationDuration=(8+Math.random()*12)+'s';
      span.style.animationDelay=Math.random()*8+'s';
      span.style.width=span.style.height=(1+Math.random()*2)+'px';
      container.appendChild(span);
    }
  }

  // Stat counter animation
  function initCounterAnimation(){
    var nums=document.querySelectorAll('.stat-num');
    if(!nums.length)return;
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){animateCounter(e.target);obs.unobserve(e.target);}
      });
    },{threshold:0.5});
    nums.forEach(function(el){obs.observe(el);});
  }

  function animateCounter(el){
    var text=el.textContent.trim();
    var match=text.match(/(\d+)/);
    if(!match)return;
    var target=parseInt(match[1],10);
    var suffix=text.replace(match[0],'');
    var duration=1200,startTime=null;
    function step(ts){
      if(!startTime)startTime=ts;
      var p=Math.min((ts-startTime)/duration,1);
      var eased=1-Math.pow(1-p,3);
      el.textContent=Math.round(eased*target)+suffix;
      if(p<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  document.addEventListener('DOMContentLoaded',function(){
    initScrollReveal();
    initSmoothScroll();
    initNavScroll();
    initReadingProgress();
    initBackToTop();
    initParticles();
    initCounterAnimation();
  });
})();
