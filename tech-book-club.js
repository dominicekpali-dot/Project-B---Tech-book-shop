const navToggle = document.querySelector('.nav-toggle');
const clubNav = document.querySelector('.club-nav');

navToggle?.addEventListener('click', () => {
  const expanded = clubNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(expanded));
  navToggle.setAttribute('aria-label', expanded ? 'Close menu' : 'Open menu');
});

clubNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    clubNav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});
