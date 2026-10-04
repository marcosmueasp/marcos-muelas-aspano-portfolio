// Portfolio JS - vanilla, sin dependencias
// Tema claro/oscuro + menú móvil + copiar email + año + idioma
(function () {
  const root = document.documentElement;

  // Salto directo a la sección si la URL trae hash (p. ej. al cambiar de
  // idioma): evita la animación del scroll suave en la carga inicial.
  // Se restaura después para que la navegación interna siga siendo suave.
  if (location.hash) {
    root.style.scrollBehavior = 'auto';
    window.addEventListener('load', function () {
      setTimeout(function () { root.style.removeProperty('scroll-behavior'); }, 50);
    });
  }

  // --- Estado inicial (antes de pintar para evitar flash) ---
  // El script inline del <head> ya pone .dark, aquí sincronizamos botones.

  function getTheme() {
    return root.classList.contains('dark') ? 'dark' : 'light';
  }

  function setTheme(mode) {
    if (mode === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    try { localStorage.setItem('theme', mode); } catch (e) {}
    const isEn = document.documentElement.lang === 'en';
    document.querySelectorAll('[data-theme-label]').forEach(function (el) {
      if (mode === 'dark') el.textContent = isEn ? 'Dark' : 'Oscuro';
      else el.textContent = isEn ? 'Light' : 'Claro';
    });
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', mode === 'dark' ? 'true' : 'false');
    });
  }

  // --- Listeners ---
  document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setTheme(getTheme() === 'dark' ? 'light' : 'dark');
    });
  });

  // Sincronizar UI al cargar
  setTheme(getTheme());

  // Cambiar de idioma conservando la sección visible (ES <-> EN)
  var ES_TO_EN = {
    'como-trabajo': 'how-i-work',
    'experiencia': 'experience',
    'proyectos': 'projects',
    'tech': 'tech',
    'formacion': 'education',
    'contacto': 'contact',
    'top': 'top'
  };
  var EN_TO_ES = {};
  Object.keys(ES_TO_EN).forEach(function (k) { EN_TO_ES[ES_TO_EN[k]] = k; });
  document.querySelectorAll('[data-lang-link]').forEach(function (link) {
    link.addEventListener('click', function (ev) {
      var current = (location.hash || '#top').replace('#', '') || 'top';
      var toEn = link.getAttribute('data-lang-link') === 'en';
      var target = (toEn ? ES_TO_EN : EN_TO_ES)[current] || 'top';
      ev.preventDefault();
      var base = link.getAttribute('href').split('#')[0];
      location.href = base + '#' + target;
    });
  });

  // Botón enviar correo: monta usuario@dominio al pulsar
  // (el email nunca aparece en claro en el HTML)
  document.querySelectorAll('[data-email-user]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var user = btn.getAttribute('data-email-user') || '';
      var domain = btn.getAttribute('data-email-domain') || '';
      var subject = btn.getAttribute('data-email-subject') || '';
      if (!user || !domain) return;
      var href = 'mailto:' + user + '@' + domain;
      if (subject) href += '?subject=' + encodeURIComponent(subject);
      location.href = href;
    });
  });

  // Menú móvil
  const menuBtn = document.querySelector('[data-menu-btn]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      const open = mobileMenu.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Año footer
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
