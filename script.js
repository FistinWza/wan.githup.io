window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

let currentIndex = 0;

function showSlide(carousel, index) {
    const carouselInner = carousel.querySelector('.carousel-inner-1');
    const offset = -index * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    const carousel = this.closest('.carousel-1');
    const items = carousel.querySelectorAll('.carousel-item-1');
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(carousel, currentIndex);
}

function prevSlide() {
    const carousel = this.closest('.carousel-1');
    const items = carousel.querySelectorAll('.carousel-item-1');
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(carousel, currentIndex);
}

document.querySelectorAll('.carousel-control-next').forEach(button => {
    button.addEventListener('click', nextSlide);
});

document.querySelectorAll('.carousel-control-prev').forEach(button => {
    button.addEventListener('click', prevSlide);
});