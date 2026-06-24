const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});