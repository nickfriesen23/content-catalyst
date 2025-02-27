// Lightbox functionality for images
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox elements
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.className = 'lightbox-overlay';
    
    const lightboxContainer = document.createElement('div');
    lightboxContainer.className = 'lightbox-container';
    
    const lightboxImage = document.createElement('img');
    lightboxImage.className = 'lightbox-image';
    
    const lightboxClose = document.createElement('button');
    lightboxClose.className = 'lightbox-close';
    lightboxClose.innerHTML = '&times;';
    
    const lightboxCaption = document.createElement('div');
    lightboxCaption.className = 'lightbox-caption';
    
    // Add navigation controls
    const prevButton = document.createElement('button');
    prevButton.className = 'lightbox-nav lightbox-prev';
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    
    const nextButton = document.createElement('button');
    nextButton.className = 'lightbox-nav lightbox-next';
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    
    // Add counter element
    const imageCounter = document.createElement('div');
    imageCounter.className = 'lightbox-counter';
    
    // Append elements to the DOM
    lightboxContainer.appendChild(lightboxImage);
    lightboxContainer.appendChild(lightboxClose);
    lightboxContainer.appendChild(lightboxCaption);
    lightboxContainer.appendChild(prevButton);
    lightboxContainer.appendChild(nextButton);
    lightboxContainer.appendChild(imageCounter);
    lightboxOverlay.appendChild(lightboxContainer);
    document.body.appendChild(lightboxOverlay);
    
    // Add cursor pointer to all gallery images
    function addPointerCursor() {
        const galleryImages = document.querySelectorAll('.bts-image-container img, .training-image img, .portfolio-item img, .host-image, .space-image');
        galleryImages.forEach(img => {
            img.style.cursor = 'pointer';
        });
    }
    
    // Initial call to add pointer cursor
    addPointerCursor();
    
    // Track current gallery and index
    let currentGallery = [];
    let currentIndex = 0;
    
    // Use event delegation for handling image clicks
    document.body.addEventListener('click', function(e) {
        // Check if the clicked element is an image within our target containers
        const clickedElement = e.target;
        
        if (clickedElement.tagName === 'IMG' && 
            (clickedElement.closest('.bts-image-container') || 
             clickedElement.closest('.training-image') || 
             clickedElement.closest('.portfolio-item') ||
             clickedElement.classList.contains('host-image') ||
             clickedElement.classList.contains('space-image'))) {
            
            // Determine the gallery
            let gallery = [];
            let container = null;
            
            if (clickedElement.closest('.bts-image-container')) {
                container = document.getElementById('bts-grid');
            } else if (clickedElement.closest('.training-image')) {
                // Determine which training grid
                const jonGrid = document.getElementById('jon-grid');
                const joelGrid = document.getElementById('joel-grid');
                
                if (clickedElement.closest('#jon-grid')) {
                    container = jonGrid;
                } else if (clickedElement.closest('#joel-grid')) {
                    container = joelGrid;
                }
            }
            
            if (container) {
                // Get all images in this container
                const imgElements = container.querySelectorAll('img');
                gallery = Array.from(imgElements).map(img => ({ src: img.src, alt: img.alt }));
                
                // Find the index of the clicked image
                currentIndex = Array.from(imgElements).findIndex(img => img.src === clickedElement.src);
            } else {
                // Single image (host image or space image)
                gallery = [{ src: clickedElement.src, alt: clickedElement.alt }];
                currentIndex = 0;
            }
            
            currentGallery = gallery;
            openLightbox(currentGallery[currentIndex].src, currentGallery[currentIndex].alt);
            updateCounter();
            updateNavigation();
        }
    });
    
    // Function to open lightbox
    function openLightbox(src, alt) {
        lightboxImage.src = src;
        lightboxCaption.textContent = alt;
        lightboxOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
        
        // Add animation class
        setTimeout(() => {
            lightboxOverlay.classList.add('active');
            lightboxContainer.classList.add('active');
        }, 10);
    }
    
    // Update the counter display
    function updateCounter() {
        if (currentGallery.length > 1) {
            imageCounter.textContent = `${currentIndex + 1} / ${currentGallery.length}`;
            imageCounter.style.display = 'block';
        } else {
            imageCounter.style.display = 'none';
        }
    }
    
    // Update navigation buttons
    function updateNavigation() {
        if (currentGallery.length > 1) {
            prevButton.style.display = 'block';
            nextButton.style.display = 'block';
        } else {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        }
    }
    
    // Navigate to previous image
    prevButton.addEventListener('click', function(e) {
        e.stopPropagation();
        if (currentGallery.length > 1) {
            currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
            lightboxImage.classList.add('transition-out');
            
            setTimeout(() => {
                lightboxImage.src = currentGallery[currentIndex].src;
                lightboxCaption.textContent = currentGallery[currentIndex].alt;
                lightboxImage.classList.remove('transition-out');
                lightboxImage.classList.add('transition-in');
                updateCounter();
                
                setTimeout(() => {
                    lightboxImage.classList.remove('transition-in');
                }, 300);
            }, 300);
        }
    });
    
    // Navigate to next image
    nextButton.addEventListener('click', function(e) {
        e.stopPropagation();
        if (currentGallery.length > 1) {
            currentIndex = (currentIndex + 1) % currentGallery.length;
            lightboxImage.classList.add('transition-out');
            
            setTimeout(() => {
                lightboxImage.src = currentGallery[currentIndex].src;
                lightboxCaption.textContent = currentGallery[currentIndex].alt;
                lightboxImage.classList.remove('transition-out');
                lightboxImage.classList.add('transition-in');
                updateCounter();
                
                setTimeout(() => {
                    lightboxImage.classList.remove('transition-in');
                }, 300);
            }, 300);
        }
    });
    
    // Close lightbox when clicking the close button
    lightboxClose.addEventListener('click', closeLightbox);
    
    // Close lightbox when clicking outside the image
    lightboxOverlay.addEventListener('click', function(e) {
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });
    
    // Close lightbox when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            prevButton.click();
        } else if (e.key === 'ArrowRight') {
            nextButton.click();
        }
    });
    
    // Function to close lightbox
    function closeLightbox() {
        lightboxOverlay.classList.remove('active');
        lightboxContainer.classList.remove('active');
        
        // Wait for animation to complete before hiding
        setTimeout(() => {
            lightboxOverlay.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }, 300);
    }
    
    // Add MutationObserver to handle dynamically added images
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                addPointerCursor();
            }
        });
    });
    
    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Add the CSS for the enhanced lightbox
    const lightboxStyles = document.createElement('style');
    lightboxStyles.textContent = `
        .lightbox-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 10;
        }
        
        .lightbox-nav:hover {
            background: rgba(0, 0, 0, 0.8);
            transform: translateY(-50%) scale(1.1);
        }
        
        .lightbox-prev {
            left: 20px;
        }
        
        .lightbox-next {
            right: 20px;
        }
        
        .lightbox-counter {
            position: absolute;
            bottom: -30px;
            left: 0;
            right: 0;
            text-align: center;
            color: white;
            font-size: 14px;
        }
        
        .lightbox-image {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .lightbox-image.transition-out {
            opacity: 0;
            transform: scale(0.9);
        }
        
        .lightbox-image.transition-in {
            opacity: 1;
            transform: scale(1);
        }
        
        .lightbox-container {
            padding: 10px;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            backdrop-filter: blur(10px);
        }
    `;
    document.head.appendChild(lightboxStyles);
});