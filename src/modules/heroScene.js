(function registerHeroScene() {
  const renderLines = (lines) =>
    lines
      .map((line) => `<span class="hero-scene__line">${line}</span>`)
      .join("");

  window.renderHeroScene = (root, config = {}) => {
    if (!root) {
      return;
    }

    const lines = config.lines && config.lines.length > 0
      ? config.lines
      : ["3D Portfolio", "2023-2026", "Mohamed El Shal"];
    const lineMarkup = renderLines(lines);
    const depthLayers = Array.from({ length: 5 }, (_, index) => {
      const depth = index + 1;
      return `
        <div
          class="hero-scene__layer display-xl"
          aria-hidden="true"
          style="--depth:${depth};"
        >
          ${lineMarkup}
        </div>
      `;
    }).join("");

    root.innerHTML = `
      <div class="hero-scene">
        <div class="hero-scene__ambient-shadow" aria-hidden="true"></div>
        <div class="hero-scene__stage" data-hero-stage>
          <div class="hero-scene__plane" aria-hidden="true"></div>
          <div class="hero-scene__ground-shadow" aria-hidden="true"></div>
          <div class="hero-scene__float">
            <div class="hero-scene__title-stack">
              ${depthLayers}
              <div class="hero-scene__sheen display-xl" aria-hidden="true">
                ${lineMarkup}
              </div>
              <h1 class="hero-scene__title display-xl" aria-label="${lines.join(" ")}">
                ${lineMarkup}
              </h1>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  window.setupHeroTilt = (root) => {
    const stage = root && root.querySelector("[data-hero-stage]");
    if (!stage) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const defaultRotateX = -14;
    const defaultRotateY = 0;
    let currentX = defaultRotateX;
    let currentY = defaultRotateY;
    let targetX = defaultRotateX;
    let targetY = defaultRotateY;
    let frameId = 0;

    const apply = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      stage.style.setProperty("--hero-rotate-x", `${currentX.toFixed(3)}deg`);
      stage.style.setProperty("--hero-rotate-y", `${currentY.toFixed(3)}deg`);

      const stillMoving =
        Math.abs(targetX - currentX) > 0.02 ||
        Math.abs(targetY - currentY) > 0.02;

      if (stillMoving) {
        frameId = window.requestAnimationFrame(apply);
      } else {
        frameId = 0;
      }
    };

    const schedule = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(apply);
      }
    };

    const reset = () => {
      targetX = defaultRotateX;
      targetY = defaultRotateY;
      schedule();
    };

    if (mediaQuery.matches) {
      reset();
      return;
    }

    stage.addEventListener("pointermove", (event) => {
      const rect = stage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      targetY = x * 8;
      targetX = defaultRotateX + y * -7;
      schedule();
    });

    stage.addEventListener("pointerleave", reset);
    stage.addEventListener("pointercancel", reset);

    reset();
  };
})();
