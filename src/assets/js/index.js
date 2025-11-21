// warezo.js - Professional JavaScript for Warezo E-commerce Platform

document.addEventListener('DOMContentLoaded', function() {
    // Initialize application
    initWarezoApp();
});

function initWarezoApp() {
    // Application state management
    const appState = {
        currentUser: null,
        cartItems: [],
        isLoggedIn: false
    };

    // Initialize all components
    initNavigation();
    initUserDropdown();
    initSmoothScrolling();
    initStatsAnimation();
    initFeatureCards();
    initCTASection();
    initFooter();
    initPerformanceMonitoring();
}

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = '';
            navbar.style.boxShadow = '';
            navbar.style.backdropFilter = '';
        }
    });

    // Active navigation link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu after click
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
}

// User dropdown functionality
function initUserDropdown() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (dropdownToggle && dropdownMenu) {
        // Enhanced dropdown interactions
        dropdownToggle.addEventListener('mouseenter', function() {
            const bsDropdown = new bootstrap.Dropdown(this);
            bsDropdown.show();
        });
        
        // Close dropdown when mouse leaves
        dropdownMenu.addEventListener('mouseleave', function() {
            const bsDropdown = bootstrap.Dropdown.getInstance(dropdownToggle);
            bsDropdown.hide();
        });
        
        // Dropdown items click handling
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function() {
                // Add loading state
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                
                // Simulate navigation delay
                setTimeout(() => {
                    window.location.href = this.getAttribute('href');
                }, 500);
            });
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animated stats counter
function initStatsAnimation() {
    const statCards = document.querySelectorAll('.stat-card');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStatCard(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    statCards.forEach(card => {
        observer.observe(card);
    });
}

function animateStatCard(card) {
    const statNumber = card.querySelector('.stat-number');
    const originalText = statNumber.textContent;
    
    // Add animation class
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.6s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
    
    // Animate numbers if they are numeric
    if (originalText.includes('%') || !isNaN(parseInt(originalText))) {
        animateNumber(statNumber, originalText);
    }
}

function animateNumber(element, targetValue) {
    const isPercentage = targetValue.includes('%');
    const numericValue = parseInt(targetValue);
    
    if (isNaN(numericValue)) return;
    
    let current = 0;
    const increment = numericValue / 50; // Adjust speed
    const duration = 1500; // 1.5 seconds
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
            current = numericValue;
            clearInterval(timer);
        }
        
        element.textContent = isPercentage ? 
            Math.floor(current) + '%' : 
            Math.floor(current) + (targetValue.includes('+') ? '+' : '');
    }, duration / 50);
}

// Feature cards interaction
function initFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Click effect
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// CTA section enhancement
function initCTASection() {
    const ctaButtons = document.querySelectorAll('.cta .btn');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Add click analytics (simulated)
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            this.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> Success!';
                this.style.backgroundColor = '#28a745';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                    this.style.backgroundColor = '';
                    window.location.href = this.getAttribute('href');
                }, 1000);
            }, 1500);
        });
    });
}

// Footer functionality
function initFooter() {
    const footerLinks = document.querySelectorAll('footer a');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click feedback
            this.style.color = '#3498db';
            setTimeout(() => {
                this.style.color = '';
            }, 300);
            
            // In a real application, this would navigate to the actual page
            console.log('Navigating to:', this.getAttribute('href'));
        });
    });
}

// Performance monitoring and error handling
function initPerformanceMonitoring() {
    // Log page load performance
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
        
        // Send to analytics in real implementation
        // analytics.track('page_loaded', { load_time: loadTime });
    });
    
    // Error handling
    window.addEventListener('error', function(e) {
        console.error('Application error:', e.error);
        // In production, send to error tracking service
        // errorTracking.report(e.error);
    });
    
    // Unhandled promise rejection
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
        e.preventDefault();
    });
}

// Utility functions
const warezoUtils = {
    // Debounce function for performance
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Local storage helper
    storage: {
        set: function(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (e) {
                console.error('Local storage error:', e);
            }
        },
        
        get: function(key) {
            try {
                return JSON.parse(localStorage.getItem(key));
            } catch (e) {
                console.error('Local storage error:', e);
                return null;
            }
        },
        
        remove: function(key) {
            try {
                localStorage.removeItem(key);
            } catch (e) {
                console.error('Local storage error:', e);
            }
        }
    },
    
    // Format currency
    formatCurrency: function(amount, currency = 'USD') {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        }).format(amount);
    },
    
    // API call simulation
    api: {
        async call(endpoint, data = {}) {
            // Simulate API call
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ success: true, data: {} });
                }, 1000);
            });
        }
    }
};

// Export for global access (if needed)
window.warezoApp = {
    init: initWarezoApp,
    utils: warezoUtils
};