// Auditoría Médica Web - lógica de interacción

// Datos incrustados como respaldo. Si la carga por fetch falla (por ejemplo, al abrir mediante file://),
// estos datos se utilizarán como fuente de datos.
// Datos de atenciones mensuales incorporados en el código. La aplicación utilizará
// estos valores si no puede cargar los archivos desde el sistema de archivos
// (por ejemplo, cuando se abre desde el protocolo file:// en algunos navegadores).
const EMBEDDED_ARC_DATA = [{"fecha_admision": "2025-10-27", "centro_medico": "CM KENNEDY", "especialidad": "GASTROENTEROLOGIA", "nombre_medico": "KAREN DENISSE FRANCO AGUILAR", "admision": "CEX012-10-002008588", "historia_clinica": 954359279, "nombres_completos": "DAYANA RAFAELA VERGARA ZAMORA"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM KENNEDY", "especialidad": "GASTROENTEROLOGIA", "nombre_medico": "KAREN DENISSE FRANCO AGUILAR", "admision": "CEX012-10-002002905", "historia_clinica": 926529579, "nombres_completos": "VANESSA ELIZABETH SANCHEZ YAGUAL"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM KENNEDY", "especialidad": "GASTROENTEROLOGIA", "nombre_medico": "KAREN DENISSE FRANCO AGUILAR", "admision": "CEX012-10-002004679", "historia_clinica": 923981500, "nombres_completos": "KAREN ALEXANDRA ROSADO GONZALEZ"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "MARIA JOSE IZQUIERDO PALOMEQUE", "admision": "CEX012-10-002004350", "historia_clinica": 1700603721, "nombres_completos": "JOSE RAFAEL ACOSTA USCA"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "MARIA JOSE IZQUIERDO PALOMEQUE", "admision": "CEX012-10-001997766", "historia_clinica": 1711880417, "nombres_completos": "MARIA FERNANDA ALVAREZ SANDOVAL"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "MARIA JOSE IZQUIERDO PALOMEQUE", "admision": "CEX012-10-002004123", "historia_clinica": 1752210862, "nombres_completos": "ESTEBAN SEBASTIAN RIVERA SILVA"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "MARIA JOSE IZQUIERDO PALOMEQUE", "admision": "CEX012-10-002003802", "historia_clinica": 1715438154, "nombres_completos": "LAURA GABRIELA MOLINA BURBANO"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "JOSE ALBERTO GARCES GUEVARA", "admision": "CEX012-10-002002677", "historia_clinica": 1753667839, "nombres_completos": "DOMINIQUE ALEJANDRA AVILA NAZATE"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "JOSE ALBERTO GARCES GUEVARA", "admision": "CEX012-10-002002225", "historia_clinica": 1721683520, "nombres_completos": "MARÍA JOSE CARRERA ALAVA"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM PLAZA DE TOROS", "especialidad": "REUMATOLOGIA", "nombre_medico": "NIVI MARIA GARCIA GARCIA", "admision": "CEX012-10-002003746", "historia_clinica": 1712481637, "nombres_completos": "JORGE ANTONIO AVALOS JACOME"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM PLAZA DE TOROS", "especialidad": "DERMATOLOGIA", "nombre_medico": "ANALIA KARINA PASQUEL SOTELO", "admision": "CEX012-10-002000141", "historia_clinica": 1710060706, "nombres_completos": "ANDRES EDUARDO TORRES FERNANDEZ"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM PLAZA DE TOROS", "especialidad": "REUMATOLOGIA", "nombre_medico": "NIVI MARIA GARCIA GARCIA", "admision": "CEX012-10-002008533", "historia_clinica": 1704149739, "nombres_completos": "BEATRIZ MERCEDES TORRES VIZCAINO"}];

const EMBEDDED_CRITERIA = [{"id": "C1", "name": "CENTRO", "description": "Unidad de atención"}, {"id": "C2", "name": "ESPECIALIDAD", "description": "Servicio en que se atendió"}, {"id": "C3", "name": "FECHA", "description": "Mes"}, {"id": "C4", "name": "ADMISION", "description": "Código de admisión"}, {"id": "C5", "name": "DATOS", "description": "Se escribe los datos de consulta según la especialidad respectiva"}, {"id": "C6", "name": "SIGNOS", "description": "Signos vitales registrados completos y adecuados para la edad"}, {"id": "C7", "name": "APP", "description": "Presencia de registro de antecedentes personales relevantes"}, {"id": "C8", "name": "APF", "description": "Presencia de registro tanto positivo como negativo de antecedentes familiares relevantes"}, {"id": "C9", "name": "ALERGIAS", "description": "Presencia de registro de antecedentes de alergias"}, {"id": "C10", "name": "MOTIVO DE CONSULTA", "description": "Registro del motivo por el que el paciente acude a pedir atención médica"}, {"id": "C11", "name": "EA", "description": "Descripción de la evolución y detalles de los síntomas y/ o signos descritos en el motivo de consulta y los hallazgos en el interrogatorio, Se incluyen datos positivos y negativos,  Valoración del dolor"}, {"id": "C13", "name": "RAS", "description": "Describe signos y síntomas extras al motivo de consulta y forman parte importante en el diagnóstico"}, {"id": "C14", "name": "EF", "description": "Descripción clara y especifica de hallazgos en el  examen físico- registro datos negativos importantes para el diagnóstico diferencial"}, {"id": "C15", "name": "HISTORIA CONSISTENTE", "description": "Se evalúa la estructura global de la redacción de la historia clínica buscando la consistencia interna entre síntomas y signos explorados con el motivo de consulta presentado"}, {"id": "C16", "name": "RIESGO LEGAL", "description": "Se evalúa si la información presente en la historia, en caso de presentarse alguna queja, contenga vacíos que puedan presentar riesgo dejando espacio libre para especulaciones o que no evidencie lo actuado"}, {"id": "C17", "name": "DG", "description": "Se analiza la hipótesis diagnostica más probable considerando de manera integral la clínica, los factores de riesgo y la situación del contexto del paciente"}, {"id": "C18", "name": "LAB", "description": "Los exámenes prescritos se soportan tanto en evidencia clínica como científica"}, {"id": "C19", "name": "IMAGEN / PROCEDIMIENTO", "description": "Los exámenes prescritos se soportan tanto en evidencia clínica como científica"}, {"id": "C20", "name": "RP", "description": "La decisión de la prescripción terapéutica es adecuada y esta soportada en evidencia científica"}, {"id": "C21", "name": "INDICACIONES COMPLETAS", "description": "Indicaciones completas y claras sin espacios de confusión para el paciente, dosificación, horarios, tiempo de tratamiento"}, {"id": "C22", "name": "PRESCRIPCIÓN DE HÁBITOS Y ASESORÍA EN SALUD", "description": "La prescripción cuenta con recomendaciones de hábitos saludables y no farmacológicos, así como aspectos de prevención y promoción de la salud"}];

let arcData = [];
let criteriaList = [];
// Auditorías guardadas: objeto con clave admisión y valor { respuestas: {criterioId: valor}, comentarios, fecha }
let audits = {};

// Configuración de navegación por rol
const ROLE_SECTIONS = {
  auditor: ['dashboard', 'auditoria'],
  controller: ['dashboard', 'auditoria', 'medicos'],
  admin: ['admin'],
};

const DEFAULT_SECTIONS = {
  auditor: 'dashboard',
  controller: 'dashboard',
  admin: 'admin',
};

const MEDICOS_DUMMY = [
  { nombre: 'Dra. Ana Morales', especialidad: 'Cardiología', centro: 'CM Kennedy', score: '92%' },
  { nombre: 'Dr. Luis Paredes', especialidad: 'Medicina Interna', centro: 'CM Cumbayá', score: '87%' },
  { nombre: 'Dra. Sofía Salazar', especialidad: 'Pediatría', centro: 'CM Plaza de Toros', score: '90%' },
  { nombre: 'Dr. Mateo Silva', especialidad: 'Neurología', centro: 'CM Kennedy', score: '85%' },
];

let allowedSections = [];
let currentUser = null;

// Cargar datos iniciales desde archivos JSON incluidos en el proyecto
async function loadInitialData() {
  try {
    const arcResp = await fetch('data/arc_data.json');
    arcData = await arcResp.json();
  } catch (e) {
    console.error('No se pudo cargar arc_data.json', e);
  }
  try {
    const critResp = await fetch('data/criteria.json');
    criteriaList = await critResp.json();
  } catch (e) {
    console.error('No se pudo cargar criteria.json', e);
  }
  // Recuperar auditorías previas del almacenamiento local
  try {
    const stored = localStorage.getItem('audits');
    if (stored) {
      audits = JSON.parse(stored);
    }
  } catch (e) {
    console.warn('No se pudo leer auditorías almacenadas', e);
  }
  // Si no se obtuvo data a través de fetch (por ejemplo, al cargar vía file://), usar datos incrustados
  if (!Array.isArray(arcData) || arcData.length === 0) {
    arcData = EMBEDDED_ARC_DATA;
  }
  if (!Array.isArray(criteriaList) || criteriaList.length === 0) {
    criteriaList = EMBEDDED_CRITERIA;
  }
  // Inicializar vistas
  initDashboard();
  initCriteria();
  initAuditOptions();
  renderSavedAuditsTable();
}

// Inicializar métricas del dashboard
function initDashboard() {
  // Total de registros
  document.getElementById('totalRecords').textContent = arcData.length;
  // Especialidades únicas
  const specials = new Set(arcData.map((r) => r.especialidad));
  document.getElementById('uniqueSpecialties').textContent = specials.size;
  // Centros únicos
  const centers = new Set(arcData.map((r) => r.centro_medico));
  document.getElementById('uniqueCenters').textContent = centers.size;
  // Tabla por especialidad
  const specCounts = {};
  arcData.forEach((r) => {
    specCounts[r.especialidad] = (specCounts[r.especialidad] || 0) + 1;
  });
  const specTbody = document.querySelector('#specialtyTable tbody');
  specTbody.innerHTML = '';
  Object.entries(specCounts).forEach(([esp, count]) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${esp}</td><td>${count}</td>`;
    specTbody.appendChild(tr);
  });
  // Tabla por centro
  const centerCounts = {};
  arcData.forEach((r) => {
    centerCounts[r.centro_medico] = (centerCounts[r.centro_medico] || 0) + 1;
  });
  const centerTbody = document.querySelector('#centerTable tbody');
  centerTbody.innerHTML = '';
  Object.entries(centerCounts).forEach(([center, count]) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${center}</td><td>${count}</td>`;
    centerTbody.appendChild(tr);
  });
}

// Inicializar tabla de criterios
function initCriteria() {
  const tbody = document.querySelector('#criteriaTable tbody');
  tbody.innerHTML = '';
  criteriaList.forEach((c) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${c.id}</td><td>${c.name}</td><td>${c.description || ''}</td>`;
    tbody.appendChild(tr);
  });
}

// Inicializar opciones de historias para auditar
function initAuditOptions() {
  const select = document.getElementById('selectRecord');
  select.innerHTML = '';
  const defaultOpt = document.createElement('option');
  defaultOpt.value = '';
  defaultOpt.textContent = 'Seleccione';
  select.appendChild(defaultOpt);
  arcData.forEach((r, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = `${r.admision} - ${r.nombres_completos}`;
    select.appendChild(opt);
  });
  if (!select.dataset.bound) {
    select.addEventListener('change', () => {
      const idx = select.value;
      if (idx === '') {
        document.getElementById('recordDetails').innerHTML = '';
        document.getElementById('auditForm').style.display = 'none';
      } else {
        const record = arcData[idx];
        displayRecordDetails(record);
        renderAuditForm(record);
      }
    });
    select.dataset.bound = 'true';
  }
}

// Mostrar detalles de la historia seleccionada
function displayRecordDetails(record) {
  const container = document.getElementById('recordDetails');
  container.innerHTML = '<h3>Detalles de la atención</h3>';
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  Object.entries(record).forEach(([key, value]) => {
    const tr = document.createElement('tr');
    const labelCell = document.createElement('td');
    labelCell.textContent = key.replace(/_/g, ' ').toUpperCase();
    const valueCell = document.createElement('td');
    valueCell.textContent = value;
    tr.appendChild(labelCell);
    tr.appendChild(valueCell);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  container.appendChild(table);
}

// Generar formulario de auditoría para el registro seleccionado
function renderAuditForm(record) {
  const form = document.getElementById('auditForm');
  const inputsContainer = document.getElementById('criteriaInputs');
  inputsContainer.innerHTML = '';
  const prev = audits[record.admision] || {};

  criteriaList.forEach((c) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'criterion-buttons';
    wrapper.dataset.critId = c.id;

    const label = document.createElement('div');
    label.className = 'criterion-label';
    label.textContent = `${c.id} - ${c.name}`;
    wrapper.appendChild(label);

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';

    const cumpleBtn = document.createElement('button');
    cumpleBtn.type = 'button';
    cumpleBtn.textContent = 'Cumple';
    cumpleBtn.dataset.value = '1';

    const noCumpleBtn = document.createElement('button');
    noCumpleBtn.type = 'button';
    noCumpleBtn.textContent = 'No cumple';
    noCumpleBtn.dataset.value = '0';

    [cumpleBtn, noCumpleBtn].forEach((btn) => {
      btn.addEventListener('click', () => {
        wrapper.dataset.response = btn.dataset.value;
        buttonGroup.querySelectorAll('button').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    buttonGroup.appendChild(cumpleBtn);
    buttonGroup.appendChild(noCumpleBtn);
    wrapper.appendChild(buttonGroup);

    if (prev.respuestas && prev.respuestas[c.id] !== undefined) {
      wrapper.dataset.response = String(prev.respuestas[c.id]);
      const targetBtn = prev.respuestas[c.id] === 1 ? cumpleBtn : noCumpleBtn;
      targetBtn.classList.add('active');
    }

    inputsContainer.appendChild(wrapper);
  });

  const comments = document.getElementById('auditComments');
  comments.value = prev.comentarios || '';
  document.getElementById('saveAuditBtn').onclick = () => saveAudit(record);
  form.style.display = 'block';
}

// Guardar auditoría en localStorage
function saveAudit(record) {
  const respuestas = {};
  let total = 0;
  let answered = 0;
  document.querySelectorAll('#criteriaInputs .criterion-buttons').forEach((wrapper) => {
    const val = wrapper.dataset.response;
    const critId = wrapper.dataset.critId;
    if (val === '1' || val === '0') {
      respuestas[critId] = Number(val);
      total += Number(val);
      answered += 1;
    }
  });
  if (answered === 0) {
    alert('Debe completar al menos un criterio.');
    return;
  }
  const score = (total / criteriaList.length) * 100;
  const comentarios = document.getElementById('auditComments').value.trim();
  audits[record.admision] = {
    respuestas,
    comentarios,
    fecha: new Date().toISOString(),
    score: score.toFixed(2),
  };
  localStorage.setItem('audits', JSON.stringify(audits));
  alert('Auditoría guardada correctamente.');
  renderSavedAuditsTable();
}

// Mostrar tabla de auditorías guardadas
function renderSavedAuditsTable() {
  const tbody = document.querySelector('#savedAuditsTable tbody');
  tbody.innerHTML = '';
  Object.entries(audits).forEach(([admision, data]) => {
    const tr = document.createElement('tr');
    const score = data.score || '0';
    const fecha = new Date(data.fecha).toLocaleString('es-EC');
    tr.innerHTML = `<td>${admision}</td><td>${score}%</td><td>${fecha}</td>`;
    const actionsTd = document.createElement('td');
    // Botón eliminar
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Eliminar';
    delBtn.onclick = () => {
      if (confirm('¿Desea eliminar esta auditoría?')) {
        delete audits[admision];
        localStorage.setItem('audits', JSON.stringify(audits));
        renderSavedAuditsTable();
      }
    };
    actionsTd.appendChild(delBtn);
    tr.appendChild(actionsTd);
    tbody.appendChild(tr);
  });
}

// Exportar auditorías en formato JSON descargable
function exportAudits() {
  const dataStr = JSON.stringify(audits, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'auditorias.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Manejar carga de archivos en sección Admin
function initAdminUploads() {
  const arcInput = document.getElementById('uploadArc');
  arcInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (Array.isArray(data)) {
          arcData = data;
          initDashboard();
          initAuditOptions();
          alert('Datos de atenciones cargados correctamente.');
        } else {
          alert('El formato del archivo no es válido. Se esperaba un arreglo JSON.');
        }
      } catch (err) {
        alert('No se pudo leer el archivo JSON: ' + err.message);
      }
    };
    reader.readAsText(file);
  });
  const critInput = document.getElementById('uploadCriteria');
  critInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (Array.isArray(data)) {
          criteriaList = data;
          initCriteria();
          initAuditOptions();
          alert('Criterios cargados correctamente.');
        } else {
          alert('El formato del archivo no es válido. Se esperaba un arreglo JSON.');
        }
      } catch (err) {
        alert('No se pudo leer el archivo JSON: ' + err.message);
      }
    };
    reader.readAsText(file);
  });
}

// Pinta tabla estática de médicos para el rol controller.
function initMedicosTable() {
  const tbody = document.querySelector('#medicosTable tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  MEDICOS_DUMMY.forEach((med) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${med.nombre}</td><td>${med.especialidad}</td><td>${med.centro}</td><td>${med.score}</td>`;
    tbody.appendChild(tr);
  });
}

// Actualiza la cabecera con la información de sesión.
function hydrateUserPanel(user) {
  document.getElementById('userFullName').textContent = user.fullName;
  document.getElementById('userRole').textContent = user.role;
  const roleSelect = document.getElementById('activeRoleSelect');
  roleSelect.value = user.role;
  roleSelect.disabled = true;
  document.getElementById('sessionState').textContent = 'Sesión activa';
}

// Configura navegación y visibilidad según el rol.
function initNavigation() {
  allowedSections = ROLE_SECTIONS[currentUser.role] || [];
  document.querySelectorAll('nav [data-section]').forEach((link) => {
    const target = link.dataset.section;
    const allowed = allowedSections.includes(target);
    link.parentElement.style.display = allowed ? '' : 'none';
    const section = document.getElementById(target);
    if (section) {
      section.style.display = 'none';
    }
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToSection(target);
    });
  });
  window.addEventListener('hashchange', navigateFromHash);
  navigateFromHash();
}

// Determina la sección destino a partir del hash y las reglas de rol.
function navigateFromHash() {
  const requested = window.location.hash.replace('#', '') || DEFAULT_SECTIONS[currentUser.role];
  navigateToSection(requested);
}

// Muestra la sección solicitada si está permitida; si no, redirige a la sección por defecto del rol.
function navigateToSection(sectionId) {
  const allowed = allowedSections.includes(sectionId);
  const finalSection = allowed ? sectionId : DEFAULT_SECTIONS[currentUser.role];
  document.querySelectorAll('main .section').forEach((sec) => {
    const secId = sec.dataset.section || sec.id;
    const isTarget = secId === finalSection;
    sec.style.display = isTarget ? 'block' : 'none';
  });
  document.querySelectorAll('nav [data-section]').forEach((link) => {
    link.classList.toggle('active', link.dataset.section === finalSection);
  });
  if (window.location.hash.replace('#', '') !== finalSection) {
    window.location.hash = `#${finalSection}`;
  }
  if (finalSection === 'auditoria') {
    if (Array.isArray(arcData) && arcData.length > 0) {
      initAuditOptions();
    }
    renderSavedAuditsTable();
  }
}

// Asocia botones de sesión.
function initSessionControls() {
  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', () => {
    logout();
    window.location.href = 'login.html';
  });
}

// Configurar eventos iniciales
document.addEventListener('DOMContentLoaded', () => {
  currentUser = requireAuth();
  if (!currentUser) return;
  hydrateUserPanel(currentUser);
  initSessionControls();
  initAdminUploads();
  initMedicosTable();
  document.getElementById('exportAuditsBtn').addEventListener('click', exportAudits);
  loadInitialData();
  initNavigation();
});