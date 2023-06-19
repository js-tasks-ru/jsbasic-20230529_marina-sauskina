let index = 0;
function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const carouselArrowLeft = carousel.querySelector('.carousel__arrow_left');
  const carouselArrowRight = carousel.querySelector('.carousel__arrow_right');
  const carouselInner = carousel.querySelector('.carousel__inner');
  const divInnerWidth = carouselInner.offsetWidth;

  carouselArrowLeft.style.display = 'none';


  carouselArrowLeft.addEventListener('click', ()=>{
    carouselInner.setAttribute("style", `transform: translateX(-${divInnerWidth * --index }px)`);
    arrowCheck();
  });

  carouselArrowRight.addEventListener('click', ()=>{
    index++;
    carouselInner.setAttribute("style", `transform: translateX(-${divInnerWidth * index}px)`);
    arrowCheck();
  });

  function arrowCheck() {
    if (index === 0) {
      carouselArrowLeft.style.display = 'none';
    } else if (index === 3) {
      carouselArrowRight.style.display = 'none';
    } else {
      carouselArrowLeft.style.display = '';
      carouselArrowRight.style.display = '';
}
}

}
