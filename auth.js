// Funciones de autenticación y sesión compartidas entre login e index.
// No se guarda la contraseña en localStorage; solo se persiste la información necesaria del usuario.
const USERS = [
  {
    username: 'gnavas',
    password: 'Metrored2025',
    prefix: 'Dr.',
    firstName: 'Gustavo',
    lastName: 'Navas',
    role: 'admin',
  },
  {
    username: 'mvargas',
    password: 'Metrored2025',
    prefix: 'Dra.',
    firstName: 'Marcela',
    lastName: 'Vargas',
    role: 'auditor',
  },
  {
    username: 'nnavarrete',
    password: 'Metrored2025',
    prefix: 'Dr.',
    firstName: 'Nicolás',
    lastName: 'Navarrete',
    role: 'controller',
  },
];

// Devuelve el nombre completo legible del usuario.
function buildFullName(user) {
  return `${user.prefix} ${user.firstName} ${user.lastName}`.replace(/\s+/g, ' ').trim();
}

// Guarda el usuario actual en localStorage sin exponer la contraseña.
function setCurrentUser(user) {
  const publicUser = {
    username: user.username,
    fullName: buildFullName(user),
    role: user.role,
  };
  localStorage.setItem('currentUser', JSON.stringify(publicUser));
  return publicUser;
}

// Recupera el usuario autenticado del almacenamiento local.
function getCurrentUser() {
  try {
    const raw = localStorage.getItem('currentUser');
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.warn('No se pudo leer currentUser', e);
    return null;
  }
}

// Elimina la sesión local del usuario.
function logout() {
  localStorage.removeItem('currentUser');
}

// Valida credenciales contra la lista de usuarios disponibles.
function login(username, password) {
  const user = USERS.find(
    (u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password
  );
  if (!user) {
    return { success: false, message: 'Usuario o contraseña incorrectos.' };
  }
  const saved = setCurrentUser(user);
  return { success: true, user: saved };
}

// Redirige a login.html si no hay sesión activa.
function requireAuth() {
  const current = getCurrentUser();
  if (!current) {
    window.location.href = 'login.html';
    return null;
  }
  return current;
}
