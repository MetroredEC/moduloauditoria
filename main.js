// Auditoría Médica Metrored – experiencia profesional con roles, KPIs y flujo de auditoría.

// Datos incrustados como respaldo. Si la carga por fetch falla (por ejemplo, al abrir mediante file://),
// estos datos se utilizarán como fuente de datos.
const EMBEDDED_ARC_DATA = [{"fecha_admision": "2025-10-27", "centro_medico": "CM KENNEDY", "especialidad": "GASTROENTEROLOGIA",
"nombre_medico": "KAREN DENISSE FRANCO AGUILAR", "admision": "CEX012-10-002008588", "historia_clinica": 954359279, "nombres_completos": "DAYANA RAFAELA VERGARA ZAMORA"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM KENNEDY", "especialidad": "GASTROENTEROLOGIA", "nombre_medico": "KAREN DENISSE FRANCO AGUILAR", "admision": "CEX012-10-002002905", "historia_clinica": 926529579, "nombres_completos": "VANESSA ELIZABETH SANCHEZ YAGUAL"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM KENNEDY", "especialidad": "GASTROENTEROLOGIA", "nombre_medico": "KAREN DENISSE FRANCO AGUILAR", "admision": "CEX012-10-002004679", "historia_clinica": 923981500, "nombres_completos": "KAREN ALEXANDRA ROSADO GONZALEZ"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "MARIA JOSE IZQUIERDO PALOMEQUE", "admision": "CEX012-10-002004350", "historia_clinica": 1700603721, "nombres_completos": "JOSE RAFAEL ACOSTA USCA"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "MARIA JOSE IZQUIERDO PALOMEQUE", "admision": "CEX012-10-001997766", "historia_clinica": 1711880417, "nombres_completos": "MARIA FERNANDA ALVAREZ SANDOVAL"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "MARIA JOSE IZQUIERDO PALOMEQUE", "admision": "CEX012-10-002004123", "historia_clinica": 1752210862, "nombres_completos": "ESTEBAN SEBASTIAN RIVERA SILVA"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "MARIA JOSE IZQUIERDO PALOMEQUE", "admision": "CEX012-10-002003802", "historia_clinica": 1715438154, "nombres_completos": "LAURA GABRIELA MOLINA BURBANO"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "JOSE ALBERTO GARCES GUEVARA", "admision": "CEX012-10-002002677", "historia_clinica": 1753667839, "nombres_completos": "DOMINIQUE ALEJANDRA AVILA NAZATE"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "JOSE ALBERTO GARCES GUEVARA", "admision": "CEX012-10-002002225", "historia_clinica": 1721683520, "nombres_completos": "MARÍA JOSE CARRERA ALAVA"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM PLAZA DE TOROS", "especialidad": "REUMATOLOGIA", "nombre_medico": "NIVI MARIA GARCIA GARCIA", "admision": "CEX012-10-002003746", "historia_clinica": 1712481637, "nombres_completos": "JORGE ANTONIO AVALOS JACOME"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM PLAZA DE TOROS", "especialidad": "DERMATOLOGIA", "nombre_medico": "ANALIA KARINA PASQUEL SOTELO", "admision": "CEX012-10-002000141", "historia_clinica": 1710060706, "nombres_completos": "ANDRES EDUARDO TORRES FERNANDEZ"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM PLAZA DE TOROS", "especialidad": "REUMATOLOGIA", "nombre_medico": "NIVI MARIA GARCIA GARCIA", "admision": "CEX012-10-002008533", "historia_clinica": 1704149739, "nombres_completos": "BEATRIZ MERCEDES TORRES VIZCAINO"}];

const EMBEDDED_CRITERIA = [{"id": "C1", "name": "CENTRO", "description": "Unidad de atención"}, {"id": "C2", "name": "ESPECIALIDAD", "description": "Servicio en que se atendió"}, {"id": "C3", "name": "FECHA", "description": "Mes"}, {"id": "C4", "name": "ADMISION", "description": "Código de admisión"}, {"id": "C5", "name": "DATOS", "description": "Se escribe los datos de consulta según la especialidad respectiva"}, {"id": "C6", "name": "SIGNOS", "description": "Signos vitales registrados completos y adecuados para la edad"}, {"id": "C7", "name": "APP", "description": "Presencia de registro de antecedentes personales relevantes"}, {"id": "C8", "name": "APF", "description": "Presencia de registro tanto positivo como negativo de antecedentes familiares relevantes"}, {"id": "C9", "name": "ALERGIAS", "description": "Presencia de registro de antecedentes de alergias"}, {"id": "C10", "name": "MOTIVO DE CONSULTA", "description": "Registro del motivo por el que el paciente acude a pedir atención médica"}, {"id": "C11", "name": "EA", "description": "Descripción de la evolución y detalles de los síntomas y/ o signos descritos en el motivo de consulta y los hallazgos en el interrogatorio, Se incluyen datos positivos y negativos,  Valoración del dolor"}, {"id": "C13", "name": "RAS", "description": "Describe signos y síntomas extras al motivo de consulta y forman parte importante en el diagnóstico"}, {"id": "C14", "name": "EF", "description": "Descripción clara y especifica de hallazgos en el  examen físico- registro datos negativos importantes para el diagnóstico diferencial"}, {"id": "C15", "name": "HISTORIA CONSISTENTE", "description": "Se evalúa la estructura global de la redacción de la historia clínica buscando la consistencia interna entre síntomas y signos explorados con el motivo de consulta presentado"}, {"id": "C16", "name": "RIESGO LEGAL", "description": "Se evalúa si la información presente en la historia, en caso de presentarse alguna queja, contenga vacíos que puedan presentar riesgo dejando espacio libre para especulaciones o que no evidencie lo actuado"}, {"id": "C17", "name": "DG", "description": "Se analiza la hipótesis diagnostica más probable considerando de manera integral la clínica, los factores de riesgo y la situación del contexto del paciente"}, {"id": "C18", "name": "LAB", "description": "Los exámenes prescritos se soportan tanto en evidencia clínica como científica"}, {"id": "C19", "name": "IMAGEN / PROCEDIMIENTO", "description": "Los exámenes prescritos se soportan tanto en evidencia clínica como científica"}, {"id": "C20", "name": "RP", "description": "La decisión de la prescripción terapéutica es adecuada y esta soportada en evidencia científica"}, {"id": "C21", "name": "INDICACIONES COMPLETAS", "description": "Indicaciones completas y claras sin espacios de confusión para el paciente, dosificación, horarios, tiempo de tratamiento"}, {"id": "C22", "name": "PRESCRIPCIÓN DE HÁBITOS Y ASESORÍA EN SALUD", "description": "La prescripción cuenta con recomendaciones de hábitos saludables y no farmacológicos, así como aspectos de prevención y promoción de la salud"}];

const USER_CATALOG = {
  gnavas: { role: 'admin' },
  mvargas: { role: 'auditor' },
  nnavarrete: { role: 'controller' },
};

const ROLES = {
  auditor: ["dashboard", "criterios", "auditar", "audit"],
  controller: ["dashboard", "criterios", "auditar", "medicos", "reportes", "audit"],
  admin: ["admin"],
};

const SECTION_CONFIG = [
  { id: "anamnesis", title: "Anamnesis", criteriaIds: ["C5", "C6", "C7", "C8", "C9", "C10", "C11", "C13"] },
  { id: "examen", title: "Examen Físico", criteriaIds: ["C14", "C15"] },
  { id: "diagnostico", title: "Hipótesis diagnósticas", criteriaIds: ["C17"] },
  { id: "pertinencia", title: "Pertinencia", criteriaIds: ["C18", "C19"] },
  { id: "indicaciones", title: "Indicaciones", criteriaIds: ["C20", "C21", "C22"] },
  { id: "riesgo", title: "Riesgo / Legal", criteriaIds: ["C16"] },
];

const CRITERIA_ID_SET = new Set(SECTION_CONFIG.flatMap((s) => s.criteriaIds));
const TOTAL_SECTION_CRITERIA = CRITERIA_ID_SET.size;

let arcData = [];
let criteriaList = [];
let audits = {};
let currentRole = null;
let currentUser = null;
let isAuthenticated = false;
let dataLoaded = false;
let currentRecord = null;
let modalRecord = null;
let auditFilters = { date: "", center: "all", cex: "" };
let auditSort = { column: null, direction: "asc" };
let stratificationResult = null;
let assignments = [];
let assignmentSearchTerm = "";
const SESSION_KEY = 'metroredSession';
const ARC_TEMPLATE_COLUMNS = [
  { header: 'Fecha de admisión', key: 'fecha_admision' },
  { header: 'Centro médico', key: 'centro_medico' },
  { header: 'Especialidad', key: 'especialidad' },
  { header: 'Médico', key: 'nombre_medico' },
  { header: 'Admisión/CEX', key: 'admision' },
  { header: 'Historia clínica', key: 'historia_clinica' },
  { header: 'Paciente', key: 'nombres_completos' },
];

const getRecordPool = () => (assignments.length ? assignments : arcData);

function normalizeDateValue(value) {
  if (!value) return '';
  if (typeof value === 'number' && typeof XLSX !== 'undefined' && XLSX.SSF?.parse_date_code) {
    const parsed = XLSX.SSF.parse_date_code(value);
    if (parsed) {
      const iso = new Date(Date.UTC(parsed.y, parsed.m - 1, parsed.d)).toISOString().slice(0, 10);
      return iso;
    }
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    const match = trimmed.match(/\d{4}-\d{2}-\d{2}/);
    if (match) return match[0];
  }
  const date = new Date(value);
  if (!Number.isNaN(date.getTime())) return date.toISOString().slice(0, 10);
  return value.toString().trim();
}

function normalizeArcRecord(rec) {
  if (!rec) return rec;
  const normalized = { ...rec };
  normalized.fecha_admision = normalizeDateValue(rec.fecha_admision);
  ['centro_medico', 'especialidad', 'nombre_medico', 'admision', 'historia_clinica', 'nombres_completos'].forEach((key) => {
    if (normalized[key] !== undefined && normalized[key] !== null) {
      normalized[key] = normalized[key].toString().trim();
    }
  });
  return normalized;
}

function normalizeAssignmentRecord(rec) {
  const normalized = normalizeArcRecord(rec);
  if (!normalized) return rec;
  normalized.assignedAuditor = rec.assignedAuditor || null;
  return normalized;
}

function filterRecordsForUser(records) {
  if (!assignments.length) return currentRole === 'auditor' ? [] : records;
  if (currentRole === 'auditor') {
    return records.filter((r) => r.assignedAuditor === currentUser);
  }
  return records;
}

function readSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function loadAssignments() {
  try {
    const raw = localStorage.getItem('assignments');
    assignments = raw ? JSON.parse(raw) : [];
  } catch (e) {
    assignments = [];
  }
}

function saveAssignments() {
  localStorage.setItem('assignments', JSON.stringify(assignments));
}

// Utilidades de puntaje
function calcularScoreMedico(auditorias) {
  const totalPeso = auditorias.reduce((sum, a) => sum + (a.pesoTotal || 1), 0);
  const totalScore = auditorias.reduce((sum, a) => sum + (Number(a.score) || 0) * (a.pesoTotal || 1), 0);
  return totalPeso === 0 ? 0 : totalScore / totalPeso;
}

function computeAuditScore(respuestas = {}) {
  const answered = Object.entries(respuestas).filter(([crit]) => CRITERIA_ID_SET.has(crit));
  const total = answered.reduce((sum, [, val]) => sum + Number(val), 0);
  const totalPosibles = TOTAL_SECTION_CRITERIA;
  const score = totalPosibles > 0 ? (total / totalPosibles) * 100 : 0;
  return { score: Number(score.toFixed(2)), totalPosibles, total }; // numeric score for consistency
}

const semaforo = (score) => {
  if (score >= 90) return { label: "Óptimo", className: "ok" };
  if (score >= 80) return { label: "Aceptable", className: "warn" };
  return { label: "No aceptable", className: "alert" };
};

async function loadInitialData() {
  try {
    const arcResp = await fetch('data/arc_data.json');
    arcData = await arcResp.json();
  } catch (e) {
    console.warn('No se pudo cargar arc_data.json', e);
  }
  try {
    const critResp = await fetch('data/criteria.json');
    criteriaList = await critResp.json();
  } catch (e) {
    console.warn('No se pudo cargar criteria.json', e);
  }
  try {
    const stored = localStorage.getItem('audits');
    if (stored) audits = JSON.parse(stored);
  } catch (e) {
    console.warn('No se pudo leer auditorías almacenadas', e);
  }
  loadAssignments();
  if (!Array.isArray(arcData) || arcData.length === 0) arcData = EMBEDDED_ARC_DATA;
  if (!Array.isArray(criteriaList) || criteriaList.length === 0) criteriaList = EMBEDDED_CRITERIA;

  arcData = arcData.map(normalizeArcRecord);
  assignments = assignments.map(normalizeAssignmentRecord);

  initDashboard();
  initAuditOptions();
  renderSavedAuditsTable();
  renderMedicoProfiles();
  calculateStratification();
  renderAssignmentsTable();
  renderAuditAssignmentTable();
  dataLoaded = true;
}

// --- Dashboard ---
function initDashboard() {
  document.getElementById('specialtyTable').querySelector('tbody').innerHTML = '';
  document.getElementById('centerTable').querySelector('tbody').innerHTML = '';
  const specCounts = {};
  const centerCounts = {};
  arcData.forEach((r) => {
    specCounts[r.especialidad] = (specCounts[r.especialidad] || 0) + 1;
    centerCounts[r.centro_medico] = (centerCounts[r.centro_medico] || 0) + 1;
  });
  const specTbody = document.querySelector('#specialtyTable tbody');
  Object.entries(specCounts).forEach(([esp, count]) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${esp}</td><td>${count}</td>`;
    specTbody.appendChild(tr);
  });
  const centerTbody = document.querySelector('#centerTable tbody');
  Object.entries(centerCounts).forEach(([center, count]) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${center}</td><td>${count}</td>`;
    centerTbody.appendChild(tr);
  });

  renderKPIs();
  renderCharts(specCounts);
}

function renderKPIs() {
  const kpiGrid = document.getElementById('kpiGrid');
  kpiGrid.innerHTML = '';
  const totalRecords = arcData.length;
  const distinctMedicos = new Set(arcData.map((a) => a.nombre_medico)).size;
  const finished = Object.values(audits).filter((a) => a.status === 'finalizada').length;
  const promedio = calcularScoreMedico(Object.values(audits));
  const kpis = [
    { label: 'Atenciones', value: totalRecords, helper: 'Base ARC mensual' },
    { label: 'Médicos auditados', value: distinctMedicos, helper: 'Cobertura institucional' },
    { label: 'Auditorías finalizadas', value: finished, helper: 'Cierres en curso' },
    { label: 'Score global', value: `${promedio ? promedio.toFixed(1) : '—'}%`, helper: 'SPEC-1 indicador' },
  ];
  kpis.forEach((k) => {
    const div = document.createElement('div');
    div.className = 'kpi-item';
    div.innerHTML = `<span class="eyebrow">${k.helper}</span><div class="kpi-value">${k.value}</div><h4>${k.label}</h4>`;
    kpiGrid.appendChild(div);
  });
}

function renderCharts(specCounts) {
  const especialidades = Object.keys(specCounts);
  const valores = Object.values(specCounts);
  const ctxBar = document.getElementById('chartEspecialidad');
  const ctxLine = document.getElementById('chartEvolucion');
  const ctxRadar = document.getElementById('chartRadar');
  const ctxReconsulta = document.getElementById('chartReconsulta');

  if (window.especChart) window.especChart.destroy();
  if (window.evoChart) window.evoChart.destroy();
  if (window.radarChart) window.radarChart.destroy();
  if (window.reconsultaChart) window.reconsultaChart.destroy();

  window.especChart = new Chart(ctxBar, {
    type: 'bar',
    data: { labels: especialidades, datasets: [{ label: 'Casos', data: valores, backgroundColor: '#009FE3' }] },
    options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } },
  });

  const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];
  const scores = meses.map((_, idx) => 78 + idx * 3 + (idx % 2 === 0 ? 2 : -1));
  window.evoChart = new Chart(ctxLine, {
    type: 'line',
    data: { labels: meses, datasets: [{ label: 'Score global', data: scores, borderColor: '#003B5C', backgroundColor: 'rgba(0,159,227,0.2)' }] },
    options: { tension: 0.35, scales: { y: { suggestedMin: 70, suggestedMax: 100 } } },
  });

  window.radarChart = new Chart(ctxRadar, {
    type: 'radar',
    data: {
      labels: ['Anamnesis', 'Examen físico', 'Diagnóstico', 'Pertinencia', 'Indicaciones', 'Riesgo'],
      datasets: [{ label: 'Desempeño', data: [90, 86, 88, 92, 89, 85], backgroundColor: 'rgba(0,159,227,0.2)', borderColor: '#009FE3' }],
    },
    options: { scales: { r: { suggestedMin: 70, suggestedMax: 100 } } },
  });

  window.reconsultaChart = new Chart(ctxReconsulta, {
    type: 'bar',
    data: { labels: ['Cardio', 'Pediatría', 'Trauma', 'Derma', 'Oftalmo'], datasets: [{ label: 'Reconsulta 7 días (%)', data: [4, 3, 6, 2, 1], backgroundColor: '#003B5C' }] },
    options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, suggestedMax: 10 } } },
  });
}

// --- Auditoría ---
function initAuditOptions() {
  const filterDate = document.getElementById('filterDate');
  const filterCenter = document.getElementById('filterCenter');
  const filterCex = document.getElementById('filterCex');
  const select = document.getElementById('selectRecord');
  populateCenterFilter(filterCenter);
  renderRecordOptions();
  setupAuditSorting();

  filterDate.onchange = () => {
    auditFilters.date = normalizeDateValue(filterDate.value);
    renderRecordOptions();
    renderAuditAssignmentTable();
  };
  filterCenter.onchange = () => {
    auditFilters.center = filterCenter.value;
    renderRecordOptions();
    renderAuditAssignmentTable();
  };
  filterCex.oninput = () => {
    auditFilters.cex = filterCex.value;
    renderRecordOptions();
    renderAuditAssignmentTable();
  };

  select.addEventListener('change', () => {
    const admision = select.value;
    if (admision === '') {
      document.getElementById('recordDetails').innerHTML = '';
      document.getElementById('auditForm').innerHTML = '';
      currentRecord = null;
      updateAuditStatus();
      setAuditFormVisibility(false);
    } else {
      currentRecord = getRecordPool().find((r) => r.admision === admision);
      displayRecordDetails(currentRecord);
      renderAuditForm(currentRecord);
      restoreAudit(currentRecord);
      updateAuditStatus(currentRecord.admision);
    }
  });

  syncAuditFiltersToUI();
  renderAuditAssignmentTable();
}

function populateCenterFilter(selectEl) {
  const centers = Array.from(new Set(getRecordPool().map((r) => r.centro_medico)));
  selectEl.innerHTML = '';
  const allOpt = document.createElement('option');
  allOpt.value = 'all';
  allOpt.textContent = 'Todos';
  selectEl.appendChild(allOpt);
  centers.forEach((c) => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    selectEl.appendChild(opt);
  });
  selectEl.value = auditFilters.center;
}

function getFilteredAuditRecords() {
  return filterRecordsForUser(getRecordPool()).filter((r) => {
    const normalizedDate = normalizeDateValue(r.fecha_admision);
    const matchDate = auditFilters.date
      ? normalizeDateValue(normalizedDate) === normalizeDateValue(auditFilters.date)
      : true;
    const matchCenter = auditFilters.center === 'all' ? true : r.centro_medico === auditFilters.center;
    const matchCex = auditFilters.cex ? r.admision.toLowerCase().includes(auditFilters.cex.toLowerCase()) : true;
    return matchDate && matchCenter && matchCex;
  });
}

function renderRecordOptions() {
  const select = document.getElementById('selectRecord');
  if (!select) return;
  select.innerHTML = '';
  const defaultOpt = document.createElement('option');
  defaultOpt.value = '';
  defaultOpt.textContent = 'Seleccione';
  select.appendChild(defaultOpt);

  const filtered = getFilteredAuditRecords();

  filtered.forEach((r) => {
    const opt = document.createElement('option');
    opt.value = r.admision;
    opt.textContent = `${r.admision} · ${r.centro_medico} · ${r.fecha_admision}`;
    select.appendChild(opt);
  });

  if (currentRecord && filtered.some((r) => r.admision === currentRecord.admision)) {
    select.value = currentRecord.admision;
  }
}

function syncAuditFiltersToUI() {
  const filterDate = document.getElementById('filterDate');
  const filterCenter = document.getElementById('filterCenter');
  const filterCex = document.getElementById('filterCex');
  if (filterDate) filterDate.value = auditFilters.date;
  if (filterCenter) filterCenter.value = auditFilters.center;
  if (filterCex) filterCex.value = auditFilters.cex;
}

function setupAuditSorting() {
  document.querySelectorAll('.sort-btn').forEach((btn) => {
    btn.onclick = () => {
      auditSort = { column: btn.dataset.sortKey, direction: btn.dataset.sortDir };
      updateSortButtonState(btn);
      renderAuditAssignmentTable();
    };
  });
}

function updateSortButtonState(activeBtn = null) {
  document.querySelectorAll('.sort-btn').forEach((btn) => {
    const isActive =
      activeBtn === btn ||
      (auditSort.column === btn.dataset.sortKey && auditSort.direction === btn.dataset.sortDir);
    btn.classList.toggle('active', isActive);
  });
}

function getSortValue(item, column) {
  if (column === 'estado') return item.meta.label || '';
  if (column === 'fecha_admision') return normalizeDateValue(item.rec.fecha_admision);
  const value = item.rec[column];
  if (value === undefined || value === null) return '';
  return value.toString().toLowerCase();
}

function sortAuditRows(rows) {
  const ordered = [...rows];
  if (!auditSort.column) {
    const statusOrder = { pending: 0, draft: 1, done: 2 };
    return ordered.sort((a, b) => (statusOrder[a.meta.className] || 0) - (statusOrder[b.meta.className] || 0));
  }

  const dir = auditSort.direction === 'desc' ? -1 : 1;
  return ordered.sort((a, b) => {
    const valA = getSortValue(a, auditSort.column);
    const valB = getSortValue(b, auditSort.column);
    if (valA === valB) return 0;
    return valA.localeCompare(valB, 'es', { numeric: true }) * dir;
  });
}

function getAuditStatusMeta(admision) {
  const audit = audits[admision];
  if (!audit) return { label: 'Pendiente', className: 'pending', action: 'Gestionar' };
  if (audit.status === 'finalizada') return { label: 'Finalizada', className: 'done', action: 'Ver auditoría' };
  return { label: 'Borrador', className: 'draft', action: 'Continuar' };
}

function updateAuditSummary(total, pending, done) {
  const assignedChip = document.getElementById('auditAssignedChip');
  const pendingChip = document.getElementById('auditPendingChip');
  const doneChip = document.getElementById('auditDoneChip');
  if (assignedChip) assignedChip.textContent = `Asignadas: ${total}`;
  if (pendingChip) pendingChip.textContent = `Pendientes: ${pending}`;
  if (doneChip) doneChip.textContent = `Auditadas: ${done}`;
}

function renderAuditAssignmentTable() {
  const body = document.querySelector('#auditQueueTable tbody');
  if (!body) return;
  body.innerHTML = '';

  const filtered = getFilteredAuditRecords();
  let pendingCount = 0;
  let doneCount = 0;

  const rows = filtered.map((rec) => {
    const meta = getAuditStatusMeta(rec.admision);
    if (meta.className === 'done') doneCount += 1;
    else pendingCount += 1;
    return { rec, meta };
  });

  updateAuditSummary(filtered.length, pendingCount, doneCount);
  updateSortButtonState();

  if (!rows.length) {
    const tr = document.createElement('tr');
    tr.innerHTML = '<td colspan="9" class="muted">No hay historias asignadas con los filtros actuales.</td>';
    body.appendChild(tr);
    return;
  }

  sortAuditRows(rows).forEach(({ rec, meta }) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${normalizeDateValue(rec.fecha_admision)}</td>
      <td>${rec.centro_medico}</td>
      <td>${rec.especialidad}</td>
      <td>${rec.nombre_medico}</td>
      <td>${rec.admision}</td>
      <td>${rec.historia_clinica}</td>
      <td>${rec.nombres_completos}</td>
      <td><span class="status-pill ${meta.className}">${meta.label}</span></td>
      <td class="assign-cell"></td>
    `;
    const actionBtn = document.createElement('button');
    actionBtn.type = 'button';
    actionBtn.className = meta.className === 'done' ? 'secondary small' : 'primary small';
    actionBtn.textContent = meta.action;
    actionBtn.onclick = () => showAuditStartModal(rec, meta);
    tr.querySelector('.assign-cell').appendChild(actionBtn);
    body.appendChild(tr);
  });
}

function showAuditStartModal(record, meta = getAuditStatusMeta(record?.admision)) {
  if (!record) return;
  modalRecord = record;
  currentRecord = record;
  const modal = document.getElementById('auditStartModal');
  const title = document.getElementById('modalTitle');
  const summary = document.getElementById('modalSummary');
  if (title) title.textContent = meta?.className === 'done' ? 'Ver auditoría' : 'Gestionar auditoría';

  if (summary) {
    summary.innerHTML = `
      <div><span class="eyebrow">Paciente</span><strong>${record.nombres_completos}</strong></div>
      <div><span class="eyebrow">CEX</span><strong>${record.admision}</strong></div>
      <div><span class="eyebrow">Médico</span><strong>${record.nombre_medico}</strong></div>
      <div><span class="eyebrow">Centro</span><strong>${record.centro_medico}</strong></div>
      <div><span class="eyebrow">Fecha</span><strong>${record.fecha_admision}</strong></div>
      <div><span class="eyebrow">Estado</span><strong>${meta?.label || 'Pendiente'}</strong></div>
    `;
  }

  renderAuditForm(record);
  restoreAudit(record);
  updateAuditStatus(record.admision);
  modal?.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeAuditStartModal() {
  const modal = document.getElementById('auditStartModal');
  modalRecord = null;
  modal?.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

function openAuditFromTable(record) {
  if (!record) return;
  auditFilters = {
    date: record.fecha_admision,
    center: record.centro_medico,
    cex: record.admision,
  };
  syncAuditFiltersToUI();
  renderRecordOptions();
  const select = document.getElementById('selectRecord');
  if (select) {
    select.value = record.admision;
    select.dispatchEvent(new Event('change'));
  }
  showAuditStartModal(record);
}

function displayRecordDetails(record) {
  const container = document.getElementById('recordDetails');
  if (!record) return;
  container.innerHTML = `<h4>${record.especialidad}</h4><dl>
    <dt>Admisión</dt><dd>${record.admision}</dd>
    <dt>Médico</dt><dd>${record.nombre_medico}</dd>
    <dt>Centro</dt><dd>${record.centro_medico}</dd>
    <dt>Fecha</dt><dd>${record.fecha_admision}</dd>
  </dl>`;
}

function renderAuditForm(record) {
  const form = document.getElementById('auditForm');
  form.innerHTML = '';
  setAuditFormVisibility(true);
  SECTION_CONFIG.forEach((section) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'section';

    const header = document.createElement('header');
    const title = document.createElement('h4');
    title.textContent = section.title;
    const chips = document.createElement('div');
    chips.className = 'chips';
    chips.innerHTML = '<span class="chip">Cumple / No cumple</span><span class="chip">Autosave</span>';
    header.appendChild(title);
    header.appendChild(chips);
    wrapper.appendChild(header);

    const content = document.createElement('div');
    content.className = section.id === 'anamnesis' ? 'section-content anamnesis-grid' : 'section-content';
    section.criteriaIds.forEach((id) => {
      const crit = criteriaList.find((c) => c.id === id) || { name: id, description: '' };
      const row = document.createElement('div');
      row.className = 'criteria-row';

      const info = document.createElement('div');
      info.className = 'criteria-info';
      info.innerHTML = `<strong>${crit.name}</strong><p class="muted">${crit.description || ''}</p>`;
      row.appendChild(info);

      const actions = document.createElement('div');
      actions.className = 'quick-actions';
      ['1', '0'].forEach((val) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = val === '1' ? 'secondary' : 'danger';
        btn.textContent = val === '1' ? 'Cumple' : 'No cumple';
        btn.dataset.crit = id;
        btn.dataset.value = val;
        btn.onclick = () => handleAnswer(record, id, Number(val));
        actions.appendChild(btn);
      });
      row.appendChild(actions);
      content.appendChild(row);
    });
    wrapper.appendChild(content);
    form.appendChild(wrapper);
  });

  document.getElementById('saveAuditBtn').onclick = () => {
    saveAudit(record, 'borrador');
    closeAuditStartModal();
  };
  document.getElementById('finalizeAuditBtn').onclick = () => {
    saveAudit(record, 'finalizada');
    closeAuditStartModal();
  };
  const comments = document.getElementById('auditComments');
  comments.oninput = () => {
    const existing = audits[record.admision] || { respuestas: {}, status: 'borrador' };
    audits[record.admision] = { ...existing, comentarios: comments.value, fecha: new Date().toISOString() };
    persistAudits();
  };

  applyRestoredAnswers(record);
}

function handleAnswer(record, critId, value) {
  const existing = audits[record.admision] || { respuestas: {}, comentarios: '', status: 'borrador', fecha: new Date().toISOString() };
  existing.respuestas[critId] = value;
  audits[record.admision] = existing;
  persistAudits();
  updateAuditStatus(record.admision);
  renderSavedAuditsTable();
  highlightAnswer(critId, value);
}

function highlightAnswer(critId, value) {
  const buttons = document.querySelectorAll(`[data-crit="${critId}"]`);
  buttons.forEach((btn) => {
    const isSelected = btn.dataset.value === String(value);
    btn.classList.toggle('selected', isSelected);
    btn.classList.toggle('selected-positive', isSelected && btn.dataset.value === '1');
    btn.classList.toggle('selected-negative', isSelected && btn.dataset.value === '0');
    if (!isSelected) {
      btn.classList.remove('selected-positive', 'selected-negative');
    }
  });
}

function applyRestoredAnswers(record) {
  const data = audits[record.admision];
  if (!data) return;
  Object.entries(data.respuestas || {}).forEach(([critId, val]) => highlightAnswer(critId, val));
}

function saveAudit(record, status = 'borrador') {
  if (!record) return;
  const comentarios = document.getElementById('auditComments').value.trim();
  const respuestas = (audits[record.admision] && audits[record.admision].respuestas) || {};
  const { score } = computeAuditScore(respuestas);
  audits[record.admision] = {
    respuestas,
    comentarios,
    fecha: new Date().toISOString(),
    score: score.toFixed(2),
    status,
  };
  persistAudits();
  updateAuditStatus(record.admision);
  renderSavedAuditsTable();
  renderMedicoProfiles();
  renderAuditAssignmentTable();
  alert(status === 'finalizada' ? 'Auditoría finalizada' : 'Borrador guardado con autosave');
}

function restoreAudit(record) {
  const data = audits[record.admision];
  document.getElementById('auditComments').value = data?.comentarios || '';
  updateProgress(record.admision);
}

function setAuditFormVisibility(show) {
  if (!show) {
    closeAuditStartModal();
  }
}

function updateAuditStatus(admision) {
  const statusEl = document.getElementById('auditStatus');
  const scoreEl = document.getElementById('auditScore');
  const statusModal = document.getElementById('auditStatusModal');
  const scoreModal = document.getElementById('auditScoreModal');
  if (!admision || !audits[admision]) {
    [statusEl, statusModal].forEach((el) => {
      if (el) {
        el.textContent = 'Sin iniciar';
        el.className = 'pill pending';
      }
    });
    [scoreEl, scoreModal].forEach((el) => {
      if (el) el.textContent = '—';
    });
    document.getElementById('progressBar').style.width = '0%';
    return;
  }
  const audit = audits[admision];
  const { score, total, totalPosibles } = computeAuditScore(audit.respuestas);
  const scoreLabel = Number.isFinite(score) ? score.toFixed(2) : '0.00';
  [scoreEl, scoreModal].forEach((el) => {
    if (el) el.textContent = `${scoreLabel}%`;
  });
  const badge = audit.status === 'finalizada' ? 'done' : 'draft';
  [statusEl, statusModal].forEach((el) => {
    if (el) {
      el.className = `pill ${badge}`;
      el.textContent = audit.status === 'finalizada' ? 'Finalizada' : 'Borrador';
    }
  });
  const pct = totalPosibles > 0 ? (total / totalPosibles) * 100 : 0;
  document.getElementById('progressBar').style.width = `${pct}%`;
}

function updateProgress(admision) {
  const audit = audits[admision];
  if (!audit) return;
  const { total, totalPosibles } = computeAuditScore(audit.respuestas);
  const pct = totalPosibles > 0 ? (total / totalPosibles) * 100 : 0;
  document.getElementById('progressBar').style.width = `${pct}%`;
}

function renderSavedAuditsTable() {
  const tbody = document.querySelector('#savedAuditsTable tbody');
  tbody.innerHTML = '';
  Object.entries(audits).forEach(([admision, data]) => {
    const tr = document.createElement('tr');
    const computed = computeAuditScore(data.respuestas);
    const scoreLabel = Number.isFinite(computed.score)
      ? computed.score.toFixed(2)
      : Number(data.score || 0).toFixed(2);
    const fecha = new Date(data.fecha).toLocaleString('es-EC');
    tr.innerHTML = `<td>${admision}</td><td>${scoreLabel}%</td><td>${data.status || 'borrador'}</td><td>${fecha}</td>`;
    const actionsTd = document.createElement('td');
    const resumeBtn = document.createElement('button');
    resumeBtn.className = 'secondary';
    resumeBtn.textContent = 'Abrir';
    resumeBtn.onclick = () => {
      const idx = getRecordPool().findIndex((r) => r.admision === admision);
      if (idx >= 0) {
        auditFilters = { date: '', center: 'all', cex: '' };
        syncAuditFiltersToUI();
        populateCenterFilter(document.getElementById('filterCenter'));
        renderRecordOptions();
        document.getElementById('selectRecord').value = admision;
        document.getElementById('selectRecord').dispatchEvent(new Event('change'));
        const rec = getRecordPool()[idx];
        showAuditStartModal(rec, getAuditStatusMeta(admision));
      }
    };
    const delBtn = document.createElement('button');
    delBtn.className = 'danger';
    delBtn.textContent = 'Eliminar';
    delBtn.onclick = () => {
      if (confirm('¿Desea eliminar esta auditoría?')) {
        delete audits[admision];
        persistAudits();
        renderSavedAuditsTable();
        renderMedicoProfiles();
      }
    };
    actionsTd.appendChild(resumeBtn);
    actionsTd.appendChild(delBtn);
    tr.appendChild(actionsTd);
    tbody.appendChild(tr);
  });
}

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

function persistAudits() {
  localStorage.setItem('audits', JSON.stringify(audits));
  renderAuditAssignmentTable();
}

// --- Médicos ---
function renderMedicoProfiles() {
  const grid = document.getElementById('medicoGrid');
  grid.innerHTML = '';
  const medicos = {};
  arcData.forEach((r) => {
    if (!medicos[r.nombre_medico]) {
      medicos[r.nombre_medico] = { especialidad: r.especialidad, centro: r.centro_medico, ciudad: 'Quito', auditorias: [] };
    }
  });
  Object.entries(audits).forEach(([admision, audit]) => {
    const record = arcData.find((r) => r.admision === admision);
    if (record && medicos[record.nombre_medico]) {
      const computed = computeAuditScore(audit.respuestas);
      medicos[record.nombre_medico].auditorias.push({
        score: Number.isFinite(computed.score) ? computed.score : Number(audit.score) || 0,
        pesoTotal: 1,
        estado: audit.status,
      });
    }
  });

  Object.entries(medicos).forEach(([nombre, info]) => {
    const scoreGlobal = calcularScoreMedico(info.auditorias);
    const sem = semaforo(scoreGlobal || 0);
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-header"><div><p class="eyebrow">${info.centro} · ${info.ciudad}</p><h3>${nombre}</h3><p class="meta">${info.especialidad}</p></div><div class="pill ${sem.className}">${sem.label}</div></div>
      <div class="medico-card">
        <div>
          <p class="muted">Score global</p>
          <div class="kpi-value">${scoreGlobal ? scoreGlobal.toFixed(1) : '—'}%</div>
          <small>${info.auditorias.length} historias auditadas</small>
        </div>
        <div class="scores">
          <div class="score"><strong>Anamnesis</strong><br /><span>${(scoreGlobal || 0) - 2}%</span></div>
          <div class="score"><strong>Examen físico</strong><br /><span>${(scoreGlobal || 0) - 1}%</span></div>
          <div class="score"><strong>Diagnóstico</strong><br /><span>${(scoreGlobal || 0) + 1}%</span></div>
          <div class="score"><strong>Pertinencia</strong><br /><span>${(scoreGlobal || 0)}%</span></div>
          <div class="score"><strong>Indicaciones</strong><br /><span>${(scoreGlobal || 0) - 3}%</span></div>
          <div class="score"><strong>Riesgo legal</strong><br /><span>${(scoreGlobal || 0) - 4}%</span></div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// --- Navegación y roles ---
function setupNavigation() {
  document.querySelectorAll('.main-nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (!isAuthenticated || !currentRole) return;
      const section = link.dataset.section;
      if (!ROLES[currentRole]?.includes(section)) return;
      showSection(section);
    });
  });
}

function showSection(id) {
  if (!isAuthenticated) return;
  document.querySelectorAll('main .panel').forEach((sec) => sec.classList.remove('visible'));
  const target = document.getElementById(id);
  if (target) target.classList.add('visible');
  document.querySelectorAll('.main-nav a').forEach((link) => link.classList.toggle('active', link.dataset.section === id));
  if (id === 'audit') {
    renderAuditAssignmentTable();
    setAuditFormVisibility(!!currentRecord);
  }
}

function initRoleSelector() {
  const select = document.getElementById('roleSelect');
  select.disabled = true;
}

function enforceSession() {
  const session = readSession();
  if (!session) {
    window.location.href = 'login.html';
    return;
  }
  isAuthenticated = true;
  currentRole = session.role;
  currentUser = session.username;
  const roleSelect = document.getElementById('roleSelect');
  const activeUserLabel = document.getElementById('activeUserLabel');
  const roleBadge = document.getElementById('roleBadge');
  if (roleSelect) roleSelect.value = currentRole;
  if (activeUserLabel) activeUserLabel.textContent = `Usuario: ${session.username}`;
  if (roleBadge) roleBadge.textContent = currentRole;

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.onclick = () => {
      clearSession();
      window.location.href = 'login.html';
    };
  }
}

function updateNavigationByRole() {
  const roleSelect = document.getElementById('roleSelect');
  if (!isAuthenticated || !currentRole) {
    document.querySelectorAll('.main-nav a').forEach((link) => (link.style.display = 'none'));
    return;
  }
  if (roleSelect && roleSelect.value !== currentRole) roleSelect.value = currentRole;
  document.querySelectorAll('.main-nav a').forEach((link) => {
    const section = link.dataset.section;
    const allowed = ROLES[currentRole]?.includes(section);
    link.style.display = allowed ? 'inline-flex' : 'none';
  });
  const firstAllowed = document.querySelector('.main-nav a[style*="inline-flex"], .main-nav a:not([style])');
  if (firstAllowed) firstAllowed.click();
}

// --- Estratificación de muestra ---
function getAuditors() {
  return Object.entries(USER_CATALOG)
    .filter(([, u]) => u.role === 'auditor')
    .map(([username]) => username);
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function computeSampleSize(total) {
  if (!total) return 0;
  const z = 1.96;
  const p = 0.5;
  const e = 0.05;
  const numerator = Math.pow(z, 2) * p * (1 - p) * total;
  const denominator = Math.pow(e, 2) * (total - 1) + Math.pow(z, 2) * p * (1 - p);
  const n = denominator === 0 ? 0 : numerator / denominator;
  return Math.min(total, Math.round(n));
}

function classifyStratum(count) {
  if (count > 3000) return 1;
  if (count >= 1000) return 2;
  return 3;
}

function allocateStratumSamples(strata, totalSample, totalPopulation) {
  const allocations = strata.map((s) => {
    const raw = totalPopulation ? (s.population / totalPopulation) * totalSample : 0;
    const base = Math.floor(raw);
    return {
      id: s.id,
      base,
      remainder: raw - base,
      min: s.specialties.length,
    };
  });

  let assigned = allocations.reduce((sum, a) => sum + a.base, 0);
  let remaining = totalSample - assigned;

  allocations.sort((a, b) => b.remainder - a.remainder);
  let idx = 0;
  while (remaining > 0 && allocations.length > 0) {
    allocations[idx % allocations.length].base += 1;
    remaining -= 1;
    idx += 1;
  }

  allocations.sort((a, b) => a.id - b.id);
  allocations.forEach((a) => {
    if (a.base < a.min) a.base = a.min;
  });

  let totalNow = allocations.reduce((sum, a) => sum + a.base, 0);
  if (totalNow > totalSample) {
    let toRemove = totalNow - totalSample;
    const adjustable = allocations.filter((a) => a.base > a.min).sort((a, b) => b.base - a.base);
    let pointer = 0;
    while (toRemove > 0 && adjustable.length > 0) {
      const target = adjustable[pointer % adjustable.length];
      if (target.base > target.min) {
        target.base -= 1;
        toRemove -= 1;
      }
      pointer += 1;
    }
  }

  return allocations.map((a) => ({ id: a.id, sample: a.base }));
}

function allocateSpecialties(stratum, targetSample) {
  if (!stratum.population || stratum.specialties.length === 0) return [];
  const baseAllocations = stratum.specialties.map((spec) => {
    const raw = stratum.population ? (spec.count / stratum.population) * targetSample : 0;
    let base = Math.floor(raw);
    let remainder = raw - base;
    if (base < 1) {
      remainder = raw - 1;
      base = 1;
    }
    return { ...spec, base, remainder };
  });

  let assigned = baseAllocations.reduce((sum, a) => sum + a.base, 0);
  let remaining = targetSample - assigned;

  if (remaining > 0) {
    baseAllocations.sort((a, b) => b.remainder - a.remainder);
    let idx = 0;
    while (remaining > 0 && baseAllocations.length > 0) {
      baseAllocations[idx % baseAllocations.length].base += 1;
      remaining -= 1;
      idx += 1;
    }
  } else if (remaining < 0) {
    baseAllocations.sort((a, b) => b.base - a.base);
    while (remaining < 0) {
      const target = baseAllocations.find((item) => item.base > 1);
      if (!target) break;
      target.base -= 1;
      remaining += 1;
    }
  }

  return baseAllocations.map((item) => ({
    especialidad: item.name,
    stratum: stratum.id,
    population: item.count,
    sample: item.base,
  }));
}

function buildSampleAssignments() {
  if (!stratificationResult || !stratificationResult.specialties?.length) return [];
  const selected = [];
  const pool = shuffle(arcData);
  const used = new Set();

  stratificationResult.specialties.forEach((spec) => {
    const matches = pool.filter((r) => r.especialidad === spec.especialidad);
    if (!matches.length) return;
    const picks = shuffle(matches).slice(0, spec.sample);
    picks.forEach((r) => {
      if (used.has(r.admision)) return;
      used.add(r.admision);
      selected.push({
        ...r,
        assignedAuditor: null,
      });
    });
  });

  return selected;
}

function assignRandomly() {
  if (!stratificationResult || !stratificationResult.sample) {
    setUploadStatus('Calcule la muestra antes de asignar historias.', 'error');
    return;
  }
  const auditors = getAuditors();
  if (!auditors.length) {
    setUploadStatus('No hay usuarios con rol auditor para asignar.', 'error');
    return;
  }

  const sampleRecords = buildSampleAssignments();
  if (!sampleRecords.length) {
    setUploadStatus('No se encontraron registros para la muestra calculada.', 'error');
    return;
  }

  const shuffledAuditors = shuffle(auditors);
  sampleRecords.forEach((rec, idx) => {
    rec.assignedAuditor = shuffledAuditors[idx % shuffledAuditors.length];
  });

  assignments = sampleRecords;
  assignmentSearchTerm = '';
  const searchAssignments = document.getElementById('assignmentSearch');
  if (searchAssignments) searchAssignments.value = '';
  saveAssignments();
  renderAssignmentsTable();
  initAuditOptions();
  setUploadStatus(`Historias asignadas aleatoriamente a ${auditors.length} auditor(es).`, 'success');
}

function calculateStratification() {
  const summaryBlock = document.getElementById('stratSummary');
  if (!summaryBlock) return;

  const totalAtenciones = arcData.length;
  if (!totalAtenciones) {
    document.getElementById('stratTotal').textContent = '—';
    document.getElementById('stratSample').textContent = '—';
    document.getElementById('stratEspecialidades').textContent = '—';
    document.getElementById('strataGrid').innerHTML = '';
    document.querySelector('#strataTable tbody').innerHTML = '';
    document.getElementById('stratNote').textContent = 'Cargue una plantilla ARC completa para calcular la muestra.';
    return;
  }

  const specialtyCounts = {};
  arcData.forEach((r) => {
    const key = r.especialidad || 'Sin especialidad';
    specialtyCounts[key] = (specialtyCounts[key] || 0) + 1;
  });

  const specialties = Object.entries(specialtyCounts).map(([name, count]) => ({
    name,
    count,
    stratum: classifyStratum(count),
  }));

  const populationTotal = specialties.reduce((sum, s) => sum + s.count, 0);
  const sampleSize = computeSampleSize(populationTotal);

  const strata = [
    { id: 1, label: 'Estrato 1', range: '>3000 registros', population: 0, specialties: [] },
    { id: 2, label: 'Estrato 2', range: '1000-2999 registros', population: 0, specialties: [] },
    { id: 3, label: 'Estrato 3', range: '<1000 registros', population: 0, specialties: [] },
  ];

  specialties.forEach((spec) => {
    const target = strata[spec.stratum - 1];
    target.population += spec.count;
    target.specialties.push(spec);
  });

  const stratumAllocations = allocateStratumSamples(strata, sampleSize, populationTotal);
  const specialtyAllocations = [];
  stratumAllocations.forEach((alloc) => {
    const stratum = strata.find((s) => s.id === alloc.id);
    if (stratum) {
      stratum.sample = alloc.sample;
      const results = allocateSpecialties(stratum, alloc.sample);
      specialtyAllocations.push(...results);
    }
  });

  stratificationResult = {
    total: populationTotal,
    sample: sampleSize,
    specialties: specialtyAllocations,
    strata,
  };

  renderStratification(stratificationResult);
  renderAssignmentsTable();
}

function renderStratification(result) {
  if (!result) return;
  const { total, sample, specialties, strata } = result;

  document.getElementById('stratTotal').textContent = total.toLocaleString('es-ES');
  document.getElementById('stratSample').textContent = sample.toLocaleString('es-ES');
  document.getElementById('stratEspecialidades').textContent = specialties.length ? specialties.length.toString() : '0';

  const strataGrid = document.getElementById('strataGrid');
  strataGrid.innerHTML = '';
  strata
    .filter((s) => s.population > 0)
    .forEach((s) => {
      const card = document.createElement('div');
      card.className = 'strata-card';
      card.innerHTML = `
        <p class="eyebrow">${s.label}</p>
        <h4>${s.range}</h4>
        <div class="pill sm">Población: ${s.population.toLocaleString('es-ES')}</div>
        <div class="pill sm">Muestra: ${s.sample?.toLocaleString('es-ES') || '0'}</div>
        <span class="muted">Especialidades: ${s.specialties.length}</span>
      `;
      strataGrid.appendChild(card);
    });

  const tbody = document.querySelector('#strataTable tbody');
  tbody.innerHTML = '';
  specialties
    .sort((a, b) => {
      if (a.stratum !== b.stratum) return a.stratum - b.stratum;
      return b.population - a.population;
    })
    .forEach((spec) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${spec.especialidad}</td>
        <td>Estrato ${spec.stratum}</td>
        <td>${spec.population.toLocaleString('es-ES')}</td>
        <td>${spec.sample.toLocaleString('es-ES')}</td>
      `;
      tbody.appendChild(tr);
    });

  const totalAssigned = specialties.reduce((sum, s) => sum + s.sample, 0);
  const noteEl = document.getElementById('stratNote');
  if (totalAssigned === sample) {
    noteEl.textContent = 'Muestra proporcional redondeada; se garantiza al menos una historia por especialidad sin exceder n.';
  } else {
    noteEl.textContent = `Se ajustó la distribución para mantener enteros. Total asignado: ${totalAssigned} (n=${sample}).`;
  }
}

function renderAssignmentsTable() {
  const table = document.getElementById('assignmentTable');
  if (!table) return;
  const tbody = table.querySelector('tbody');
  tbody.innerHTML = '';

  document.getElementById('assignmentTotal').textContent = assignments.length ? assignments.length.toString() : '0';
  const auditors = getAuditors();
  renderAssignmentSummary();

  const term = assignmentSearchTerm.trim().toLowerCase();
  const filtered = term
    ? assignments.filter((rec) => {
        const haystack = [
          rec.nombres_completos,
          rec.nombre_medico,
          rec.admision,
          rec.fecha_admision,
          rec.centro_medico,
        ]
          .filter(Boolean)
          .map((v) => v.toString().toLowerCase());
        return haystack.some((val) => val.includes(term));
      })
    : assignments;

  if (!filtered.length) {
    const tr = document.createElement('tr');
    tr.innerHTML = '<td colspan="8" class="muted">Genere asignaciones desde la muestra estratificada o ajuste el filtro de búsqueda.</td>';
    tbody.appendChild(tr);
    return;
  }

  filtered.forEach((rec, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${rec.fecha_admision}</td>
      <td>${rec.centro_medico}</td>
      <td>${rec.especialidad}</td>
      <td>${rec.nombre_medico}</td>
      <td>${rec.admision}</td>
      <td>${rec.historia_clinica}</td>
      <td>${rec.nombres_completos}</td>
      <td class="assign-cell"></td>
    `;
    const select = document.createElement('select');
    select.dataset.admision = rec.admision;
    auditors.forEach((a) => {
      const opt = document.createElement('option');
      opt.value = a;
      opt.textContent = a;
      select.appendChild(opt);
    });
    if (!auditors.includes(rec.assignedAuditor)) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = 'Sin asignar';
      select.prepend(opt);
    }
    select.value = rec.assignedAuditor || '';
    select.addEventListener('change', (e) => {
        const target = assignments.find((a) => a.admision === rec.admision);
        if (target) {
          target.assignedAuditor = e.target.value;
          saveAssignments();
          initAuditOptions();
          renderAuditAssignmentTable();
        }
      });
    tr.querySelector('.assign-cell').appendChild(select);
    tbody.appendChild(tr);
  });
}

function renderAssignmentSummary() {
  const container = document.getElementById('assignmentSummary');
  if (!container) return;
  container.innerHTML = '';

  if (!assignments.length) {
    const span = document.createElement('span');
    span.className = 'muted';
    span.textContent = 'Sin asignaciones generadas.';
    container.appendChild(span);
    return;
  }

  const counts = assignments.reduce((acc, item) => {
    const key = item.assignedAuditor || 'Sin asignar';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  Object.entries(counts).forEach(([auditor, count]) => {
    const pill = document.createElement('span');
    pill.className = 'pill sm';
    pill.textContent = `${auditor}: ${count}`;
    container.appendChild(pill);
  });
}

function setUploadStatus(message, type = 'info') {
  const banner = document.getElementById('uploadStatus');
  if (!banner) return;
  banner.textContent = message;
  banner.className = `status-banner ${type}`;
}

function downloadArcTemplate() {
  const headerRow = ARC_TEMPLATE_COLUMNS.map((c) => c.header);
  const sample = EMBEDDED_ARC_DATA.slice(0, 3).map((row) => ARC_TEMPLATE_COLUMNS.map((c) => row[c.key] || ''));
  const ws = XLSX.utils.aoa_to_sheet([headerRow, ...sample]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'ARC');
  XLSX.writeFile(wb, 'plantilla_arc.xlsx');
  setUploadStatus('Plantilla de ARC descargada. Complete las columnas requeridas y cargue el archivo actualizado.', 'info');
}

function parseArcExcel(file, label) {
  setUploadStatus('Procesando archivo de ARC...', 'info');
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const workbook = XLSX.read(new Uint8Array(ev.target.result), { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      if (!sheetName) {
        setUploadStatus('El archivo no contiene hojas.', 'error');
        return;
      }
      const sheet = workbook.Sheets[sheetName];
      const rows = XLSX.utils.sheet_to_json(sheet, { defval: '', raw: false });
      if (!rows.length) {
        setUploadStatus('La hoja está vacía.', 'error');
        return;
      }

      const headers = Object.keys(rows[0]);
      const missing = ARC_TEMPLATE_COLUMNS.filter((col) => !headers.includes(col.header));
      if (missing.length) {
        setUploadStatus(`Formato inválido. Faltan columnas: ${missing.map((m) => m.header).join(', ')}.`, 'error');
        return;
      }

      const parsed = rows
        .map((row) => {
          const entry = {};
          ARC_TEMPLATE_COLUMNS.forEach((col) => {
            const rawValue = row[col.header] || '';
            entry[col.key] = col.key === 'fecha_admision' ? normalizeDateValue(rawValue) : rawValue.toString().trim();
          });
          return normalizeArcRecord(entry);
        })
        .filter((item) => ARC_TEMPLATE_COLUMNS.every((col) => item[col.key]));

      if (!parsed.length) {
        setUploadStatus('No se encontraron registros válidos tras validar las columnas requeridas.', 'error');
        return;
      }

      arcData = parsed;
      assignments = [];
      assignmentSearchTerm = '';
      const searchAssignments = document.getElementById('assignmentSearch');
      if (searchAssignments) searchAssignments.value = '';
      saveAssignments();
      initDashboard();
      initAuditOptions();
      renderMedicoProfiles();
      calculateStratification();
      renderAssignmentsTable();
      setUploadStatus(`${label} cargada correctamente (${parsed.length} registros).`, 'success');
    } catch (err) {
      setUploadStatus(`No se pudo leer el archivo Excel: ${err.message}`, 'error');
    }
  };
  reader.readAsArrayBuffer(file);
}

// --- Admin uploads ---
function initAdminUploads() {
  const arcInput = document.getElementById('uploadArc');
  if (arcInput) {
    arcInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      if (!/\.xlsx$/i.test(file.name)) {
        setUploadStatus('Formato no soportado. Cargue un archivo Excel (.xlsx).', 'error');
        return;
      }
      parseArcExcel(file, 'Base ARC');
    });
  }

  const templateBtn = document.getElementById('downloadTemplateBtn');
  if (templateBtn) templateBtn.onclick = downloadArcTemplate;

  const recalcBtn = document.getElementById('recalcStratBtn');
  if (recalcBtn) recalcBtn.onclick = calculateStratification;

  const recalcFooter = document.getElementById('recalcStratBtnFooter');
  if (recalcFooter) recalcFooter.onclick = calculateStratification;

  const assignBtn = document.getElementById('assignRandomBtn');
  if (assignBtn) assignBtn.onclick = assignRandomly;

  const searchAssignments = document.getElementById('assignmentSearch');
  if (searchAssignments) {
    searchAssignments.addEventListener('input', (e) => {
      assignmentSearchTerm = e.target.value || '';
      renderAssignmentsTable();
    });
  }

  initAuditModal();
}

function initAuditModal() {
  const closeBtn = document.getElementById('closeModalBtn');
  const backdrop = document.querySelector('#auditStartModal .modal-backdrop');

  [closeBtn, backdrop].forEach((el) => {
    if (el) el.addEventListener('click', closeAuditStartModal);
  });
}

// --- Eventos iniciales ---
document.addEventListener('DOMContentLoaded', () => {
  enforceSession();
  setupNavigation();
  initRoleSelector();
  updateNavigationByRole();
  initAdminUploads();
  document.getElementById('exportAuditsBtn').addEventListener('click', exportAudits);
  if (isAuthenticated) {
    loadInitialData().then(() => {
      dataLoaded = true;
      updateNavigationByRole();
    });
  }
});
