const carousel = document.querySelector('.carousel');
    const carousel = carousel.querySelectorAll('.carousel-inner');
        let currentIndex = 0;
        let interval;

        function goToCarousel(index) {
  carousel.forEach(slide => {
    carousel.classList.remove('active');
  });
  carousel[index].classList.add('active');
  currentIndex = index;
}

function startCarouselshow() {
  interval = setInterval(() => {
    goToCarousel((currentIndex + 1) % carousel.length);
  }, 2000);
}
