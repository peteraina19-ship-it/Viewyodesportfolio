async function renderCampaign(slug) {
    const app = document.getElementById('app');
    const project = campaigns.find(c => c.slug === slug);
    
    if (!project) {
        app.innerHTML = `
            <div class="not-found">
                <h1>Project not found</h1>
                <a href="/works" data-link>← Back to Works</a>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    const imagesHTML = project.images.map((img, index) => `
        <div class="campaign-image">
            <img src="${img}" alt="${project.title} - Image ${index + 1}">
        </div>
    `).join('');
    
    app.innerHTML = `
        <div class="campaign-container">
            <a href="/works" class="back-link" data-link>
                <i data-lucide="arrow-left"></i> Back to Works
            </a>
            
            <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; margin-bottom: 12px;">
                ${project.title}
            </h1>
            
            <div class="campaign-meta">
                <span>${project.year}</span>
                ${project.client ? `<span>• ${project.client}</span>` : ''}
                ${project.role ? `<span>• ${project.role}</span>` : ''}
            </div>
            
            ${project.description ? `
                <p class="campaign-description">${project.description}</p>
            ` : ''}
            
            <div class="campaign-images">
                ${imagesHTML}
            </div>
        </div>
    `;
    
    lucide.createIcons();
}