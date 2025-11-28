const USERS = {
  gnavas: { password: 'Metro2025', role: 'admin' },
  mvargas: { password: 'Metro2025', role: 'auditor' },
  nnavarrete: { password: 'Metro2025', role: 'controller' },
};

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
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const user = USERS[username];
    if (!user || user.password !== password) {
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
  const existing = localStorage.getItem('metroredSession');
  if (existing) redirectToApp();
  document.addEventListener('DOMContentLoaded', initLogin);
})();
