const aboutSwiper = new Swiper('.aboutSwiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
  width: 220,
  spaceBetween: 16,
  navigation: {
    enabled: true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
