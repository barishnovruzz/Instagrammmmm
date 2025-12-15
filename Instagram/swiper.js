var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4, // базовое значение для мобильных
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // когда экран >= 768px
    768: {
      slidesPerView: 6,
    }
  }
});
