class Router {
    constructor() {
        this.routes = {
            '/': 'home',
            '/works': 'works',
            '/contact': 'contact'
        };
        
        this.init();
    }
    
    init() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => this.handleRoute());
        
        // Handle link clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('[data-link]');
            if (link) {
                e.preventDefault();
                const href = link.getAttribute('href');
                this.navigate(href);
            }
        });
        
        // Handle initial route
        this.handleRoute();
    }
    
    navigate(url) {
        history.pushState(null, '', url);
        this.handleRoute();
    }
    
    async handleRoute() {
        const path = window.location.pathname;
        const searchParams = new URLSearchParams(window.location.search);
        const slug = searchParams.get('slug');
        
        // Clear mobile menu if open
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) mobileMenu.remove();
        
        // Route handling
        if (path === '/' || path === '') {
            await renderHome();
        } else if (path === '/works') {
            if (slug) {
                await renderCampaign(slug);
            } else {
                await renderWorks();
            }
        } else if (path === '/contact') {
            await renderContact();
        } else {
            // Try to match campaign slug directly from path
            const campaignSlug = path.replace('/works/', '');
            if (campaignSlug && campaignSlug !== 'works') {
                await renderCampaign(campaignSlug);
            } else {
                // Fallback to home for unknown routes
                this.navigate('/');
            }
        }
    }
}

// Create global router instance
window.router = new Router();