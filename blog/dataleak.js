 function setLanguage(lang) {
    if (lang === 'english') {
      document.getElementById("title").innerText = "🔐 State of Data Leaks – Understand the Real Reason";
      document.getElementById("subtitle").innerText = "Platforms like Facebook, Google, Instagram, Apple, and Microsoft are also affected!";
      document.getElementById("intro-title").innerText = "Introduction";
      document.getElementById("intro-text").innerText = "These days, data privacy has become a serious concern. In 2025, billions of users' passwords from platforms like Facebook, Instagram, Google, Apple, Microsoft, and Yahoo are being found on the dark web. But the problem is that these leaks are not due to companies being hacked, but because of user mistakes.";
      document.getElementById("how-title").innerText = "How Does Data Leak?";
      document.getElementById("how-list").innerHTML = `
        <li>🔓 Using weak passwords (123456, qwerty, abc123)</li>
        <li>🌐 Logging into unknown third-party websites</li>
        <li>🚫 Not enabling 2-Factor Authentication (2FA)</li>
        <li>🔁 Using the same password on every site</li>
      `;
      document.getElementById("how-desc").innerText = "If you use 'Login with Facebook' or 'Login with Google' on an insecure site, your login tokens can be leaked – allowing hackers to access your account without a password.";
      document.getElementById("impact-title").innerText = "Impact of the Leak";
      document.getElementById("impact-text").innerText = "A single leak can lead to multiple accounts being hacked – such as email, banking, social accounts. Your money and privacy are both at risk.";
      document.getElementById("safety-title").innerText = "How to Stay Safe?";
      document.getElementById("safety-list").innerHTML = `
        <li>✅ Create a unique strong password for every site</li>
        <li>🔐 Always enable 2FA</li>
        <li>📱 Use a trusted password manager (Bitwarden, 1Password)</li>
        <li>🕵️‍♂️ Check your data: <a href='https://haveibeenpwned.com' target='_blank'>HaveIBeenPwned.com</a></li>
        <li>🚫 Avoid logging into unknown websites</li>
        <li>🛡️ Use VPN on public Wi-Fi</li>
      `;
      document.getElementById("end-title").innerText = "Conclusion";
      document.getElementById("end-text").innerText = "Cyber threats are real. If we become a little smarter, we can secure our digital life. Share this information with your friends and family!";
    } else {
      location.reload();
    }
  }