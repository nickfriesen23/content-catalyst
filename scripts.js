// Content Catalyst - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect and mobile navigation
    const header = document.querySelector('.header');
    const scrollThreshold = 50;
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    let isMenuOpen = false;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Toggle
    mobileNavToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileNav.classList.toggle('active');
        mobileNavToggle.classList.toggle('active');
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    });

    // Close mobile nav when clicking a link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileNavToggle.classList.remove('active');
            isMenuOpen = false;
            document.body.style.overflow = '';
        });
    });

    // Pricing toggle functionality
    document.querySelectorAll('.pricing-header').forEach(header => {
        header.addEventListener('click', () => {
            const card = header.closest('.pricing-card');
            const features = card.querySelector('.pricing-features');
            const toggle = header.querySelector('.pricing-toggle');
            const toggleText = toggle.querySelector('span');
            
            // Close all other cards
            document.querySelectorAll('.pricing-features.active').forEach(el => {
                if (el !== features) {
                    el.classList.remove('active');
                    const otherToggle = el.closest('.pricing-card').querySelector('.pricing-toggle');
                    otherToggle.classList.remove('active');
                    otherToggle.querySelector('span').textContent = 'See what\'s included';
                }
            });

            // Toggle current card
            features.classList.toggle('active');
            toggle.classList.toggle('active');
            toggleText.textContent = features.classList.contains('active') ? 'Hide details' : 'See what\'s included';
        });
    });

    // Scroll reveal animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .pricing-card, .case-study-card, .testimonial-card').forEach(el => {
        el.classList.add('scroll-reveal');
        scrollObserver.observe(el);
    });

    // Sample case studies data
    const caseStudies = [
        {
            image: "https://nick-f.imgix.net/images/placeholder.svg?fm=webp&q=50",
            title: "Tech Startup Rebrand",
            description: "How we helped a growing tech company establish a professional brand presence.",
            client: "InnovateTech Solutions",
            results: ["300% increase in engagement", "150+ pieces of content"]
        },
        {
            image: "https://nick-f.imgix.net/images/placeholder.svg?fm=webp&q=50",
            title: "Personal Brand Evolution",
            description: "Transforming a consultant's online presence for greater impact.",
            client: "Sarah Johnson Consulting",
            results: ["5x LinkedIn following", "10 speaking opportunities"]
        },
        {
            image: "https://nick-f.imgix.net/images/placeholder.svg?fm=webp&q=50",
            title: "E-commerce Success Story",
            description: "Creating compelling product content that drives sales.",
            client: "StyleHub Fashion",
            results: ["45% increase in conversions", "200+ product features"]
        }
    ];

    // Render case studies
    const caseStudiesGrid = document.querySelector('.case-studies-grid');
    if (caseStudiesGrid) {
        caseStudies.forEach(study => {
            const card = document.createElement('div');
            card.className = 'case-study-card scroll-reveal';
            card.innerHTML = `
                <img src="${study.image}" alt="${study.title}" class="case-study-image">
                <div class="case-study-content">
                    <h3>${study.title}</h3>
                    <p>${study.description}</p>
                    <div class="case-study-details">
                        <p class="client"><strong>Client:</strong> ${study.client}</p>
                        <ul class="results">
                            ${study.results.map(result => `<li>${result}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
            caseStudiesGrid.appendChild(card);
            scrollObserver.observe(card);
        });
    }

    // Sample testimonials data
    const testimonials = [
        {
            avatar: "https://nick-f.imgix.net/images/placeholder.svg?fm=webp&q=50",
            quote: "Content Catalyst transformed how I present myself online. The ongoing support and community have been invaluable.",
            author: "Emily Chen",
            role: "Tech Entrepreneur"
        },
        {
            avatar: "https://nick-f.imgix.net/images/placeholder.svg?fm=webp&q=50",
            quote: "The pre-event coaching and post-production support made all the difference. Highly recommend!",
            author: "Marcus Rodriguez",
            role: "Business Coach"
        },
        {
            avatar: "https://nick-f.imgix.net/images/placeholder.svg?fm=webp&q=50",
            quote: "Not just great photos and videos, but a complete content strategy that keeps delivering results.",
            author: "Lisa Thompson",
            role: "Marketing Director"
        }
    ];

    // Initialize testimonials slider
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    if (testimonialsSlider) {
        let currentSlide = 0;
        
        const renderTestimonial = (index) => {
            const testimonial = testimonials[index];
            testimonialsSlider.innerHTML = `
                <div class="testimonial-card scroll-reveal">
                    <img src="${testimonial.avatar}" alt="${testimonial.author}" class="testimonial-avatar">
                    <blockquote class="testimonial-quote">${testimonial.quote}</blockquote>
                    <p class="testimonial-author">${testimonial.author}</p>
                    <p class="testimonial-role">${testimonial.role}</p>
                </div>
            `;
            const card = testimonialsSlider.querySelector('.testimonial-card');
            scrollObserver.observe(card);
        };

        // Auto-rotate testimonials
        renderTestimonial(0);
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonials.length;
            renderTestimonial(currentSlide);
        }, 5000);
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Form validation for sign-in (placeholder for backend integration)
const signInForm = document.querySelector('.sign-in-form');
if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form validation and submission logic here
        console.log('Sign-in form submitted');
    });
}

// Add hover animation for interactive elements
document.querySelectorAll('.hover-lift').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'translateY(-5px)';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'translateY(0)';
    });
});