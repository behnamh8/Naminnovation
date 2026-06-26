const header = document.getElementById('siteHeader');
const menuButton = document.querySelector('.menu-button');
const nav = document.getElementById('siteNav');
const processDetail = document.getElementById('processDetail');
const principleDetail = document.getElementById('principleDetail');

document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 24);
});

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal, .reveal-group').forEach(el => observer.observe(el));

function setupInteractiveButtons(selector, detailEl) {
  document.querySelectorAll(selector).forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll(selector).forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      detailEl.querySelector('h3').textContent = button.dataset.title;
      detailEl.querySelector('p').textContent = button.dataset.copy;
    });
  });
}
setupInteractiveButtons('.process-circle', processDetail);
setupInteractiveButtons('.principle-dot', principleDetail);
