 const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightbox.classList.add("active");
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.classList.remove("active");
  lightboxImage.src = "";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
    lightboxImage.src = "";
  }
});

(function () {
    const galleryData = [
      // { job: 1, total: 27 },
      { job: 2, total: 8 },
      { job: 3, total: 9 },
      { job: 4, total: 20 },
      { job: 5, total: 68 },
    ];

    const basePath = "./assets/img/autojob/ShinedUpAuto";
    const autoGallery = document.getElementById("autoGallery");
    const lightbox = document.getElementById("imageLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxClose = document.getElementById("lightboxClose");

    function getImagePath(job, imageNumber) {
      return `${basePath}/job${job}/image${imageNumber}.jpg`;
    }

    function generateGallery() {
      let html = "";
      let imageCounter = 0;

      galleryData.forEach(function (gallery) {
        let imagesHTML = "";

        for (let i = 1; i <= gallery.total; i++) {
          imageCounter++;

          const imagePath = getImagePath(gallery.job, i);
          const loadNow = imageCounter <= 12;

          imagesHTML += `
            <div class="gallery-item">
              <img
                src="${imagePath}"
                data-full="${imagePath}"
                alt="Auto Detailing Job ${gallery.job}"
                loading="${loadNow ? "eager" : "lazy"}"
                decoding="async"
                ${loadNow ? 'fetchpriority="high"' : ""}
              />
            </div>
          `;
        }

        html += `
          <section class="gallery-section">
            <div class="g-container">
              <h2 class="gallery-title">Auto Detailing Job ${gallery.job}</h2>
              <div class="gallery-grid">
                ${imagesHTML}
              </div>
            </div>
          </section>
        `;
      });

      autoGallery.innerHTML = html;
    }

    function setupLightbox() {
      autoGallery.addEventListener("click", function (event) {
        const clickedImage = event.target.closest(".gallery-item img");

        if (!clickedImage) return;

        const fullImage = clickedImage.getAttribute("data-full");

        lightboxImage.src = fullImage;
        lightbox.classList.add("active");
      });

      function closeLightbox() {
        lightbox.classList.remove("active");
        lightboxImage.src = "";
      }

      lightboxClose.addEventListener("click", closeLightbox);

      lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
          closeLightbox();
        }
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closeLightbox();
        }
      });
    }

    function initGallery() {
      generateGallery();
      setupLightbox();
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initGallery);
    } else {
      initGallery();
    }
  })();