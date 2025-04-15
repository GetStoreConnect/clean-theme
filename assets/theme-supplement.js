document.addEventListener('DOMContentLoaded', function () {
  // Sticky header
  const headerEl = document.querySelector('[data-header]');
  const headerHeight = headerEl.getBoundingClientRect().height;
  const headerHeightCalc = headerHeight / 2;
  const navEl = document.querySelector('[data-header-inner]');

  const stickyNav = (entries) => {
    entries.forEach(entry => {
      const target = entry.target;
      if(!entry.isIntersecting) {
        navEl.classList.add('sticky');
      } else {
        navEl.classList.remove('sticky');
      }
    });
  };

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0.5,
    rootMargin: `${headerHeightCalc}px`,
  });

  headerObserver.observe(headerEl);
});
