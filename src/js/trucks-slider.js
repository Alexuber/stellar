const swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
  spaceBetween: 8,
  slidesPerView: 1,
  with: 320,
  navigation: {
    enabled: true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      spaceBetween: 24,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 24,
      slidesPerView: 3,
    },
  },
});
