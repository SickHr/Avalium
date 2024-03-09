window.addEventListener('load', function() {
    var fadeInUpElements = document.querySelectorAll('.fadeInUp');

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScrollAnimation() {
        fadeInUpElements.forEach(function(element) {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Trigger initial check
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