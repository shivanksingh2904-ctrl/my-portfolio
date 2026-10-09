(() => {
  const menuToggle = document.querySelector('#menuToggle');
  const navLinks = document.querySelector('#navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation menu');
    }));
  }

  const revealItems = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }

  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach(section => sectionObserver.observe(section));
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  fetch('data/site-config.json')
    .then(response => response.ok ? response.json() : Promise.reject(new Error('Config unavailable')))
    .then(config => {
      if (config.email && !config.email.includes('YOUR_EMAIL')) {
        const emailLink = document.querySelector('[data-contact-email]');
        const emailLabel = document.querySelector('[data-email-label]');
        emailLink.href = `mailto:${config.email}`;
        emailLabel.textContent = config.email;
      }
      if (config.linkedin && config.linkedin.startsWith('https://')) {
        const linkedinLink = document.querySelector('[data-linkedin-link]');
        const linkedinLabel = document.querySelector('[data-linkedin-label]');
        linkedinLink.href = config.linkedin;
        linkedinLink.target = '_blank';
        linkedinLink.rel = 'noopener noreferrer';
        linkedinLabel.textContent = 'View LinkedIn profile';
      } else {
        const linkedinLink = document.querySelector('[data-linkedin-link]');
        linkedinLink.addEventListener('click', event => event.preventDefault());
        linkedinLink.setAttribute('aria-disabled', 'true');
        linkedinLink.style.opacity = '.7';
      }
    })
    .catch(() => {
      const linkedinLink = document.querySelector('[data-linkedin-link]');
      if (linkedinLink) linkedinLink.addEventListener('click', event => event.preventDefault());
    });
})();