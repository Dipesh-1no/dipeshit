document.addEventListener('DOMContentLoaded', () => {
    const englishBtn = document.getElementById('englishBtn');
    const hinglishBtn = document.getElementById('hinglishBtn');

    // Function to set language preference in localStorage
    const setLanguagePreference = (lang) => {
        localStorage.setItem('blogLanguage', lang);
        applyLanguage(lang);
    };

    // Function to apply language based on preference
    const applyLanguage = (lang) => {
        document.querySelectorAll('.english-text').forEach(el => {
            el.classList.toggle('hidden', lang === 'hinglish');
        });
        document.querySelectorAll('.hinglish-text').forEach(el => {
            el.classList.toggle('hidden', lang === 'english');
        });
    };

    // Event listeners for language buttons
    englishBtn.addEventListener('click', () => setLanguagePreference('english'));
    hinglishBtn.addEventListener('click', () => setLanguagePreference('hinglish'));

    // Check for saved language preference on load
    const savedLanguage = localStorage.getItem('blogLanguage') || 'hinglish'; // Default to Hinglish
    applyLanguage(savedLanguage);

    // Basic Scroll Animation (Intersection Observer)
    const blogPosts = document.querySelectorAll('.blog-post');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // Optional: Stop observing once it's animated to save resources
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove in-view class if you want to re-animate on scroll back up
                // entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);

    blogPosts.forEach(post => {
        observer.observe(post);
    });

    // Animate individual list items (protection-list li) and table containers
    const animatedElements = document.querySelectorAll('.protection-list li, .threat-item, .table-container');

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                elementObserver.unobserve(entry.target); // Animate once
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Adjust as needed
    });

    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll'); // Add a class for initial state
        elementObserver.observe(el);
    });
});