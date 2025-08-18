 const englishBtn = document.getElementById('englishBtn');
    const hinglishBtn = document.getElementById('hinglishBtn');
    const englishContent = document.getElementById('englishContent');
    const hinglishContent = document.getElementById('hinglishContent');
    const blogContent = document.getElementById('blogContent');

    englishBtn.addEventListener('click', () => {
      englishContent.classList.remove('hidden');
      hinglishContent.classList.add('hidden');
      englishBtn.classList.add('active');
      hinglishBtn.classList.remove('active');
    });

    hinglishBtn.addEventListener('click', () => {
      englishContent.classList.add('hidden');
      hinglishContent.classList.remove('hidden');
      hinglishBtn.classList.add('active');
      englishBtn.classList.remove('active');
    });

    let lastScroll = window.scrollY;
    const contents = document.querySelectorAll('.content-box');

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      contents.forEach(content => {
        if (currentScroll > lastScroll) {
          content.classList.add('show');
        } else {
          content.classList.remove('show');
        }
      });
      lastScroll = currentScroll;
    });
