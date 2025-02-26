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
    
    // Append elements to the DOM
    lightboxContainer.appendChild(lightboxImage);
    lightboxContainer.appendChild(lightboxClose);
    lightboxContainer.appendChild(lightboxCaption);
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
            
            openLightbox(clickedElement.src, clickedElement.alt);
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
});