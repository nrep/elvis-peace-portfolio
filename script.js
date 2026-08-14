document.documentElement.classList.add('js');

const themeButtons = [...document.querySelectorAll('[data-theme]')];
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = window.localStorage.getItem('portfolio-theme');
let themePreference = ['light', 'dark'].includes(savedTheme) ? savedTheme : 'system';

const applyTheme = (systemDark = systemTheme.matches) => {
  const resolvedTheme = themePreference === 'system'
    ? (systemDark ? 'dark' : 'light')
    : themePreference;
  document.documentElement.setAttribute('data-theme', resolvedTheme);
  themeButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.theme === themePreference));
  });
};

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    themePreference = button.dataset.theme;
    window.localStorage.setItem('portfolio-theme', themePreference);
    applyTheme();
  });
});
systemTheme.addEventListener('change', (event) => {
  if (themePreference === 'system') applyTheme(event.matches);
});
applyTheme();

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((item) => observer.observe(item));
} else {
  reveals.forEach((item) => item.classList.add('is-visible'));
}

const tabs = [...document.querySelectorAll('[role="tab"]')];
const activateTab = (tab) => {
  tabs.forEach((item) => {
    const active = item === tab;
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
  });
};

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = tabs.length - 1;
    else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % tabs.length;
    else nextIndex = (index - 1 + tabs.length) % tabs.length;
    tabs[nextIndex].focus({ preventScroll: true });
    activateTab(tabs[nextIndex]);
  });
});
