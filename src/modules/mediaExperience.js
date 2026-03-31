(function registerMediaExperience() {
  const getSlides = (gallery) =>
    Array.from(gallery.querySelectorAll("[data-media-trigger].gallery__slide"));

  const getDots = (gallery) =>
    Array.from(gallery.querySelectorAll("[data-gallery-dot]"));

  const setGalleryIndex = (gallery, index) => {
    const slides = getSlides(gallery);
    const dots = getDots(gallery);

    if (slides.length === 0) {
      return;
    }

    const safeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === safeIndex);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === safeIndex);
    });
  };

  const shiftGallery = (gallery, direction) => {
    const slides = getSlides(gallery);
    const activeIndex = slides.findIndex((slide) =>
      slide.classList.contains("is-active"),
    );

    setGalleryIndex(gallery, activeIndex + direction);
  };

  const buildModalMarkup = (trigger) => {
    const type = trigger.dataset.mediaType;
    const src = trigger.dataset.mediaSrc;
    const alt = trigger.dataset.mediaAlt || "";
    const title = trigger.dataset.mediaTitle || "";

    const media =
      type === "video"
        ? `
          <video
            src="${src}"
            controls
            autoplay
            loop
            playsinline
          ></video>
        `
        : `<img src="${src}" alt="${alt}">`;

    return `
      ${media}
      <p class="media-modal__caption" id="media-modal-title">${title}</p>
    `;
  };

  window.setupMediaExperience = () => {
    const modal = document.querySelector("#media-modal");
    const content = document.querySelector("#media-modal-content");

    if (!modal || !content) {
      return;
    }

    const openModal = (trigger) => {
      content.innerHTML = buildModalMarkup(trigger);
      modal.hidden = false;
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("has-modal");
    };

    const closeModal = () => {
      if (modal.hidden) {
        return;
      }

      modal.hidden = true;
      modal.setAttribute("aria-hidden", "true");
      content.innerHTML = "";
      document.body.classList.remove("has-modal");
    };

    document.addEventListener("click", (event) => {
      const previousButton = event.target.closest("[data-gallery-prev]");
      if (previousButton) {
        shiftGallery(previousButton.closest("[data-gallery]"), -1);
        return;
      }

      const nextButton = event.target.closest("[data-gallery-next]");
      if (nextButton) {
        shiftGallery(nextButton.closest("[data-gallery]"), 1);
        return;
      }

      const dotButton = event.target.closest("[data-gallery-dot]");
      if (dotButton) {
        setGalleryIndex(
          dotButton.closest("[data-gallery]"),
          Number(dotButton.dataset.galleryIndex),
        );
        return;
      }

      const closeTrigger = event.target.closest("[data-media-close]");
      if (closeTrigger) {
        closeModal();
        return;
      }

      const mediaTrigger = event.target.closest("[data-media-trigger]");
      if (mediaTrigger) {
        openModal(mediaTrigger);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    });
  };
})();
