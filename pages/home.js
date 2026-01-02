// Profile image URL
const profileImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop";

async function renderHome() {
    const app = document.getElementById('app');
    const isDark = document.body.classList.contains('dark');
    const isMobile = window.innerWidth < 768;
    
    if (!isMobile) {
        app.innerHTML = `
            ${renderDesktopNav(isDark)}
            ${renderDesktopHero(isDark)}
            ${renderDesktopCampaigns(isDark)}
            ${renderCTASection(isDark)}
            ${renderFooter(isDark)}
        `;
    } else {
        app.innerHTML = `
            ${renderMobileNav(isDark)}
            ${renderMobileContent(isDark)}
        `;
    }
    
    attachHomeEventListeners(isDark);
    lucide.createIcons();
}

function renderDesktopNav(isDark) {
    return `
        <nav class="navbar">
            <div class="nav-left">
                <a href="/" class="nav-brand" data-link>Yode</a>
                <div class="nav-links">
                    <a href="/works" class="nav-link" data-link>Works</a>
                    <a href="/contact" class="nav-link" data-link>Contact</a>
                </div>
            </div>
            <div class="nav-actions">
                <button class="theme-toggle" aria-label="Toggle theme">
                    <i data-lucide="${isDark ? 'sun' : 'moon'}"></i>
                </button>
                <a href="/contact" data-link>
                    <button class="btn-primary">
                        Get in Touch <i data-lucide="arrow-right"></i>
                    </button>
                </a>
            </div>
            <button class="mobile-menu-btn">
                <i data-lucide="menu"></i>
            </button>
        </nav>
    `;
}

function renderDesktopHero(isDark) {
    return `
        <div class="hero-section">
            <div class="hero-grid">
                <div class="hero-text">
                    <h1>Visual Storyteller &<br />In-House Director</h1>
                    
                    <p>
                        I craft visual stories that blend emotion, precision, and narrative.  
                        As an in-house director, I collaborate closely with brands to bring 
                        powerful campaigns to life.
                    </p>
                    
                    <div class="hero-buttons">
                        <a href="/works" data-link>
                            <button class="btn-primary">
                                View All Works <i data-lucide="arrow-right"></i>
                            </button>
                        </a>
                        
                        <a href="/contact" data-link>
                            <button class="btn-secondary">
                                Contact Me
                            </button>
                        </a>
                    </div>
                </div>

                <div class="hero-image">
                    <img src="${profileImage}" alt="Yode">
                    <div class="experience-badge">
                        <div class="number">8+</div>
                        <div class="text">Years of experience crafting visual narratives</div>
                    </div>
                </div>
            </div>
    `;
}

function renderDesktopCampaigns(isDark) {
    const featuredCampaigns = campaigns.slice(0, 4);
    const campaignsHTML = featuredCampaigns.map(campaign => `
        <a href="/works/${campaign.slug}" class="project-link" data-link>
            <div class="project-card">
                <img src="${campaign.thumbnail}" alt="${campaign.title}">
                <div class="card-overlay">
                    <h3>${campaign.title}</h3>
                    <span>${campaign.year} • ${campaign.client || 'In-house'}</span>
                </div>
            </div>
        </a>
    `).join('');
    
    return `
        <div class="campaigns-section">
            <div class="section-header">
                <h2>Recent Campaigns</h2>
                
                <a href="/works" data-link>
                    <button class="btn-secondary">
                        View All <i data-lucide="arrow-right"></i>
                    </button>
                </a>
            </div>

            <div class="campaigns-grid">
                ${campaignsHTML}
            </div>
        </div>
    `;
}

function renderCTASection(isDark) {
    return `
        <div class="cta-section">
            <h2>Ready to Create<br />Something Amazing?</h2>
            
            <p>
                Let's collaborate on your next project. From concept to execution, 
                I'll help bring your vision to life.
            </p>
            
            <div class="cta-buttons">
                <a href="/contact" data-link>
                    <button class="btn-primary">
                        Start a Project <i data-lucide="arrow-right"></i>
                    </button>
                </a>
                
                <a href="/works" data-link>
                    <button class="btn-secondary">
                        View Portfolio
                    </button>
                </a>
            </div>
        </div>
    `;
}

function renderFooter(isDark) {
    return `
        <footer class="footer">
            <div>
                <p>© ${new Date().getFullYear()} Yode. All rights reserved.</p>
            </div>
            
            <div class="footer-links">
                <a href="https://instagram.com/yourhandle" target="_blank" class="footer-link">
                    Instagram
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" class="footer-link">
                    LinkedIn
                </a>
            </div>
        </footer>
    `;
}

function renderMobileNav(isDark) {
    return `
        <nav class="navbar">
            <div class="nav-left">
                <a href="/" class="nav-brand" data-link>Yode</a>
            </div>

            <div style="display: flex; align-items: center; gap: 16px;">
                <button class="theme-toggle" aria-label="Toggle theme">
                    <i data-lucide="${isDark ? 'sun' : 'moon'}"></i>
                </button>

                <button class="mobile-menu-btn">
                    <i data-lucide="menu"></i>
                </button>
            </div>
        </nav>
    `;
}

function renderMobileContent(isDark) {
    const featuredCampaigns = campaigns.slice(0, 4);
    const campaignsHTML = featuredCampaigns.map(campaign => `
        <a href="/works/${campaign.slug}" class="project-link" data-link>
            <div class="project-card">
                <img src="${campaign.thumbnail}" alt="${campaign.title}">
                <div class="card-overlay">
                    <h3>${campaign.title}</h3>
                    <span>${campaign.year} • ${campaign.client || 'In-house'}</span>
                </div>
            </div>
        </a>
    `).join('');
    
    return `
        <div style="padding-top: 100px; padding: 24px;">
            <!-- Hero Section -->
            <div style="margin-bottom: 48px">
                <div style="position: relative; border-radius: 20px; overflow: hidden; margin-top: 100px ;aspect-ratio: 4/5; margin-bottom: 32px;">
                    <img src="${profileImage}" alt="Yode" class:"pic" style="  margin-top: px;width: 100%; height: 100%; object-fit: cover; filter: brightness(0.88) contrast(1.05);">
                    <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent 50%);"></div>
                </div>

                <h1 style="font-size: 2.5rem; font-weight: 700; line-height: 1.1; margin-bottom: 20px; letter-spacing: -0.02em;">
                    Adebolu Oluwasegun Prosper
                </h1>
                
                <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 24px; opacity: 0.9;">
                    Photographer & In-House Director
                </p>
                
                <p style="font-size: 1rem; line-height: 1.6; margin-bottom: 32px; opacity: 0.9;">
                    I craft visual stories that blend emotion, precision, and narrative.  
                    As an in-house director, I collaborate closely with brands to bring 
                    powerful campaigns to life.
                </p>
                
                <div style="display: flex; flex-direction: column; gap: 16px">
                    <a href="/works" data-link>
                        <button style="width: 100%; padding: 16px; border-radius: 50px; border: none; font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px; ${isDark ? 'background: white; color: #111111;' : 'background: #111111; color: white;'}">
                            View All Works <i data-lucide="arrow-right"></i>
                        </button>
                    </a>
                    
             
                </div>
            </div>

            <!-- Recent Campaigns -->
            <div style="margin-top: 60px">
                <h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 32px; letter-spacing: -0.02em;">
                    Recent Campaigns
                </h2>

                <div style="display: grid; grid-template-columns: 1fr; gap: 24px;">
                    ${campaignsHTML}
                </div>

                <div style="text-align: center; margin-top: 40px">
                    <a href="/works" data-link>
                        <button style="padding: 16px 40px; border-radius: 50px; background: transparent; font-size: 1rem; font-weight: 600; border: 2px solid ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'}; color: ${isDark ? '#f0f0f0' : '#1a1a1a'}; display: flex; align-items: center; gap: 8px; margin: 0 auto;">
                            View All Campaigns <i data-lucide="arrow-right"></i>
                        </button>
                    </a>
                </div>
            </div>

            <!-- CTA Section -->
            <div style="margin-top: 80px; margin-bottom: 60px; text-align: center; padding: 48px 24px; border-radius: 24px; border: 1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}; ${isDark ? 'background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' : 'background: linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.02) 100%)'}">
                <h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 20px; line-height: 1.2;">
                    Ready to Create Together?
                </h2>
                
                <p style="font-size: 1rem; opacity: 0.9; margin-bottom: 32px; line-height: 1.6;">
                    Let's collaborate on your next project and bring your vision to life.
                </p>
                
                <a href="/contact" data-link>
                    <button style="padding: 16px 40px; border-radius: 50px; border: none; font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; gap: 8px; margin: 0 auto; ${isDark ? 'background: white; color: #111111;' : 'background: #111111; color: white;'}">
                        Start a Project <i data-lucide="arrow-right"></i>
                    </button>
                </a>
            </div>
        </div>

        <!-- Mobile Footer -->
        <div style="padding: 32px 24px; border-top: 1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}; display: flex; flex-direction: column; gap: 24px">
            <div>
                <p style="font-size: 0.9rem; opacity: 0.8">
                    © ${new Date().getFullYear()} Yode. All rights reserved.
                </p>
            </div>
            
            <div style="display: flex; gap: 24px">
                <a href="https://instagram.com/yourhandle" target="_blank" style="color: ${isDark ? '#f0f0f0' : '#1a1a1a'}; opacity: 0.8; text-decoration: none; font-size: 0.95rem;">
                    Instagram
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" style="color: ${isDark ? '#f0f0f0' : '#1a1a1a'}; opacity: 0.8; text-decoration: none; font-size: 0.95rem;">
                    LinkedIn
                </a>
            </div>
        </div>
    `;
}

function attachHomeEventListeners(isDark) {
    // Attach mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu) {
                mobileMenu.remove();
            } else {
                const menu = document.createElement('div');
                menu.className = 'mobile-menu';
                menu.innerHTML = renderMobileMenu(isDark);
                document.querySelector('.navbar').after(menu);
                lucide.createIcons();
            }
        });
    }
    
    // Attach hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px)';
            card.style.boxShadow = '0 30px 60px rgba(0,0,0,0.4)';
            const img = card.querySelector('img');
            if (img) img.style.transform = 'scale(1.08)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
            const img = card.querySelector('img');
            if (img) img.style.transform = 'scale(1)';
        });
    });
}

function renderMobileMenu(isDark) {
    return `
        <nav class="mobile-nav-links">
            <a href="/" class="mobile-nav-link" data-link>Home</a>
            <a href="/works" class="mobile-nav-link" data-link>Works</a>
            <a href="/contact" class="mobile-nav-link" data-link>Contact</a>
        </nav>
        
        <div style="margin-top: auto; display: flex; flex-direction: column; gap: 16px">
            <a href="/contact" data-link>
                <button style="width: 100%; padding: 16px; border-radius: 50px; border: none; font-size: 1.1rem; font-weight: 600; ${isDark ? 'background: white; color: #111111;' : 'background: #111111; color: white;'}">
                    Get in Touch
                </button>
            </a>
        </div>
    `;
}