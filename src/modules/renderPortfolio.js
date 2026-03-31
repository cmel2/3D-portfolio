(function registerPortfolioRenderer() {
  const renderChip = (label) => `<span class="chip">${label}</span>`;

  const assetUrl = (path) => encodeURI(path);

  const renderMedia = (media, title) => {
    if (media.type === "image") {
      return `
        <img
          src="${assetUrl(media.src)}"
          alt="${media.alt || title}"
          loading="lazy"
        >
      `;
    }

    if (media.type === "video") {
      return `
        <video
          src="${assetUrl(media.src)}"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
          controls
          aria-label="${media.alt || title}"
        ></video>
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

  const renderPosterCard = (work, year) => {
    const posterClass =
      work.media.type === "image"
        ? "poster-card"
        : "poster-card poster-card--text";

    const posterVisual =
      work.media.type === "image"
        ? `
          <div class="poster-card__media">
            <img src="${assetUrl(work.media.src)}" alt="${work.media.alt || work.title}" loading="lazy">
          </div>
        `
        : `
          <div class="poster-card__placeholder">
            <span class="poster-card__pill">${work.category}</span>
            <strong>${work.title}</strong>
            <p>${year.label}</p>
          </div>
        `;

    return `
      <a
        class="${posterClass}"
        href="#${work.id}"
        style="--poster-accent: ${year.accent};"
        aria-label="${work.title} in ${year.label} ansehen"
      >
        ${posterVisual}
        <div class="poster-card__body">
          <p class="poster-card__year">${year.label}</p>
          <h3>${work.title}</h3>
          <p>${work.category}</p>
        </div>
      </a>
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

  const renderHeroStats = (root, stats) => {
    if (!root) {
      return;
    }

    root.innerHTML = stats
      .map(
        (stat) => `
          <article class="stat-card">
            <span class="stat-card__value">${stat.value}</span>
            <span class="stat-card__label">${stat.label}</span>
          </article>
        `,
      )
      .join("");
  };

  const renderFocusAreas = (root, focusAreas) => {
    if (!root) {
      return;
    }

    root.innerHTML = focusAreas.map(renderChip).join("");
  };

  const renderPosterRail = (root, years) => {
    if (!root) {
      return;
    }

    const cards = years.flatMap((year) =>
      year.works
        .filter((work) => work.media.type !== "file")
        .map((work) => renderPosterCard(work, year)),
    );

    root.innerHTML = cards.join("");
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
    renderHeroStats,
    renderPosterRail,
    renderToolset,
    renderYearSections,
  };
})();
