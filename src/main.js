(function initPortfolioApp() {
  const portfolioData = window.PortfolioData;
  const portfolioRenderer = window.PortfolioRenderer;

  if (!portfolioData || !portfolioRenderer) {
    return;
  }

  const heroRoot = document.querySelector("#hero-scene");
  const aboutFocus = document.querySelector("#about-focus");
  const portfolioSections = document.querySelector("#portfolio-sections");
  const softwareGrid = document.querySelector("#software-grid");
  const footerTools = document.querySelector("#footer-tools");

  window.renderHeroScene(heroRoot, {
    lines: ["3D Portfolio", "2023-2026", "Mohamed El Shal"],
  });

  portfolioRenderer.renderFocusAreas(
    aboutFocus,
    portfolioData.siteMeta.focusAreas,
  );
  portfolioRenderer.renderYearSections(
    portfolioSections,
    portfolioData.projectYears,
  );
  portfolioRenderer.renderSoftware(
    softwareGrid,
    portfolioData.siteMeta.software,
  );
  portfolioRenderer.renderToolset(footerTools, portfolioData.projectYears);

  window.setupHeroTilt(heroRoot);
  window.setupObjectViewers();
  window.setupMediaExperience();
  window.setupRevealOnScroll(document.querySelectorAll("[data-reveal]"));
})();
