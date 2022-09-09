let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

menu.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  spaceBetween: 20,
  autoHeight: true,
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

let loadMoreBtn = document.querySelector('.package .load-more .btn');
let currentItem = 3;
loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll('.package .box-container .box')];
  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = 'inline-block';
  };
  currentItem += 3;
  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none';
  }
};

const mediaQuery = window.matchMedia('(min-width: 862px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert

  let loadMoreBtn = document.querySelector('.package .load-more .btn');
  let currentItem = 2;
  loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.package .box-container .box')];
    for (var i = currentItem; i < currentItem + 2; i++) {
      boxes[i].style.display = 'inline-block';
    };
    currentItem += 2;
    if (currentItem >= boxes.length) {
      loadMoreBtn.style.display = 'none';
    }
  }

}