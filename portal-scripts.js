document.addEventListener('DOMContentLoaded', () => {
    // User Menu Dropdown
    const userMenu = document.querySelector('.user-menu');
    if (userMenu) {
        userMenu.addEventListener('click', () => {
            // TODO: Implement dropdown menu
            console.log('User menu clicked');
        });
    }

    // Checklist Interactions
    const checklistItems = document.querySelectorAll('.checklist-item');
    checklistItems.forEach(item => {
        item.addEventListener('click', () => {
            const icon = item.querySelector('i');
            if (icon.classList.contains('fa-circle')) {
                icon.classList.remove('far', 'fa-circle');
                icon.classList.add('fas', 'fa-check-circle');
                item.classList.add('completed');
                updateProgress();
            } else {
                icon.classList.remove('fas', 'fa-check-circle');
                icon.classList.add('far', 'fa-circle');
                item.classList.remove('completed');
                updateProgress();
            }
        });
    });

    // Update Progress Bar
    function updateProgress() {
        const total = checklistItems.length;
        const completed = document.querySelectorAll('.checklist-item.completed').length;
        const percentage = Math.round((completed / total) * 100);
        
        const progressValue = document.querySelector('.stat-value');
        if (progressValue) {
            progressValue.textContent = `${percentage}%`;
        }
    }

    // Community Post Interactions
    const postActions = document.querySelectorAll('.post-actions button');
    postActions.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.textContent.trim();
            const icon = button.querySelector('i');
            
            if (action.includes('Like')) {
                icon.classList.toggle('far');
                icon.classList.toggle('fas');
                button.classList.toggle('active');
            }
            
            // Simulate interaction feedback
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Resource Card Animations
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.resource-icon i');
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        });

        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.resource-icon i');
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });

    // Sidebar Navigation
    const sidebarLinks = document.querySelectorAll('.sidebar-section a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
            
            // Simulate content loading
            const content = document.querySelector('.portal-content');
            if (content) {
                content.style.opacity = '0.5';
                setTimeout(() => {
                    content.style.opacity = '1';
                    // TODO: Load actual content based on link
                }, 300);
            }
        });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('nav');
    if (nav && window.innerWidth <= 768) {
        nav.appendChild(mobileMenuBtn);
        
        mobileMenuBtn.addEventListener('click', () => {
            const sidebar = document.querySelector('.portal-sidebar');
            if (sidebar) {
                sidebar.classList.toggle('show');
                mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
                mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
            }
        });
    }

    // Scroll Animations
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.resource-card, .community-post, .event-card').forEach(element => {
        animateOnScroll.observe(element);
    });

    // Event Card Hover Effects
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const date = card.querySelector('.event-date');
            date.style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseleave', () => {
            const date = card.querySelector('.event-date');
            date.style.transform = 'scale(1)';
        });
    });

    // Stats Animation
    function animateStats() {
        const stats = document.querySelectorAll('.stat-value');
        stats.forEach(stat => {
            const value = stat.textContent;
            if (value.includes('%')) {
                const percentage = parseInt(value);
                let current = 0;
                const interval = setInterval(() => {
                    if (current < percentage) {
                        current++;
                        stat.textContent = `${current}%`;
                    } else {
                        clearInterval(interval);
                    }
                }, 20);
            }
        });
    }

    // Run stats animation on page load
    animateStats();

    // Add smooth transitions for all interactive elements
    document.querySelectorAll('button, a').forEach(element => {
        element.style.transition = 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)';
    });
});