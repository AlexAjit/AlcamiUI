document.addEventListener('DOMContentLoaded', () => {
    // Search Functionality
    const searchIcon = document.querySelector('.search-icon');
    const searchOverlay = document.querySelector('.search-overlay');
    const closeSearchBtn = document.querySelector('.close-search');

    searchIcon.addEventListener('click', () => {
        searchOverlay.style.display = 'block';
    });

    closeSearchBtn.addEventListener('click', () => {
        searchOverlay.style.display = 'none';
    });

    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.style.display = 'none';
        }
    });

    // Hamburger Menu Toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    hamburgerMenu.addEventListener('click', () => {
        mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
        
        // Toggle hamburger menu animation
        hamburgerMenu.classList.toggle('active');
    });

    // Responsive Navigation
    function handleResponsiveNav() {
        if (window.innerWidth <= 1024) {
            mainNav.style.display = 'none';
        } else {
            mainNav.style.display = 'block';
        }
    }

    // Initial check and add resize listener
    handleResponsiveNav();
    window.addEventListener('resize', handleResponsiveNav);
});