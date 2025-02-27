const businesses = [
    "Entrepreneurs",
    "Health Professionals",
    "Tech Startups",
    "Coaches",
    "Real Estate Agents",
    "Photographers",
    "Restaurant Owners",
    "Fitness Trainers",
    "Marketing Agencies",
    "Artists",
    "Wedding Planners",
    "Consultants",
    "Online Course Creators",
    "Nutritionists",
    "Interior Designers",
    "Software Companies",
    "Content Creators",
    "Life Coaches",
    "Small Businesses",
    "Therapists",
    "Graphic Designers",
    "Yoga Instructors",
    "Food Bloggers",
    "Executive Coaches",
    "Web Developers",
    "Dentists",
    "Event Planners",
    "Boutique Owners",
    "Personal Trainers",
    "Social Media Managers",
    "Chiropractors",
    "Podcasters",
    "Makeup Artists",
    "Realtors",
    "Business Coaches",
    "Wellness Professionals",
    "E-commerce Brands",
    "Dance Studios",
    "Financial Advisors",
    "Videographers",
    "Local Businesses",
    "Writers",
    "Musicians",
    "Property Managers",
    "Home Stagers",
    "Online Businesses",
    "Educators",
    "Tutors",
    "Hair Stylists",
    "Estheticians",
    "App Developers",
    "Web Designers",
    "Etsy Sellers",
    "Crafters",
    "DIY Businesses",
    "Artisans",
    "Sales Professionals",
    "Landscapers",
    "Florists",
    "Veterinarians",
    "Pet Groomers",
    "Lawyers",
    "Accountants",
    "Architects",
    "Engineers",
    "Construction Companies",
    "Retail Stores",
    "Jewelers",
    "Bookstores",
    "Clothing Boutiques"
];

let currentIndex = 0;
const dynamicText = document.querySelector('.dynamic-text');

function updateText() {
    dynamicText.style.opacity = '0';
    
    setTimeout(() => {
        dynamicText.textContent = businesses[currentIndex];
        dynamicText.style.opacity = '1';
        
        currentIndex = (currentIndex + 1) % businesses.length;
    }, 100); // Faster fade out/in transition
}

// Initial text
updateText();

// Update text every 0.4 seconds
setInterval(updateText, 400);

// Add scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Fade in sections on scroll
    const sections = document.querySelectorAll('.section');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                
                // Animate child elements in sequence
                const elements = entry.target.querySelectorAll('.animate-on-scroll');
                elements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('element-visible');
                    }, 150 * index);
                });
                
                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    sections.forEach(section => {
        section.classList.add('section-animated');
        // Find and mark elements to animate
        const headings = section.querySelectorAll('h2, h3');
        const paragraphs = section.querySelectorAll('p');
        const cards = section.querySelectorAll('.feature-card, .host-card, .pricing-card');
        const images = section.querySelectorAll('.training-image, .bts-image-container');
        
        [...headings, ...paragraphs, ...cards, ...images].forEach(el => {
            el.classList.add('animate-on-scroll');
        });
        
        sectionObserver.observe(section);
    });
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const floatingBall = document.querySelector('.floating-ball');
    
    window.addEventListener('scroll', function() {
        if (hero && floatingBall) {
            const scrollPosition = window.scrollY;
            if (scrollPosition <= hero.offsetHeight) {
                const moveAmount = scrollPosition * 0.3;
                floatingBall.style.transform = `translate(${moveAmount}px, ${moveAmount/2}px)`;
            }
        }
    });
    
    // Add hover animations to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon i');
            icon.classList.add('fa-beat');
            setTimeout(() => {
                icon.classList.remove('fa-beat');
            }, 1000);
        });
    });
    
    // Add shine effect to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button, .pricing-button');
    ctaButtons.forEach(button => {
        // Create shine element
        const shine = document.createElement('span');
        shine.className = 'button-shine';
        button.appendChild(shine);
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        
        // Add shine CSS
        const style = document.createElement('style');
        style.textContent = `
            .button-shine {
                position: absolute;
                top: 0;
                left: -100%;
                width: 50%;
                height: 100%;
                background: linear-gradient(
                    to right,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(255, 255, 255, 0.3) 50%,
                    rgba(255, 255, 255, 0) 100%
                );
                transform: skewX(-25deg);
                transition: all 0.75s ease;
            }
            
            .cta-button:hover .button-shine,
            .pricing-button:hover .button-shine {
                animation: shine-effect 1.5s infinite;
            }
            
            @keyframes shine-effect {
                0% { left: -100%; }
                100% { left: 200%; }
            }
        `;
        document.head.appendChild(style);
    });
    
    // Add floating effect to host images
    const hostImages = document.querySelectorAll('.host-image');
    hostImages.forEach(img => {
        img.style.transition = 'transform 0.5s ease';
        const container = img.closest('.host-card');
        
        container.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.03)';
        });
        
        container.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)';
        });
    });

    // Add pulse effect to section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, color 0.3s ease';
            this.style.transform = 'scale(1.05)';
            
            const originalColor = getComputedStyle(this).color;
            this.setAttribute('data-original-color', originalColor);
            this.style.color = '#F2B705'; // Gold color
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            const originalColor = this.getAttribute('data-original-color');
            if (originalColor) {
                this.style.color = originalColor;
            }
        });
    });
    
    // Add section scroll indicators
    const sections2 = document.querySelectorAll('.section');
    if (sections2.length > 0) {
        const indicators = document.createElement('div');
        indicators.className = 'scroll-indicators';
        
        const indicatorStyle = document.createElement('style');
        indicatorStyle.textContent = `
            .scroll-indicators {
                position: fixed;
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
                display: flex;
                flex-direction: column;
                gap: 10px;
                z-index: 100;
            }
            
            .scroll-indicator {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: rgba(59, 110, 143, 0.3);
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .scroll-indicator.active {
                background-color: #F2B705;
                transform: scale(1.3);
            }
        `;
        document.head.appendChild(indicatorStyle);
        
        sections2.forEach((section, index) => {
            const indicator = document.createElement('div');
            indicator.className = 'scroll-indicator';
            indicator.dataset.index = index;
            indicator.addEventListener('click', function() {
                section.scrollIntoView({ behavior: 'smooth' });
            });
            indicators.appendChild(indicator);
        });
        
        document.body.appendChild(indicators);
        
        // Update active indicator on scroll
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            
            sections2.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    document.querySelectorAll('.scroll-indicator').forEach(ind => {
                        ind.classList.remove('active');
                    });
                    document.querySelector(`.scroll-indicator[data-index="${index}"]`).classList.add('active');
                }
            });
        });
    }
    
    // Add CSS for scroll animations
    const scrollAnimationStyles = document.createElement('style');
    scrollAnimationStyles.textContent = `
        .section-animated {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .section-visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .element-visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(scrollAnimationStyles);
});