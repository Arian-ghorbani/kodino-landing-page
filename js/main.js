// Menu Burger
const menuBurgerBtn = document.querySelector("#menu-burger-btn");
const linksOfMobileMenu = document.querySelectorAll("#mobile-menu .side-nav-link");

// Open & Close Menu Burger
const toggleMobileMenu = () => {
  const mobileMenu = document.querySelector("#mobile-menu");
  const menuIcons = {
    "open": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 25 25" fill="none">
              <path d="M2 12.32H22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 18.32H22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 6.32001H22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,

    "close": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 25 25" fill="none">
                <path d="M3 21.32L21 3.32001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 3.32001L21 21.32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
  };

  if (mobileMenu.className.includes("close")) {

    mobileMenu.className = "open";

    menuBurgerBtn.innerHTML = menuIcons.close;

  } else if (mobileMenu.className.includes("open")) {

    mobileMenu.className = "close";

    menuBurgerBtn.innerHTML = menuIcons.open;
  }

  menuBurgerBtn.firstChild.classList.add("menu-icon");
};

linksOfMobileMenu.forEach((link) => {
  link.addEventListener("click", toggleMobileMenu);
});

// Portfolio Slider
const portfolioSwiper = new Swiper(".portfolio-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  loop: true,

  grabCursor: true,

  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },

  slidesPerView: 1,

  spaceBetween: 30,

  centeredSlides: true,

  centerInsufficientSlides: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    480: {
      slidesPerView: 2,
      centeredSlides: false,
      centerInsufficientSlides: false
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 35,
      centeredSlides: false,
      centerInsufficientSlides: false
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 35,
      centeredSlides: false,
      centerInsufficientSlides: false
    }
  }
});

// Comments Slider
const CommentsSwiper = new Swiper(".comment-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  loop: true,

  grabCursor: true,

  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },

  slidesPerView: 1,

  spaceBetween: 30,

  centeredSlides: true,

  centerInsufficientSlides: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 35,
      centeredSlides: false,
      centerInsufficientSlides: false
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 35,
      centeredSlides: false,
      centerInsufficientSlides: false
    }
  }
});

menuBurgerBtn.addEventListener("click", toggleMobileMenu);