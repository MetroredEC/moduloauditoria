// Lógica compartida de autenticación y sesión (frontend only)
(function (global) {
  const USER_STORAGE_KEY = 'metroredUsers';
  const USER_VERSION_KEY = 'metroredUsersVersion';
  const SESSION_KEY = 'metroredCurrentUser';
  const CURRENT_USER_VERSION = 'v4';

  const DEFAULT_USERS = [
    { prefix: 'Sr.', firstName: 'Argenis', lastName: 'Navas', username: 'gnavas', password: 'Metrored2025', role: 'admin' },
    { prefix: 'Dra.', firstName: 'Maite', lastName: 'Vargas', username: 'mvargas', password: 'Metrored2025', role: 'auditor' },
    { prefix: 'Sra.', firstName: 'Nathalia', lastName: 'Navarrete', username: 'nnavarrete', password: 'Metrored2025', role: 'controller' },
  ];

  const memoryStore = {};
  const safeStorage = {
    get: (key) => {
      try {
        return localStorage.getItem(key);
      } catch (e) {
        return key in memoryStore ? memoryStore[key] : null;
      }
    },
    set: (key, value) => {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
        memoryStore[key] = value;
      }
    },
    remove: (key) => {
      try {
        localStorage.removeItem(key);
      } catch (e) {
        delete memoryStore[key];
      }
    },
  };

  function sanitizeUserRecord(u) {
    if (!u) return null;
    const prefix = ['Dr.', 'Dra.', 'Sr.', 'Sra.'].includes(u.prefix) ? u.prefix : 'Dr.';
    const role = ['auditor', 'controller', 'admin'].includes(u.role) ? u.role : 'auditor';
    const firstName = (u.firstName || '').toString().trim();
    const lastName = (u.lastName || '').toString().trim();
    const username = (u.username || '').toString().trim();
    const password = (u.password || '').toString();
    if (!username || !firstName || !lastName || !password) return null;
    return { prefix, role, firstName, lastName, username, password };
  }

  function persistUsers(users) {
    safeStorage.set(USER_STORAGE_KEY, JSON.stringify(users));
    safeStorage.set(USER_VERSION_KEY, CURRENT_USER_VERSION);
  }

  function loadUsers() {
    try {
      const storedVersion = safeStorage.get(USER_VERSION_KEY);
      const raw = safeStorage.get(USER_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      const sanitized = Array.isArray(parsed)
        ? parsed.map(sanitizeUserRecord).filter(Boolean)
        : DEFAULT_USERS.map(sanitizeUserRecord).filter(Boolean);

      const defaults = DEFAULT_USERS.map(sanitizeUserRecord).filter(Boolean);
      const merged = sanitized.map((u) => {
        if (['gnavas', 'mvargas', 'nnavarrete'].includes(u.username) && u.password !== 'Metrored2025') {
          const updated = defaults.find((d) => d.username === u.username);
          return updated || { ...u, password: 'Metrored2025' };
        }
        return u;
      });

      defaults.forEach((d) => {
        if (!merged.find((u) => u.username === d.username)) merged.push(d);
      });

      const finalUsers = merged.length ? merged : defaults;
      if (storedVersion !== CURRENT_USER_VERSION) {
        persistUsers(finalUsers);
      }
      return finalUsers;
    } catch (e) {
      const defaults = DEFAULT_USERS.map(sanitizeUserRecord).filter(Boolean);
      persistUsers(defaults);
      return defaults;
    }
  }

  function saveUsers(users) {
    const sanitized = Array.isArray(users) ? users.map(sanitizeUserRecord).filter(Boolean) : [];
    const finalUsers = sanitized.length ? sanitized : DEFAULT_USERS.map(sanitizeUserRecord).filter(Boolean);
    persistUsers(finalUsers);
    return finalUsers;
  }

  function buildFullName(u) {
    if (!u) return '';
    const prefix = u.prefix ? `${u.prefix} ` : '';
    return `${prefix}${u.firstName || ''} ${u.lastName || ''}`.trim();
  }

  function setCurrentUser(user) {
    if (!user || !user.username || !user.role) return;
    const payload = {
      username: user.username,
      fullName: user.fullName || buildFullName(user),
      role: user.role,
    };
    safeStorage.set(SESSION_KEY, JSON.stringify(payload));
  }

  function getCurrentUser() {
    try {
      const raw = safeStorage.get(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function clearCurrentUser() {
    safeStorage.remove(SESSION_KEY);
  }

  global.Auth = {
    safeStorage,
    sanitizeUserRecord,
    loadUsers,
    saveUsers,
    buildFullName,
    setCurrentUser,
    getCurrentUser,
    clearCurrentUser,
    USERS: DEFAULT_USERS,
    constants: {
      USER_STORAGE_KEY,
      USER_VERSION_KEY,
      SESSION_KEY,
      CURRENT_USER_VERSION,
    },
  };
})(window);
