let currentSlide = 0;
const slides = document.querySelector('.image-slider');
const totalSlides = document.querySelectorAll('.image-wrapper').length;

let touchStartX = 0;
let touchEndX = 0;

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
            slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
        }
    } else if (touchEndX > touchStartX && Math.abs(touchEndX - touchStartX) > swipeThreshold) {
        // Swipe right - go to previous slide
        if (currentSlide > 0) {
            currentSlide--;
            slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
        }
    }

    // Reset touch positions
    touchStartX = 0;
    touchEndX = 0;
}