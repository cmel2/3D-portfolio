(function initPortfolioApp() {
  const portfolioData = window.PortfolioData;
  const portfolioRenderer = window.PortfolioRenderer;

  if (!portfolioData || !portfolioRenderer) {
    return;
  }

  const aboutFocus = document.querySelector("#about-focus");
  const portfolioSections = document.querySelector("#portfolio-sections");
  const softwareGrid = document.querySelector("#software-grid");
  const footerTools = document.querySelector("#footer-tools");

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

  window.setupMediaExperience();
  window.setupRevealOnScroll(document.querySelectorAll("[data-reveal]"));
})();
