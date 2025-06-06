let currentSlide = 0;
const slides = document.querySelector('.image-slider');
const totalSlides = document.querySelectorAll('.image-wrapper').length;
const imageWrappers = document.querySelectorAll('.image-wrapper');

let touchStartX = 0;
let touchEndX = 0;

// Ensure first image is visible on page load
document.addEventListener('DOMContentLoaded', () => {
    // Make sure the first image is visible
    imageWrappers[0].classList.add('active');
    imageWrappers[0].style.opacity = '1';
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
            updateImageVisibility();
        }
    } else if (touchEndX > touchStartX && Math.abs(touchEndX - touchStartX) > swipeThreshold) {
        // Swipe right - go to previous slide
        if (currentSlide > 0) {
            currentSlide--;
            updateImageVisibility();
        }
    }

    // Reset touch positions
    touchStartX = 0;
    touchEndX = 0;
}

function updateImageVisibility() {
    // Remove active class from all images
    imageWrappers.forEach(wrapper => {
        wrapper.classList.remove('active');
        wrapper.style.opacity = '0';
    });
    
    // Add active class to current slide
    imageWrappers[currentSlide].classList.add('active');
    imageWrappers[currentSlide].style.opacity = '1';
}