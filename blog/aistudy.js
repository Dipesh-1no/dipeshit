
  const translations = {
    en: {
      "AI se Padhaai Kaise Asaan Hoti Hai?": "How AI Makes Studying Easier?",
      "Best Study Tools for Students (2025 Guide)": "Best Study Tools for Students (2025 Guide)",
      "AI Ka Shiksha Mein Badhata Yogdaan": "AI’s Growing Role in Education",
      "Top AI Study Tools Jo 2025 Mein Har Student Ko Use Karne Chahiye": "Top AI Study Tools Every Student Should Use in 2025",
      "Kaise AI Aapki Daily Study Routine Mein Madad Karta Hai?": "How AI Helps in Your Daily Study Routine?",
      "AI Tools Ka Sahi Tarike Se Upyog Kaise Karein?": "How to Use AI Tools the Right Way?",
      "Yeh Tools Aapko Competitive Exams Mein Kaise Madad Karte Hain?": "How These Tools Help in Competitive Exams?",
      "Conclusion": "Conclusion",
      "AI (Artificial Intelligence) ne pichhle kuch saalon mein shiksha ke shetra ko badal kar rakh diya hai...":
        "In recent years, AI has revolutionized education. Previously students relied only on books and notes, now they have personalized AI tutors, doubt-solving bots, and smart revision tools.",
      "AI tools aapke daily routine mein kaafi impactful ho sakte hain:": "AI tools can significantly impact your daily routine:",
      "AI ko study shortcut ke roop mein mat dekhein...":
        "Don't treat AI as a shortcut, but as a tool to better understand and improve your learning.",
      "AI-based mock tests, analytics, aur smart suggestions se...":
        "AI-based mock tests, analytics, and smart suggestions help identify your weak areas so you can study more effectively.",
      "AI aaj ke samay mein har student ka digital dost ban chuka hai...":
        "AI has become a digital friend for every student, but using it wisely is key. These tools make learning easier, not effortless."
    }
  };

  function setLanguage(lang) {
    if (lang === 'en') {
      document.querySelector('h1').innerText = translations.en["AI se Padhaai Kaise Asaan Hoti Hai?"];
      document.querySelector('header p').innerText = translations.en["Best Study Tools for Students (2025 Guide)"];
      const headings = document.querySelectorAll('h2, h3');
      headings.forEach(el => {
        el.innerText = translations.en[el.innerText] || el.innerText;
      });

      const paras = document.querySelectorAll('section p, .cta p');
      paras.forEach(p => {
        p.innerText = translations.en[p.innerText.trim()] || p.innerText;
      });
    }else {
      location.reload();
    }
  }

