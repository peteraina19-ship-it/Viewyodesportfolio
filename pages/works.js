async function renderWorks() {
    const app = document.getElementById('app');
    const isDark = document.body.classList.contains('dark');
    
    const campaignsHTML = campaigns.map(campaign => `
        <a href="/works?slug=${campaign.slug}" class="project-link" data-link>
            <div class="project-card">
                <img src="${campaign.thumbnail}" alt="${campaign.title}">
                <div class="card-overlay">
                    <h3>${campaign.title}</h3>
                    <span>${campaign.year} • ${campaign.client || 'In-house'}</span>
                </div>
            </div>
        </a>
    `).join('');
    
    app.innerHTML = `
        <div class="works-container">
            <a href="/" class="back-link" data-link>
                <i data-lucide="arrow-left"></i> Back to Home
            </a>
            
            <h1>All Campaigns</h1>
            <p class="works-subtitle">
                A selection of visual stories I've crafted as a photographer and in-house director.
            </p>
            
            <div class="campaigns-grid">
                ${campaignsHTML}
            </div>
        </div>
    `;
    
    lucide.createIcons();
}