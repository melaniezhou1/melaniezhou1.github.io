// Main script file
document.addEventListener('DOMContentLoaded', function() {
    // Arrow scroll functionality
    const arrow = document.querySelector('.arrow');
    if (arrow) {
        arrow.addEventListener('click', function() {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        });
    }
    
    // Handle theme transitions between pages
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    sessionStorage.setItem('theme', currentTheme);
    
    // Animate page transitions
    document.querySelectorAll('a').forEach(link => {
        if (link.hostname === window.location.hostname) {
            link.addEventListener('click', function(e) {
                if (!link.classList.contains('social-link') && !link.classList.contains('publication-link')) {
                    e.preventDefault();
                    
                    document.body.style.opacity = 0;
                    
                    setTimeout(function() {
                        window.location.href = link.href;
                    }, 300);
                }
            });
        }
    });
    
    // Page load animation
    document.body.style.opacity = 0;
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = 1;
    }, 100);
});