async function renderContact() {
    const app = document.getElementById('app');
    const isDark = document.body.classList.contains('dark');
    
    app.innerHTML = `
        <div class="contact-container">
            <a href="/" class="back-link" data-link>
                <i data-lucide="arrow-left"></i> Back to Home
            </a>
            
            <div class="contact-content">
                <h1>Let's Create Together</h1>
                
                <p class="contact-subtitle">
                    Interested in collaborating on your next visual story? <br>
                    I'm currently open to new in-house and freelance projects.
                </p>
                
                <div class="contact-actions">
                    <a href="mailto:peteraina19@gmail.com" class="email-link">
                        <i data-lucide="mail"></i> peteraina19@gmail.com
                    </a>
                    
                    <div class="social-links">
                        <a href="https://instagram.com/peteraina_201" target="_blank">
                            <i data-lucide="instagram"></i>
                        </a>
                    
                    </div>
                </div>
                
                <p class="response-time">
                    Response time: usually within 48 hours
                </p>
            </div>
        </div>
    `;
    
    lucide.createIcons();
    attachContactEventListeners(isDark);
}

function attachContactEventListeners(isDark) {
    // Add hover effects to email link
    const emailLink = document.querySelector('.email-link');
    if (emailLink) {
        emailLink.addEventListener('mouseenter', () => {
            emailLink.style.transform = 'translateY(-3px)';
            if (isDark) {
                emailLink.style.boxShadow = '0 12px 30px rgba(255,255,255,0.1)';
            } else {
                emailLink.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
            }
        });
        
        emailLink.addEventListener('mouseleave', () => {
            emailLink.style.transform = 'translateY(0)';
            emailLink.style.boxShadow = 'none';
        });
    }
    
    // Add hover effects to social links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-4px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) scale(1)';
        });
    });
}