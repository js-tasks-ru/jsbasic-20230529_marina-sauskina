// function for a slider to show/hide side-arrows and turn slides on click.
function initCarousel() {
  const carousel = document.querySelector('.carousel'); // main div <div class="carousel">
  let inner = carousel.querySelector('.carousel__inner');
  let slides = inner.querySelectorAll('.carousel__slide');
  let leftArrow = carousel.querySelector('.carousel__arrow_left');
  let rightArrow = carousel.querySelector('.carousel__arrow_right');
  let slideWidth = slides[0].offsetWidth; // width of one slide, found via offSetWidth
  let currentSlide = 0;
  let lastSlide = slides.length - 1;

  leftArrow.style.display = 'none';

  function moveSlide(direction) {
    currentSlide += direction;
    inner.style.transform = `translateX(-${slideWidth * currentSlide}px)`;

    if (currentSlide === 0) {
      leftArrow.style.display = 'none';
    } else if (currentSlide === lastSlide) {
      rightArrow.style.display = 'none';
    } else {
      leftArrow.style.display = '';
      rightArrow.style.display = '';
    }
  }

  leftArrow.addEventListener('click', () => {
    moveSlide(-1);
  });

  rightArrow.addEventListener('click', () => {
    moveSlide(1);
  });
}
