// Function to set the language of the content
        function setLanguage(lang) {
            // Iterate over all elements that have data-lang-hinglish or data-lang-english attributes
            document.querySelectorAll('[data-lang-hinglish], [data-lang-english]').forEach(element => {
                if (lang === 'english' && element.dataset.langEnglish) {
                    // If English is selected and English content exists, update innerHTML
                    element.innerHTML = element.dataset.langEnglish;
                } else if (lang === 'hinglish' && element.dataset.langHinglish) {
                    // If Hinglish is selected and Hinglish content exists, update innerHTML
                    element.innerHTML = element.dataset.langHinglish;
                }
            });
            // Update the lang attribute of the HTML tag for better accessibility
            document.querySelector('html').setAttribute('lang', lang === 'english' ? 'en' : 'hi');
        }

        // Intersection Observer for scroll-triggered animations
        document.addEventListener('DOMContentLoaded', () => {
            setLanguage('hinglish'); // Set initial language

            const sections = document.querySelectorAll('.section, .conclusion');

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Add the 'fade-in-scroll' class when the element enters the viewport
                        entry.target.classList.add('fade-in-scroll');
                        // Stop observing once animated
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1 // Trigger when 10% of the element is visible
            });

            // Observe each section and the conclusion
            sections.forEach(section => {
                observer.observe(section);
            });
        });
