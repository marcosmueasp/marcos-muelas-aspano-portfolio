// Portfolio JS - vanilla, sin dependencias (~60 líneas)
// Tema claro/oscuro + CRT + menú móvil + copiar email + año
(function () {
  const root = document.documentElement;

  // --- Estado inicial (antes de pintar para evitar flash) ---
  // El script inline del <head> ya pone .dark / .crt-on, aquí sincronizamos botones.

  function getTheme() {
    return root.classList.contains('dark') ? 'dark' : 'light';
  }

  function setTheme(mode) {
    if (mode === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    try { localStorage.setItem('theme', mode); } catch (e) {}
    document.querySelectorAll('[data-theme-label]').forEach(function (el) {
      el.textContent = mode === 'dark' ? '☾ osc' : '☀ cla';
    });
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', mode === 'dark' ? 'true' : 'false');
    });
  }

  function setCrt(on) {
    if (on) root.classList.add('crt-on');
    else root.classList.remove('crt-on');
    try { localStorage.setItem('crt', on ? 'on' : 'off'); } catch (e) {}
    document.querySelectorAll('[data-crt-toggle]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      const label = btn.querySelector('[data-crt-label]');
      if (label) label.textContent = on ? 'CRT:ON' : 'CRT:OFF';
    });
  }

  // --- Listeners ---
  document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setTheme(getTheme() === 'dark' ? 'light' : 'dark');
    });
  });

  document.querySelectorAll('[data-crt-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setCrt(!root.classList.contains('crt-on'));
    });
  });

  // Sincronizar UI al cargar
  setTheme(getTheme());
  setCrt(root.classList.contains('crt-on'));

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

  // Copiar email
  document.querySelectorAll('[data-copy-email]').forEach(function (btn) {
    btn.addEventListener('click', async function () {
      const email = btn.getAttribute('data-copy-email') || '';
      const msg = btn.parentElement ? btn.parentElement.querySelector('[data-copy-msg]') : null;
      try {
        await navigator.clipboard.writeText(email);
        if (msg) {
          msg.textContent = btn.dataset.okText || '¡copiado!';
          setTimeout(function () { msg.textContent = ''; }, 2000);
        }
      } catch (e) {
        // fallback: seleccionar texto
        const ta = document.createElement('textarea');
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (err) {}
        document.body.removeChild(ta);
      }
    });
  });

  // Año footer
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
