const swiper = new Swiper(".page1 .swiper-container", {
  slidesPerView: "auto",
  speed: 1000,
  loop: true,
  loopAdditionalSlides: 1,
  slideToClickedSlide: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".visual1 .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: ".visual1 .swiper-button-prev",
    nextEl: ".visual1 .swiper-button-next",
  },
});

new Swiper(".page2 .swiper-container", {
  centeredSlides: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 5000,
  },
  speed: 1500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".page3 .swiper-container", {
  slidesPerView: 2,
  slidesPerColumn: 3,
  slidesPerColumnFill: "column",
  autoplay: {
    delay: 5000,
  },
  speed: 300,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".page4 .swiper-container", {
  slidesPerView: 3,
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  resistance: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: ".page4 .swiper-button-prev",
    nextEl: ".page4 .swiper-button-next",
  },
});

const slides = document.querySelectorAll(".swiper-slide");
for (const slide of slides) {
  slide.addEventListener("mouseover", function () {
    swiper.autoplay.stop();
  });
  slide.addEventListener("mouseout", function () {
    swiper.autoplay.start();
  });
}

const topswiperContainer = document.querySelector(".page1 .swiper-container");
const eventSwiperContainer = document.querySelector(".page4 .swiper-container");

topswiperContainer.style.overflow = "visible";
eventSwiperContainer.style.overflow = "visible";
