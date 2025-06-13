document.getElementById('contactForm').addEventListener('submit', function(e) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (name === "" || email === "" || message === "") {
        e.preventDefault();
        document.getElementById('response').textContent = "Please fill all fields.";
    }
});
