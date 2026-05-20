// Smooth scroll behavior and animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll(
        '.section, .card, .skill-box, .project-card, .interest-card, .contact-item'
    );
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });

    // Resume button click handler
    const resumeBtn = document.querySelector('.resume-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function() {
            // Placeholder for actual resume download
            alert('Resume download link will be added here');
        });
    }

    // Secondary button - Connect
    const connectBtn = document.querySelectorAll('.resume-btn')[1];
    if (connectBtn) {
        connectBtn.addEventListener('click', function() {
            const contactSection = document.querySelector('.section:has(h2:contains("📩"))');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Fallback: scroll to last section
                document.querySelectorAll('.section')[document.querySelectorAll('.section').length - 1]
                    .scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Add hover effects for cards
    const cards = document.querySelectorAll('.skill-box, .interest-card, .project-card, .contact-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add staggered animation to grid items
    const skillBoxes = document.querySelectorAll('.skill-box');
    skillBoxes.forEach((box, index) => {
        box.style.animationDelay = `${index * 0.05}s`;
    });

    const interestCards = document.querySelectorAll('.interest-card');
    interestCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add scroll animations for parallax effect
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    
    if (hero) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});
