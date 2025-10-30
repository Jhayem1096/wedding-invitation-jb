// Initialize AOS
AOS.init({ duration: 1000, once: true });

//Always start on top every load
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Countdown Timer 
const countdownDate = new Date("January 10, 2026 00:00:00").getTime();
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
}, 3000);

//Our Story Slider

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

//Music and go to top
const goTopBtn = document.getElementById("goTopBtn");
const musicBtn1 = document.getElementById("musicToggle");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    goTopBtn.style.display = "block";
    musicBtn1.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
    musicBtn1.style.display = "none";
  }
};

goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
 

const audio = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");

musicBtn.addEventListener("click", () => {
  const icon = musicBtn.querySelector("i");
  if (audio.paused) {
    audio.play();
    icon.classList.remove("fa-volume-xmark");
    icon.classList.add("fa-volume-high");
  } else {
    audio.pause();
    icon.classList.remove("fa-volume-high");
    icon.classList.add("fa-volume-xmark");
  }
});

//opening of envelope

const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openInvitation");
const mainContent = document.getElementById("mainContent");

openBtn.addEventListener("click", () => {
  envelope.classList.add("open");
  setTimeout(() => {
    envelope.style.display = "none";
    mainContent.classList.add("show");
    document.body.style.overflow = "auto";
  }, 1200);
  audio.play();
});

//modal for invitation
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

closeBtn.onclick = function() {
  modal.style.display = 'none';
}

modal.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}