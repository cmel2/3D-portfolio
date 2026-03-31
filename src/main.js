(function initPortfolioApp() {
  const portfolioData = window.PortfolioData;
  const portfolioRenderer = window.PortfolioRenderer;

  if (!portfolioData || !portfolioRenderer) {
    return;
  }

  const statsRoot = document.querySelector("#hero-stats");
  const posterTrack = document.querySelector("#poster-track");
  const aboutFocus = document.querySelector("#about-focus");
  const portfolioSections = document.querySelector("#portfolio-sections");
  const footerTools = document.querySelector("#footer-tools");

  portfolioRenderer.renderHeroStats(statsRoot, portfolioData.siteMeta.stats);
  portfolioRenderer.renderFocusAreas(
    aboutFocus,
    portfolioData.siteMeta.focusAreas,
  );
  portfolioRenderer.renderPosterRail(posterTrack, portfolioData.projectYears);
  portfolioRenderer.renderYearSections(
    portfolioSections,
    portfolioData.projectYears,
  );
  portfolioRenderer.renderToolset(footerTools, portfolioData.projectYears);

  window.setupMarquee(document.querySelector("[data-marquee]"));
  window.setupRevealOnScroll(document.querySelectorAll("[data-reveal]"));
})();
