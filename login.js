const USER_STORAGE_KEY = 'metroredUsers';
const USER_VERSION_KEY = 'metroredUsersVersion';
const CURRENT_USER_VERSION = 'v2';
const BRANDING_STORAGE_KEY = 'metroredBranding';
const DEFAULT_USERS = [
  { prefix: 'Sr.', firstName: 'Argenis', lastName: 'Navas', username: 'gnavas', password: 'Metrored2025', role: 'admin' },
  { prefix: 'Dra.', firstName: 'Maite', lastName: 'Vargas', username: 'mvargas', password: 'Metrored2025', role: 'auditor' },
  { prefix: 'Sra.', firstName: 'Nathalia', lastName: 'Navarrete', username: 'nnavarrete', password: 'Metrored2025', role: 'controller' },
];

function loadBrandingAssets() {
  try {
    const raw = localStorage.getItem(BRANDING_STORAGE_KEY);
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

function sanitizeUser(u) {
  if (!u) return null;
  const username = (u.username || '').toString().trim();
  const password = (u.password || '').toString();
  const role = ['auditor', 'controller', 'admin'].includes(u.role) ? u.role : 'auditor';
  const prefix = ['Dr.', 'Dra.', 'Sr.', 'Sra.'].includes(u.prefix) ? u.prefix : 'Dr.';
  const firstName = (u.firstName || '').toString().trim();
  const lastName = (u.lastName || '').toString().trim();
  if (!username || !password || !firstName || !lastName) return null;
  return { username, password, role, prefix, firstName, lastName };
}

function loadUsers() {
  try {
    const version = localStorage.getItem(USER_VERSION_KEY);
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : DEFAULT_USERS;
    const cleaned = Array.isArray(parsed)
      ? parsed.map(sanitizeUser).filter(Boolean)
      : DEFAULT_USERS.map(sanitizeUser).filter(Boolean);

    const migrated = cleaned.map((u) => {
      if (
        ['gnavas', 'mvargas', 'nnavarrete'].includes(u.username) &&
        u.password === 'Metro2025'
      ) {
        return { ...u, password: 'Metrored2025' };
      }
      return u;
    });

    const finalUsers = migrated.length ? migrated : DEFAULT_USERS.map(sanitizeUser).filter(Boolean);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(finalUsers));
    localStorage.setItem(USER_VERSION_KEY, CURRENT_USER_VERSION);
    if (version !== CURRENT_USER_VERSION && raw) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(finalUsers));
    }
    return finalUsers;
  } catch (e) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(DEFAULT_USERS));
    localStorage.setItem(USER_VERSION_KEY, CURRENT_USER_VERSION);
    return DEFAULT_USERS.map(sanitizeUser).filter(Boolean);
  }
}

function saveSession(username, role) {
  const session = { username, role };
  localStorage.setItem('metroredSession', JSON.stringify(session));
}

function redirectToApp() {
  window.location.href = 'index.html';
}

function initLogin() {
  const loginBtn = document.getElementById('loginBtn');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const statusEl = document.getElementById('loginStatus');

  const attemptLogin = () => {
    const users = loadUsers();
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const user = users.find((u) => u.username === username && u.password === password);
    if (!user) {
      statusEl.textContent = 'Credenciales inválidas';
      statusEl.classList.add('error-text');
      return;
    }
    statusEl.textContent = 'Acceso concedido';
    statusEl.classList.remove('error-text');
    saveSession(username, user.role);
    redirectToApp();
  };

  loginBtn.onclick = attemptLogin;
  passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') attemptLogin();
  });
}

(function bootstrapLogin() {
  loadUsers();
  const existing = localStorage.getItem('metroredSession');
  if (existing) redirectToApp();
  document.addEventListener('DOMContentLoaded', () => {
    applyLoginBranding();
    initLogin();
  });
})();
