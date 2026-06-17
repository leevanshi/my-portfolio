// Injected into every screen HTML. Handles theme sync + link interception.
(function () {
  function applyTheme(mode) {
    const html = document.documentElement;
    html.classList.remove('app-dark', 'app-light', 'dark');
    if (mode === 'light') {
      html.classList.add('app-light');
    } else {
      html.classList.add('app-dark', 'dark');
    }
  }

  // Initial: read from localStorage (shared with parent via same-origin)
  try {
    const saved = localStorage.getItem('pp-theme') || 'dark';
    applyTheme(saved);
  } catch (e) {
    applyTheme('dark');
  }

  // Listen for parent theme changes
  window.addEventListener('message', function (e) {
    if (e.data && e.data.type === 'pp-theme') {
      applyTheme(e.data.mode);
    }
  });

  // Map screen filenames to app routes for in-iframe nav
  const routeMap = {
    'landing.html': '/',
    'dashboard.html': '/dashboard',
    'builder.html': '/builder',
    'resume.html': '/resume',
    'analytics.html': '/analytics',
    'themes.html': '/themes',
    'signup.html': '/signup',
  };

  function routeForText(text) {
    if (!text) return null;
    const t = text.toLowerCase().trim();
    if (!t) return null;
    for (const key in routeMap) {
      if (t.includes(key)) return routeMap[key];
    }
    // Strong keyword matches first
    if (/\b(sign[\s-]?up|create[\s-]?account|register|join[\s-]?now)\b/.test(t)) return '/signup';
    if (/\b(log[\s-]?in|sign[\s-]?in)\b/.test(t)) return '/signup';
    if (/\b(dashboard|home|overview|my[\s-]?portfolios?)\b/.test(t)) return '/dashboard';
    if (/\b(builder|build|edit|customize|design|new[\s-]?portfolio)\b/.test(t)) return '/builder';
    if (/\b(resume|ats|cv)\b/.test(t)) return '/resume';
    if (/\b(analytic|insight|stats?|metric)\b/.test(t)) return '/analytics';
    if (/\b(theme|template|marketplace|store|upgrade|pricing|plan)\b/.test(t)) return '/themes';
    // Generic CTAs
    if (/\b(get[\s-]?started|try[\s-]?(it|now|free)|start[\s-]?(free|now)|start[\s-]?building)\b/.test(t)) return '/signup';
    if (/\b(continue|next|publish|save|launch|deploy|preview|view[\s-]?portfolio)\b/.test(t)) return '/dashboard';
    return null;
  }

  document.addEventListener('click', function (e) {
    const el = e.target.closest && e.target.closest('a, button, [role="button"], [role="link"], [role="tab"], [data-href]');
    if (!el) return;

    let target = null;
    if (el.tagName === 'A') {
      const href = el.getAttribute('href') || '';
      // External links: let them through
      if (/^(https?:|mailto:|tel:)/i.test(href)) return;
      target = routeForText(href) || routeForText(el.textContent || '') || routeForText(el.getAttribute('aria-label') || '');
    } else {
      target = routeForText(el.getAttribute('data-href') || '') ||
               routeForText(el.textContent || '') ||
               routeForText(el.getAttribute('aria-label') || '');
    }

    if (target) {
      e.preventDefault();
      e.stopPropagation();
      window.parent.postMessage({ type: 'pp-navigate', to: target }, '*');
    }
  }, true);

  // Forms: prevent reload, route signup/login to dashboard
  document.addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.target;
    if (/signup|signin|login/i.test(location.pathname) ||
        (form.querySelector && form.querySelector('input[type="email"], input[type="password"]'))) {
      window.parent.postMessage({ type: 'pp-navigate', to: '/dashboard' }, '*');
    }
  }, true);
})();
