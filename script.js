// Attendre que le DOM soit totalement chargé
document.addEventListener("DOMContentLoaded", function() {

  // Charger l'animation Lottie
  const lottieContainer = document.getElementById("lottie-player");
  if (lottieContainer) {
      const lottiePlayer = document.createElement("lottie-player");
      lottiePlayer.setAttribute("src", "https://lottie.host/360519d5-c3d7-413a-9fa4-0efa60f08c5b/76me0w5FBh.lottie");
      lottiePlayer.setAttribute("background", "transparent");
      lottiePlayer.setAttribute("speed", "1");
      lottiePlayer.setAttribute("loop", "");
      lottiePlayer.setAttribute("autoplay", "");
      lottieContainer.appendChild(lottiePlayer);
  }



  // Activation du menu hamburger
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  if (hamburger && menu) {
      hamburger.addEventListener('click', () => {
          menu.classList.toggle('active');
      });
  }

  // Gestion du modal pour agrandir une image
  const modal = document.getElementById("modal-image");
  const img = document.getElementById("image-cliquable");
  const modalImg = document.getElementById("image-agrandie");
  const fermer = document.querySelector(".fermer");

  if (img && modal && modalImg && fermer) {
      img.onclick = function() {
          modal.style.display = "block";
          modalImg.src = this.src;
      };

      fermer.onclick = function() {
          modal.style.display = "none";
      };
  }


  // Smooth scroll pour les liens d’ancrage
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });

});