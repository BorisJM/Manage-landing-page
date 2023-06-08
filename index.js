"use strict";

const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const navBar = document.querySelector(".nav-list");
const overlay = document.querySelector(".overlay");
const errorMessage = document.querySelector(".error-message");
const input = document.querySelector(".email-input");
const form = document.querySelector("form");

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  longSwipes: false,
  // slidesPerGroup: 3,
  // slidesPerView: 3,
  spaceBetween: 0,
  slidesPerView: 2,

  centeredSlides: true,
  // If we need pagination

  // Navigation arrows

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    1240: {
      slidesPerView: 2,
    },
    1040: {
      slidesPerView: 1,
    },

    840: {
      slidesPerView: 1,
    },

    640: {
      slidesPerView: 1,
    },

    300: {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    },
  },
});

toggleBtn.addEventListener("click", function (e) {
  navBar.classList.toggle("open");
  overlay.classList.toggle("open");
  toggleBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
  document.querySelector("html").style.overflowY = "hidden";
});

closeBtn.addEventListener("click", function (e) {
  navBar.classList.toggle("open");
  overlay.classList.toggle("open");
  toggleBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
  document.querySelector("html").style.overflowY = "auto";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );

  const isValidEmail = emailRegex.test(input.value);
  console.log(isValidEmail);
  if (!isValidEmail) {
    errorMessage.classList.remove("hidden");
    input.classList.add("error-input");
    setTimeout(() => {
      errorMessage.classList.add("hidden");
      input.classList.remove("error-input");
    }, 3000);
  }
});
