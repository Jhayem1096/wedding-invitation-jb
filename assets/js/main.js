// Initialize AOS
AOS.init({ duration: 1000, once: true });

// Countdown Timer 
const countdownDate = new Date("January 10, 2026 14:30:00").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `<span class="time">${days}<hr><span class="timedesc">DAYS</span></span> <span class="time">${hours}<hr><span class="timedesc">HOURS</span></span> <span class="time">${minutes}<hr><span class="timedesc">MINUTES</span></span> <span class="time">${seconds}<hr><span class="timedesc">SECONDS</span></span>`;

  if (distance < 0) timer.innerHTML = "It's our wedding day!";
}, 1000);

// Header Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 2000);


const swiper = new Swiper('.story-gallery', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const goTopBtn = document.getElementById("goTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
};

goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

