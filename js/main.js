let currentIndex = {
    carouselModern: 0,
    carouselAntiguo: 0
};

function showSection(sectionId) {
    document.querySelectorAll('.carousel-section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function moveSlide(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelectorAll('img').length;
    const itemWidth = carousel.querySelector('img').offsetWidth + 10; // Ancho más márgenes
    currentIndex[carouselId] += direction;

    if (currentIndex[carouselId] < 0) {
        currentIndex[carouselId] = items - 1;
    } else if (currentIndex[carouselId] >= items) {
        currentIndex[carouselId] = 0;
    }

    const translateX = -currentIndex[carouselId] * itemWidth;
    carousel.style.transform = `translateX(${translateX}px)`;
}

