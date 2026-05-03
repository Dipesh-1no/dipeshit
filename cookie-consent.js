// Cookie Consent Script for AdSense Compliance

document.addEventListener("DOMContentLoaded", function() {
  // Check if user has already consented
  if (!localStorage.getItem('cookieConsent')) {
    createCookieConsentBanner();
  }
});

function createCookieConsentBanner() {
  // Create banner container
  const banner = document.createElement('div');
  banner.id = 'cookie-consent-banner';
  
  // Style the banner
  const style = document.createElement('style');
  style.innerHTML = `
    #cookie-consent-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: #0f172a;
      color: #fff;
      padding: 15px 20px;
      text-align: center;
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 15px;
      box-shadow: 0 -2px 10px rgba(0,0,0,0.2);
      font-family: 'Segoe UI', sans-serif;
    }
    #cookie-consent-banner p {
      margin: 0;
      font-size: 14px;
      max-width: 800px;
      line-height: 1.5;
    }
    #cookie-consent-banner a {
      color: #38bdf8;
      text-decoration: underline;
    }
    #cookie-consent-banner button {
      background-color: #38bdf8;
      color: #0f172a;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: background 0.3s;
    }
    #cookie-consent-banner button:hover {
      background-color: #0ea5e9;
    }
    @media (max-width: 768px) {
      #cookie-consent-banner {
        flex-direction: column;
        padding: 15px;
      }
    }
  `;
  
  // Banner HTML content
  banner.innerHTML = `
    <p>
      We use cookies to ensure you get the best experience on our website and to serve personalized ads via Google AdSense. 
      By continuing to use this site, you consent to our use of cookies. 
      <a href="privacy-policy.html">Learn more in our Privacy Policy</a>.
    </p>
    <button id="accept-cookies-btn">Got it!</button>
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(banner);
  
  // Add event listener to the button
  document.getElementById('accept-cookies-btn').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'true');
    banner.style.display = 'none';
  });
}
