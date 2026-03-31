(function registerMarqueeSetup() {
  window.setupMarquee = (root) => {
    if (!root) {
      return;
    }

    const track = root.querySelector("[data-marquee-track]");

    if (!track || track.children.length === 0) {
      return;
    }

    const originals = Array.from(track.children).map((item) =>
      item.cloneNode(true),
    );
    let frameId = 0;
    let offset = 0;
    let singleWidth = 0;
    let paused = false;
    let dragActive = false;
    let lastPointerX = 0;
    const velocity = -0.55;
    let impulse = 0;

    const rebuild = () => {
      track.innerHTML = "";
      originals.forEach((item) => track.appendChild(item.cloneNode(true)));
      originals.forEach((item) => track.appendChild(item.cloneNode(true)));
      singleWidth = track.scrollWidth / 2;
    };

    const tick = () => {
      if (!dragActive && !paused) {
        offset += velocity + impulse;
      }

      impulse *= 0.94;

      if (singleWidth > 0) {
        if (offset <= -singleWidth) {
          offset += singleWidth;
        } else if (offset > 0) {
          offset -= singleWidth;
        }
      }

      track.style.transform = `translate3d(${offset}px, 0, 0)`;
      frameId = window.requestAnimationFrame(tick);
    };

    rebuild();
    tick();

    root.addEventListener("mouseenter", () => {
      paused = true;
    });

    root.addEventListener("mouseleave", () => {
      paused = false;
    });

    root.addEventListener(
      "wheel",
      (event) => {
        event.preventDefault();
        impulse += event.deltaY * -0.015;
      },
      { passive: false },
    );

    root.addEventListener("pointerdown", (event) => {
      dragActive = true;
      paused = true;
      lastPointerX = event.clientX;
      root.setPointerCapture(event.pointerId);
    });

    root.addEventListener("pointermove", (event) => {
      if (!dragActive) {
        return;
      }

      const delta = event.clientX - lastPointerX;
      lastPointerX = event.clientX;
      offset += delta;
    });

    const stopDrag = (event) => {
      if (!dragActive) {
        return;
      }

      dragActive = false;
      paused = false;
      root.releasePointerCapture(event.pointerId);
    };

    root.addEventListener("pointerup", stopDrag);
    root.addEventListener("pointercancel", stopDrag);

    const observer = new ResizeObserver(() => {
      const previousWidth = singleWidth;
      rebuild();

      if (previousWidth > 0 && singleWidth > 0) {
        offset = (offset / previousWidth) * singleWidth;
      }
    });

    observer.observe(root);

    window.addEventListener("beforeunload", () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    });
  };
})();
