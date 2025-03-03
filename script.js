let currentSlide = 0;
const slides = document.querySelectorAll('.rev-slider .slide');
const totalSlides = slides.length;

function moveSlide(step) {
    currentSlide += step;

    // Loop back to the first slide if at the end
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    updateSlider();
}

function updateSlider() {
    const slider = document.querySelector('.rev-slider');
    const offset = -currentSlide * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

// Optional: Auto slide after 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);

