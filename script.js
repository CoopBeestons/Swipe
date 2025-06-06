let currentSlide = 0;
const slides = document.querySelector('.image-slider');
const totalSlides = document.querySelectorAll('.image-wrapper').length;
const imageWrappers = document.querySelectorAll('.image-wrapper');

let touchStartX = 0;
let touchEndX = 0;

// Ensure first image is visible on page load
document.addEventListener('DOMContentLoaded', () => {
    imageWrappers[0].classList.add('active');
});

// Touch events for mobile devices
slides.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

slides.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance to trigger swipe
    
    if (touchEndX < touchStartX && Math.abs(touchEndX - touchStartX) > swipeThreshold) {
        // Swipe left - go to next slide
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            slideToNext();
        }
    } else if (touchEndX > touchStartX && Math.abs(touchEndX - touchStartX) > swipeThreshold) {
        // Swipe right - go to previous slide
        if (currentSlide > 0) {
            currentSlide--;
            slideToPrevious();
        }
    }

    // Reset touch positions
    touchStartX = 0;
    touchEndX = 0;
}

function slideToNext() {
    // Get current and next image
    const current = imageWrappers[currentSlide - 1];
    const next = imageWrappers[currentSlide];
    
    // Set up the transition
    current.classList.add('prev');
    next.classList.add('next');
    
    // Wait for transition to complete
    setTimeout(() => {
        current.classList.remove('active', 'prev');
        next.classList.remove('next');
        next.classList.add('active');
    }, 500);
}

function slideToPrevious() {
    // Get current and previous image
    const current = imageWrappers[currentSlide + 1];
    const previous = imageWrappers[currentSlide];
    
    // Set up the transition
    current.classList.add('next');
    previous.classList.add('prev');
    
    // Wait for transition to complete
    setTimeout(() => {
        current.classList.remove('active', 'next');
        previous.classList.remove('prev');
        previous.classList.add('active');
    }, 500);
}