document.addEventListener('DOMContentLoaded', () => {
    // 1. Manage Loader & Content visibility
    const loaderContainer = document.getElementById('loader-container');
    const mainContent = document.getElementById('main-content');
    const loadDuration = 8000; // 8 seconds as requested

    // Function to hide loader and show content
    const revealContent = () => {
        loaderContainer.style.opacity = '0';
        loaderContainer.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            loaderContainer.style.display = 'none';
            mainContent.style.display = 'block';
            
            // Re-initialize AOS after content is visible
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true, // only animate once on scrolling down
                offset: 50
            });
            
            // Also refresh map in case there are specific measurements AOS needs
            setTimeout(() => AOS.refresh(), 100);
            
        }, 500); // Wait for fade out transition
    };

    // Attempt to hook on video end if video plays perfectly
    const loaderVideo = document.getElementById('loader-video');
    
    // Set a solid 8-second timeout as a fallback or primary trigger
    let isRevealed = false;
    const hideTimeout = setTimeout(() => {
        if (!isRevealed) {
            isRevealed = true;
            revealContent();
        }
    }, loadDuration);

    // If video is shorter than 8s or ends on its own
    if (loaderVideo) {
        loaderVideo.addEventListener('ended', () => {
            if (!isRevealed) {
                isRevealed = true;
                clearTimeout(hideTimeout);
                revealContent();
            }
        });
        
        // In case of error (e.g., logo.mp4 doesn't exist), just skip directly
        loaderVideo.addEventListener('error', () => {
            if (!isRevealed) {
                isRevealed = true;
                clearTimeout(hideTimeout);
                // Reduce the wait time to just 1 second if video is missing
                setTimeout(revealContent, 1000);
            }
        });
    }

});
