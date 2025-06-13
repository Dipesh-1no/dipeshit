// Contact form submission handler
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const statusMsg = document.getElementById("statusMsg");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Show sending status
            statusMsg.textContent = "⏳ Sending your message...";

            // Simulate a delay (e.g., email being sent)
            setTimeout(() => {
                statusMsg.textContent = "✅ Message sent successfully! We'll get back to you via Dipeshitsolution@gmail.com.";
                form.reset();
            }, 2000);
        });
    }
});


