(function registerPortfolioRenderer() {
  const renderChip = (label) => `<span class="chip">${label}</span>`;

  const assetUrl = (path) => encodeURI(path);

  const renderMediaTrigger = (config) => {
    const className = ["media-trigger", config.className || ""]
      .filter(Boolean)
      .join(" ");

    return `
    <button
      class="${className}"
      type="button"
      data-media-trigger
      data-media-type="${config.type}"
      data-media-src="${assetUrl(config.src)}"
      data-media-alt="${config.alt}"
      data-media-title="${config.title}"
      aria-label="${config.buttonLabel}"
    >
      ${config.content}
      <span class="media-trigger__hint">${config.hint}</span>
    </button>
  `;
  };

  const renderMedia = (media, title) => {
    if (media.type === "image") {
      return renderMediaTrigger({
        type: "image",
        src: media.src,
        alt: media.alt || title,
        title,
        buttonLabel: `${title} größer anzeigen`,
        hint: "Bild öffnen",
        content: `
          <img
            src="${assetUrl(media.src)}"
            alt="${media.alt || title}"
            loading="lazy"
          >
        `,
      });
    }

    if (media.type === "video") {
      return renderMediaTrigger({
        type: "video",
        src: media.src,
        alt: media.alt || title,
        title,
        className: "media-trigger--video",
        buttonLabel: `${title} als Video öffnen`,
        hint: "Video öffnen",
        content: `
          <video
            src="${assetUrl(media.src)}"
            autoplay
            muted
            loop
            playsinline
            preload="metadata"
            aria-label="${media.alt || title}"
          ></video>
        `,
      });
    }

    if (media.type === "gallery") {
      return `
        <div class="gallery" data-gallery>
          <div class="gallery__viewport">
            ${media.items
              .map((item, index) =>
                renderMediaTrigger({
                  type: item.type,
                  src: item.src,
                  alt: item.alt || title,
                  title,
                  className: `gallery__slide${index === 0 ? " is-active" : ""}`,
                  buttonLabel: `${title} Bild ${index + 1} größer anzeigen`,
                  hint: "Bild öffnen",
                  content: `
                    <img
                      src="${assetUrl(item.src)}"
                      alt="${item.alt || title}"
                      loading="${index === 0 ? "eager" : "lazy"}"
                    >
                  `,
                }),
              )
              .join("")}
          </div>

          <div class="gallery__footer">
            <div class="gallery__dots">
              ${media.items
                .map(
                  (_, index) => `
                    <button
                      class="gallery__dot${index === 0 ? " is-active" : ""}"
                      type="button"
                      data-gallery-dot
                      data-gallery-index="${index}"
                      aria-label="Zu Bild ${index + 1} wechseln"
                    ></button>
                  `,
                )
                .join("")}
            </div>
            <div class="gallery__nav">
              <button
                class="gallery__button"
                type="button"
                data-gallery-prev
                aria-label="Vorheriges Bild"
              >
                ‹
              </button>
              <button
                class="gallery__button"
                type="button"
                data-gallery-next
                aria-label="Nächstes Bild"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      `;
    }

    if (media.type === "model") {
      return `
        <div
          class="obj-viewer"
          data-obj-viewer
          data-obj-key="${media.modelKey}"
          data-obj-src="${assetUrl(media.src)}"
        >
          <div class="obj-viewer__canvas" role="img" aria-label="${media.alt || title}"></div>
          <div class="obj-viewer__hud">
            <strong>OBJ Viewer</strong>
            <span>Ziehen zum Drehen · Scrollen zum Zoomen</span>
          </div>
          <a class="obj-viewer__download" href="${assetUrl(media.src)}" download>
            OBJ herunterladen
          </a>
        </div>
      `;
    }

    return `
      <div class="download-card">
        <p class="download-card__label">Datei</p>
        <strong>${title}</strong>
        <p>Technische Ergänzung zum Projekt als direkt nutzbare OBJ-Datei.</p>
        <a class="button button--primary" href="${assetUrl(media.src)}" download>
          ${media.actionLabel || "Datei herunterladen"}
        </a>
      </div>
    `;
  };

  const renderWorkCard = (work, year) => {
    const featuredClass = work.featured ? " work-card--featured" : "";

    return `
      <article class="work-card${featuredClass}" id="${work.id}" data-reveal>
        <div class="work-card__media">
          ${renderMedia(work.media, work.title)}
        </div>
        <div class="work-card__body">
          <p class="work-card__kicker">${year.label} · ${work.category}</p>
          <h3>${work.title}</h3>
          <p>${work.description}</p>
          <div class="tag-list">
            ${work.tags.map(renderChip).join("")}
          </div>
        </div>
      </article>
    `;
  };

  const renderFocusAreas = (root, focusAreas) => {
    if (!root) {
      return;
    }

    root.innerHTML = focusAreas.map(renderChip).join("");
  };

  const renderSoftware = (root, software) => {
    if (!root) {
      return;
    }

    root.innerHTML = software
      .map(
        (item) => `
          <article
            class="software-card panel"
            data-reveal
            style="--software-accent: ${item.accent};"
          >
            <div class="software-card__logo">
              ${
                item.logo.type === "image"
                  ? `<img src="${item.logo.src}" alt="${item.name} Logo" loading="lazy">`
                  : `<span>${item.logo.text}</span>`
              }
            </div>
            <div class="software-card__body">
              <p class="panel__eyebrow">${item.vendor}</p>
              <h3>${item.name}</h3>
              <p>${item.description}</p>
            </div>
          </article>
        `,
      )
      .join("");
  };

  const renderYearSections = (root, years) => {
    if (!root) {
      return;
    }

    root.innerHTML = years
      .map(
        (year) => `
          <section class="year-section" id="${year.id}">
            <div class="year-section__intro panel" data-reveal>
              <p class="year-section__number">${year.yearNumber}</p>
              <div>
                <p class="panel__eyebrow">${year.label}</p>
                <h3>${year.title}</h3>
                <p>${year.summary}</p>
                <div class="chip-cloud">
                  ${year.skills.map(renderChip).join("")}
                </div>
              </div>
            </div>

            <div class="work-grid">
              ${year.works.map((work) => renderWorkCard(work, year)).join("")}
            </div>
          </section>
        `,
      )
      .join("");
  };

  const renderToolset = (root, years) => {
    if (!root) {
      return;
    }

    const tools = [
      ...new Set(
        years.flatMap((year) => year.works.flatMap((work) => work.tags)),
      ),
    ].sort((left, right) => left.localeCompare(right, "de"));

    root.innerHTML = tools.map(renderChip).join("");
  };

  window.PortfolioRenderer = {
    renderFocusAreas,
    renderSoftware,
    renderToolset,
    renderYearSections,
  };
})();
