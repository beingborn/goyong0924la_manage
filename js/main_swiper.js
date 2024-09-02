

// 배너 스와이퍼
let swiper = new Swiper(".bannerSwiper", {
  slidesPerView : 1,
  loop: true,
  loopAdditionalSlides : 1,


  navigation: {
    nextEl: ".banner__btn .swiper-button-next",
    prevEl: ".banner__btn .swiper-button-prev",
  },

  breakpoints: {

    767: {
      slidesPerView : 3,
      spaceBetween: 20,
    },

    1080: {
      slidesPerView : 3,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView : 3,
      spaceBetween: 32,
    }
  }

});




