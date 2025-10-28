    // Modal logic
    const openSpecs = document.getElementById('openSpecs');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    openSpecs.addEventListener('click', ()=> modal.style.display = 'flex');
    closeModal.addEventListener('click', ()=> modal.style.display = 'none');
    modal.addEventListener('click', (e)=>{ if(e.target === modal) modal.style.display='none' });

    // Scroll to article
    document.getElementById('jumpToArticle').addEventListener('click', ()=>{
      document.getElementById('article').scrollIntoView({behavior:'smooth'});
    });

    // Copy link (demo)
    document.getElementById('copyBtn').addEventListener('click', async ()=>{
      try{
        await navigator.clipboard.writeText(location.href);
        alert('Link copied to clipboard');
      }catch(e){alert('Clipboard not available')}
    });

    // Tweet (opens compose)
    document.getElementById('tweetBtn').addEventListener('click', ()=>{
      const text = encodeURIComponent('iPhone 17 Pro full review — check out key specs and verdict.');
      window.open('https://twitter.com/intent/tweet?text='+text,'_blank');
    });

    // Compare link placeholder
    document.getElementById('compareLink').addEventListener('click',(e)=>{
      e.preventDefault();
      alert('Comparison article coming soon — want me to generate it now?');
    });


    // language translate 
      const btnEn = document.getElementById('btn-en');
    const btnHi = document.getElementById('btn-hi');
    const english = document.getElementById('english');
    const hinglish = document.getElementById('hinglish');

    // Switch function
    function setLanguage(lang) {
      if (lang === 'en') {
        english.style.display = 'block';
        hinglish.style.display = 'none';
        btnEn.classList.add('active');
        btnHi.classList.remove('active');
      } else {
        english.style.display = 'none';
        hinglish.style.display = 'block';
        btnHi.classList.add('active');
        btnEn.classList.remove('active');
      }
      localStorage.setItem('preferredLang', lang);
    }

    // Load saved language
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    setLanguage(savedLang);

    btnEn.addEventListener('click', () => setLanguage('en'));
    btnHi.addEventListener('click', () => setLanguage('hi'));