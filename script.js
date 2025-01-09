// Charger l'animation Lottie
const lottiePlayer = document.createElement("lottie-player");
lottiePlayer.setAttribute("src", "https://lottie.host/360519d5-c3d7-413a-9fa4-0efa60f08c5b/76me0w5FBh.lottie");
lottiePlayer.setAttribute("background", "transparent");
lottiePlayer.setAttribute("speed", "1");
lottiePlayer.setAttribute("loop", "");
lottiePlayer.setAttribute("autoplay", "");
document.getElementById("lottie-player").appendChild(lottiePlayer);

// Redirection après 15 secondes
setTimeout(() => {
    window.location.href = "main.html"; // Remplacez par l'URL de votre page principale
}, 15000);

// Change la transparence de la navbar lors du scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active le menu hamburger
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});



const wrapper = document.getElementById('wrapperElement');
let currentIndex = 0;
const margin = 8;
const length = wrapper.querySelectorAll('.content').length;
const transitionDuration = 300;
let isInTransition = false;
let transitionStart = 0;

const scrollWrapper = (e) => {
  if (e.deltaY > 0) {
    currentIndex = Math.min(currentIndex + 1, length - 1);
  } else if (e.deltaY < 0) {
    currentIndex = Math.max(currentIndex - 1, 0);
  }
  wrapper.setAttribute('style', `transform: translateX(${-currentIndex * 100}%)`);
};

const onWheel = (e) => {
  if (!isInTransition) {
    scrollWrapper(e);
    isInTransition = true;
    transitionStart = Date.now();
  } else {
    if (Date.now() > transitionStart + transitionDuration) {
      isInTransition = false;
      onWheel(e);
    }
  }
};

window.addEventListener('wheel', _.throttle(onWheel, 50));