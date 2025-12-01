// Lógica de login: valida credenciales y crea la sesión compartida
(function () {
  const { loadUsers, buildFullName, setCurrentUser, getCurrentUser, safeStorage } = window.Auth || {};
  const BRANDING_STORAGE_KEY = 'metroredBranding';

  function loadBrandingAssets() {
    try {
      const raw = safeStorage?.get(BRANDING_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      return parsed || {};
    } catch (e) {
      return {};
    }
  }

  function applyLoginBranding() {
    const assets = loadBrandingAssets();
    const logoImg = document.getElementById('loginBrandLogo');
    const logoMark = document.querySelector('.logo-mark');
    const faviconBadge = document.getElementById('loginFaviconBadge');
    if (logoImg && assets.logoData) {
      logoImg.src = assets.logoData;
      logoImg.classList.remove('hidden');
      logoMark?.classList.add('hidden');
    } else {
      logoImg?.classList.add('hidden');
      logoMark?.classList.remove('hidden');
    }

    if (faviconBadge) {
      if (assets.faviconData) {
        faviconBadge.style.backgroundImage = `url(${assets.faviconData})`;
        faviconBadge.classList.remove('hidden');
      } else {
        faviconBadge.classList.add('hidden');
        faviconBadge.style.backgroundImage = '';
      }
    }
  }

  /**
   * Intenta autenticar contra el directorio de usuarios compartido.
   * Guarda currentUser sin contraseña y redirige al shell si es válido.
   */
  function initLogin() {
    const loginBtn = document.getElementById('loginBtn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const statusEl = document.getElementById('loginStatus');

    const attemptLogin = () => {
      const users = loadUsers ? loadUsers() : [];
      const username = usernameInput.value.trim();
      const password = passwordInput.value;
      if (!username || !password) {
        statusEl.textContent = 'Ingresa usuario y contraseña';
        statusEl.classList.add('error-text');
        return;
      }
      const user = users.find(
        (u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password
      );
      if (!user) {
        statusEl.textContent = 'Credenciales inválidas';
        statusEl.classList.add('error-text');
        return;
      }
      const fullName = buildFullName ? buildFullName(user) : `${user.prefix} ${user.firstName} ${user.lastName}`.trim();
      setCurrentUser({ username: user.username, fullName, role: user.role });
      statusEl.textContent = 'Sesión iniciada';
      statusEl.classList.remove('error-text');
      window.location.href = 'index.html';
    };

    loginBtn.onclick = attemptLogin;
    passwordInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') attemptLogin();
    });
  }

  (function bootstrapLogin() {
    const existing = getCurrentUser ? getCurrentUser() : null;
    if (existing) {
      window.location.href = 'index.html';
      return;
    }
    document.addEventListener('DOMContentLoaded', () => {
      applyLoginBranding();
      initLogin();
    });
  })();
})();
