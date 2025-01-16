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

var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),

    init: function () {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;

        // Show the cursor immediately
        this.$dot.style.opacity = 1;
        this.$outline.style.opacity = 1;

        this.setupEventListeners();
        this.animateDotOutline();
    },

    setupEventListeners: function () {
        var self = this;

        // Anchor hovering
        document.querySelectorAll('a').forEach(function (el) {
            el.addEventListener('mouseover', function () {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });

        // Click events
        document.addEventListener('mousedown', function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });

        // Mouse movement
        document.addEventListener('mousemove', function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            self.endX = e.pageX;
            self.endY = e.pageY;

            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });

        // Hide/show cursor
        document.addEventListener('mouseenter', function () {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
        });

        document.addEventListener('mouseleave', function () {
            self.cursorVisible = false;
            self.toggleCursorVisibility();
        });
    },

    animateDotOutline: function () {
        var self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;

        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';

        requestAnimationFrame(this.animateDotOutline.bind(self));
    },

    toggleCursorSize: function () {
        if (this.cursorEnlarged) {
            this.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            this.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            this.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            this.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },

    toggleCursorVisibility: function () {
        if (this.cursorVisible) {
            this.$dot.style.opacity = 1;
            this.$outline.style.opacity = 1;
        } else {
            this.$dot.style.opacity = 0;
            this.$outline.style.opacity = 0;
        }
    }
};

cursor.init();
