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