// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Add theme toggle functionality
    document.addEventListener('click', (e) => {
        const themeToggle = e.target.closest('.theme-toggle');
        if (themeToggle) {
            const isDark = document.body.classList.contains('dark');
            if (isDark) {
                document.body.classList.remove('dark');
                document.body.classList.add('light');
            } else {
                document.body.classList.remove('light');
                document.body.classList.add('dark');
            }
            
            // Re-render current page with new theme
            if (window.router) {
                window.router.handleRoute();
            }
        }
    });
    
    // Handle window resize for responsive design
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.router) {
                window.router.handleRoute();
            }
        }, 250);
    });
});