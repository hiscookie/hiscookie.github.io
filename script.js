// Create falling cookies animation
function createCookies() {
    const cookiesContainer = document.getElementById('cookies-container');
    const numberOfCookies = 15;
    
    for (let i = 0; i < numberOfCookies; i++) {
        const cookie = document.createElement('div');
        cookie.classList.add('floating-cookies');
        
        // Random position
        const left = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 20 + 20;
        
        // Random animation duration
        const duration = Math.random() * 10 + 5;
        
        // Random delay
        const delay = Math.random() * 5;
        
        cookie.style.left = `${left}vw`;
        cookie.style.width = `${size}px`;
        cookie.style.height = `${size}px`;
        cookie.style.animation = `fall ${duration}s linear ${delay}s infinite`;
        
        cookiesContainer.appendChild(cookie);
    }
}

// Interactive social media links
function setupSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.1) translateY(-5px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1) translateY(0)';
        });
    });
}

// Cookie counter functionality
function setupCookieCounter() {
    const counterElement = document.getElementById('cookieCounter');
    const addButton = document.getElementById('addCookie');
    let count = 0;
    
    // Load saved count from localStorage if available
    if (localStorage.getItem('cookieCount')) {
        count = parseInt(localStorage.getItem('cookieCount'));
        counterElement.textContent = count;
    }
    
    addButton.addEventListener('click', () => {
        count++;
        counterElement.textContent = count;
        localStorage.setItem('cookieCount', count);
        
        // Add animation effect
        counterElement.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            counterElement.style.animation = '';
        }, 500);
        
        // Create a floating cookie animation
        createFloatingCookie();
    });
}

// Create a floating cookie when button is clicked
function createFloatingCookie() {
    const cookie = document.createElement('div');
    cookie.classList.add('floating-cookies');
    cookie.style.position = 'fixed';
    cookie.style.bottom = '50%';
    cookie.style.left = '50%';
    cookie.style.transform = 'translate(-50%, -50%)';
    cookie.style.width = '50px';
    cookie.style.height = '50px';
    cookie.style.zIndex = '1000';
    cookie.style.animation = 'float 2s ease-in-out forwards';
    
    document.body.appendChild(cookie);
    
    // Remove cookie after animation
    setTimeout(() => {
        document.body.removeChild(cookie);
    }, 2000);
}

// Add subtle animations to elements when they come into view
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.platform-item, .content-card, .about');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// Initialize the page effects
window.addEventListener('load', () => {
    createCookies();
    setupSocialLinks();
    setupCookieCounter();
    setupScrollAnimations();
    
    // Add subtle animation to platform items
    const platformItems = document.querySelectorAll('.platform-item');
    platformItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
});
