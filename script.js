window.addEventListener('scroll', function() {
    const fadeInUpElements = document.querySelectorAll('.fadeInUp');
    fadeInUpElements.forEach(function(element) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});

// Spiele des Monats Karussell
const gameSlides = document.querySelectorAll('.game-slide');
let currentSlide = 0;

function showSlide(n) {
    gameSlides.forEach(function(slide, index) {
        if (index === n) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

showSlide(currentSlide);

const prevButton = document.getElementById('prev-game');
const nextButton = document.getElementById('next-game');

prevButton.addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + gameSlides.length) % gameSlides.length;
    showSlide(currentSlide);
});

nextButton.addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % gameSlides.length;
    showSlide(currentSlide);
});