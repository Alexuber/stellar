const teamSwiper = new Swiper('.teamSwiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
  slidesPerView: 1,
  // width: 295,
  spaceBetween: 48,
  navigation: {
    enabled: true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
