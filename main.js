// Auditoría Médica Metrored – experiencia profesional con roles, KPIs y flujo de auditoría.

// Datos incrustados como respaldo. Si la carga por fetch falla (por ejemplo, al abrir mediante file://),
// estos datos se utilizarán como fuente de datos.
const EMBEDDED_ARC_DATA = [{"fecha_admision": "2025-10-27", "centro_medico": "CM KENNEDY", "especialidad": "GASTROENTEROLOGIA",
"nombre_medico": "KAREN DENISSE FRANCO AGUILAR", "admision": "CEX012-10-002008588", "historia_clinica": 954359279, "nombres_completos": "DAYANA RAFAELA VERGARA ZAMORA"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM KENNEDY", "especialidad": "GASTROENTEROLOGIA", "nombre_medico": "KAREN DENISSE FRANCO AGUILAR", "admision": "CEX012-10-002002905", "historia_clinica": 926529579, "nombres_completos": "VANESSA ELIZABETH SANCHEZ YAGUAL"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM KENNEDY", "especialidad": "GASTROENTEROLOGIA", "nombre_medico": "KAREN DENISSE FRANCO AGUILAR", "admision": "CEX012-10-002004679", "historia_clinica": 923981500, "nombres_completos": "KAREN ALEXANDRA ROSADO GONZALEZ"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "MARIA JOSE IZQUIERDO PALOMEQUE", "admision": "CEX012-10-002004350", "historia_clinica": 1700603721, "nombres_completos": "JOSE RAFAEL ACOSTA USCA"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "MARIA JOSE IZQUIERDO PALOMEQUE", "admision": "CEX012-10-001997766", "historia_clinica": 1711880417, "nombres_completos": "MARIA FERNANDA ALVAREZ SANDOVAL"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "MARIA JOSE IZQUIERDO PALOMEQUE", "admision": "CEX012-10-002004123", "historia_clinica": 1752210862, "nombres_completos": "ESTEBAN SEBASTIAN RIVERA SILVA"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "MARIA JOSE IZQUIERDO PALOMEQUE", "admision": "CEX012-10-002003802", "historia_clinica": 1715438154, "nombres_completos": "LAURA GABRIELA MOLINA BURBANO"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "JOSE ALBERTO GARCES GUEVARA", "admision": "CEX012-10-002002677", "historia_clinica": 1753667839, "nombres_completos": "DOMINIQUE ALEJANDRA AVILA NAZATE"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "JOSE ALBERTO GARCES GUEVARA", "admision": "CEX012-10-002002225", "historia_clinica": 1721683520, "nombres_completos": "MARÍA JOSE CARRERA ALAVA"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM PLAZA DE TOROS", "especialidad": "REUMATOLOGIA", "nombre_medico": "NIVI MARIA GARCIA GARCIA", "admision": "CEX012-10-002003746", "historia_clinica": 1712481637, "nombres_completos": "JORGE ANTONIO AVALOS JACOME"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM PLAZA DE TOROS", "especialidad": "DERMATOLOGIA", "nombre_medico": "ANALIA KARINA PASQUEL SOTELO", "admision": "CEX012-10-002000141", "historia_clinica": 1710060706, "nombres_completos": "ANDRES EDUARDO TORRES FERNANDEZ"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM PLAZA DE TOROS", "especialidad": "REUMATOLOGIA", "nombre_medico": "NIVI MARIA GARCIA GARCIA", "admision": "CEX012-10-002008533", "historia_clinica": 1704149739, "nombres_completos": "BEATRIZ MERCEDES TORRES VIZCAINO"}];

const EMBEDDED_CRITERIA = [{"id": "C1", "name": "CENTRO", "description": "Unidad de atención"}, {"id": "C2", "name": "ESPECIALIDAD", "description": "Servicio en que se atendió"}, {"id": "C3", "name": "FECHA", "description": "Mes"}, {"id": "C4", "name": "ADMISION", "description": "Código de admisión"}, {"id": "C5", "name": "DATOS", "description": "Se escribe los datos de consulta según la especialidad respectiva"}, {"id": "C6", "name": "SIGNOS", "description": "Signos vitales registrados completos y adecuados para la edad"}, {"id": "C7", "name": "APP", "description": "Presencia de registro de antecedentes personales relevantes"}, {"id": "C8", "name": "APF", "description": "Presencia de registro tanto positivo como negativo de antecedentes familiares relevantes"}, {"id": "C9", "name": "ALERGIAS", "description": "Presencia de registro de antecedentes de alergias"}, {"id": "C10", "name": "MOTIVO DE CONSULTA", "description": "Registro del motivo por el que el paciente acude a pedir atención médica"}, {"id": "C11", "name": "EA", "description": "Descripción de la evolución y detalles de los síntomas y/ o signos descritos en el motivo de consulta y los hallazgos en el interrogatorio, Se incluyen datos positivos y negativos,  Valoración del dolor"}, {"id": "C13", "name": "RAS", "description": "Describe signos y síntomas extras al motivo de consulta y forman parte importante en el diagnóstico"}, {"id": "C14", "name": "EF", "description": "Descripción clara y especifica de hallazgos en el  examen físico- registro datos negativos importantes para el diagnóstico diferencial"}, {"id": "C15", "name": "HISTORIA CONSISTENTE", "description": "Se evalúa la estructura global de la redacción de la historia clínica buscando la consistencia interna entre síntomas y signos explorados con el motivo de consulta presentado"}, {"id": "C16", "name": "RIESGO LEGAL", "description": "Se evalúa si la información presente en la historia, en caso de presentarse alguna queja, contenga vacíos que puedan presentar riesgo dejando espacio libre para especulaciones o que no evidencie lo actuado"}, {"id": "C17", "name": "DG", "description": "Se analiza la hipótesis diagnostica más probable considerando de manera integral la clínica, los factores de riesgo y la situación del contexto del paciente"}, {"id": "C18", "name": "LAB", "description": "Los exámenes prescritos se soportan tanto en evidencia clínica como científica"}, {"id": "C19", "name": "IMAGEN / PROCEDIMIENTO", "description": "Los exámenes prescritos se soportan tanto en evidencia clínica como científica"}, {"id": "C20", "name": "RP", "description": "La decisión de la prescripción terapéutica es adecuada y esta soportada en evidencia científica"}, {"id": "C21", "name": "INDICACIONES COMPLETAS", "description": "Indicaciones completas y claras sin espacios de confusión para el paciente, dosificación, horarios, tiempo de tratamiento"}, {"id": "C22", "name": "PRESCRIPCIÓN DE HÁBITOS Y ASESORÍA EN SALUD", "description": "La prescripción cuenta con recomendaciones de hábitos saludables y no farmacológicos, así como aspectos de prevención y promoción de la salud"}];

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

let arcData = [];
let criteriaList = [];
let audits = {};
let currentRole = null;
let isAuthenticated = false;
let dataLoaded = false;
let currentRecord = null;
let auditFilters = { date: "", center: "all", cex: "" };
const SESSION_KEY = 'metroredSession';

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

// Utilidades de puntaje
function calcularScoreMedico(auditorias) {
  const totalPeso = auditorias.reduce((sum, a) => sum + (a.pesoTotal || 1), 0);
  const totalScore = auditorias.reduce((sum, a) => sum + (Number(a.score) || 0) * (a.pesoTotal || 1), 0);
  return totalPeso === 0 ? 0 : totalScore / totalPeso;
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
  if (!Array.isArray(arcData) || arcData.length === 0) arcData = EMBEDDED_ARC_DATA;
  if (!Array.isArray(criteriaList) || criteriaList.length === 0) criteriaList = EMBEDDED_CRITERIA;

  initDashboard();
  initAuditOptions();
  renderSavedAuditsTable();
  renderMedicoProfiles();
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

  filterDate.onchange = () => {
    auditFilters.date = filterDate.value;
    renderRecordOptions();
  };
  filterCenter.onchange = () => {
    auditFilters.center = filterCenter.value;
    renderRecordOptions();
  };
  filterCex.oninput = () => {
    auditFilters.cex = filterCex.value;
    renderRecordOptions();
  };

  select.addEventListener('change', () => {
    const admision = select.value;
    if (admision === '') {
      document.getElementById('recordDetails').innerHTML = '';
      document.getElementById('auditForm').innerHTML = '';
      currentRecord = null;
      updateAuditStatus();
    } else {
      currentRecord = arcData.find((r) => r.admision === admision);
      displayRecordDetails(currentRecord);
      renderAuditForm(currentRecord);
      restoreAudit(currentRecord);
      updateAuditStatus(currentRecord.admision);
    }
  });

  syncAuditFiltersToUI();
}

function populateCenterFilter(selectEl) {
  const centers = Array.from(new Set(arcData.map((r) => r.centro_medico)));
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

function renderRecordOptions() {
  const select = document.getElementById('selectRecord');
  select.innerHTML = '';
  const defaultOpt = document.createElement('option');
  defaultOpt.value = '';
  defaultOpt.textContent = 'Seleccione';
  select.appendChild(defaultOpt);

  const filtered = arcData.filter((r) => {
    const matchDate = auditFilters.date ? r.fecha_admision === auditFilters.date : true;
    const matchCenter = auditFilters.center === 'all' ? true : r.centro_medico === auditFilters.center;
    const matchCex = auditFilters.cex ? r.admision.toLowerCase().includes(auditFilters.cex.toLowerCase()) : true;
    return matchDate && matchCenter && matchCex;
  });

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

  document.getElementById('saveAuditBtn').onclick = () => saveAudit(record, 'borrador');
  document.getElementById('finalizeAuditBtn').onclick = () => saveAudit(record, 'finalizada');
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
  const total = Object.values(respuestas).reduce((sum, v) => sum + Number(v), 0);
  const totalPosibles = criteriaList.length;
  const score = totalPosibles > 0 ? (total / totalPosibles) * 100 : 0;
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
  alert(status === 'finalizada' ? 'Auditoría finalizada' : 'Borrador guardado con autosave');
}

function restoreAudit(record) {
  const data = audits[record.admision];
  document.getElementById('auditComments').value = data?.comentarios || '';
  updateProgress(record.admision);
}

function updateAuditStatus(admision) {
  const statusEl = document.getElementById('auditStatus');
  const scoreEl = document.getElementById('auditScore');
  if (!admision || !audits[admision]) {
    statusEl.textContent = 'Sin iniciar';
    statusEl.className = 'pill pending';
    scoreEl.textContent = '—';
    document.getElementById('progressBar').style.width = '0%';
    return;
  }
  const audit = audits[admision];
  const total = Object.values(audit.respuestas || {}).length;
  const totalPosibles = criteriaList.length;
  const score = audit.score || ((total / totalPosibles) * 100).toFixed(2);
  scoreEl.textContent = `${score}%`;
  const badge = audit.status === 'finalizada' ? 'done' : 'draft';
  statusEl.className = `pill ${badge}`;
  statusEl.textContent = audit.status === 'finalizada' ? 'Finalizada' : 'Borrador';
  const pct = totalPosibles > 0 ? (total / totalPosibles) * 100 : 0;
  document.getElementById('progressBar').style.width = `${pct}%`;
}

function updateProgress(admision) {
  const audit = audits[admision];
  if (!audit) return;
  const total = Object.values(audit.respuestas || {}).length;
  const totalPosibles = criteriaList.length;
  const pct = totalPosibles > 0 ? (total / totalPosibles) * 100 : 0;
  document.getElementById('progressBar').style.width = `${pct}%`;
}

function renderSavedAuditsTable() {
  const tbody = document.querySelector('#savedAuditsTable tbody');
  tbody.innerHTML = '';
  Object.entries(audits).forEach(([admision, data]) => {
    const tr = document.createElement('tr');
    const fecha = new Date(data.fecha).toLocaleString('es-EC');
    tr.innerHTML = `<td>${admision}</td><td>${data.score || '0'}%</td><td>${data.status || 'borrador'}</td><td>${fecha}</td>`;
    const actionsTd = document.createElement('td');
    const resumeBtn = document.createElement('button');
    resumeBtn.className = 'secondary';
    resumeBtn.textContent = 'Abrir';
    resumeBtn.onclick = () => {
      const idx = arcData.findIndex((r) => r.admision === admision);
      if (idx >= 0) {
        auditFilters = { date: '', center: 'all', cex: '' };
        syncAuditFiltersToUI();
        populateCenterFilter(document.getElementById('filterCenter'));
        renderRecordOptions();
        document.getElementById('selectRecord').value = admision;
        document.getElementById('selectRecord').dispatchEvent(new Event('change'));
        document.getElementById('auditComments').value = data.comentarios || '';
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
      medicos[record.nombre_medico].auditorias.push({ score: Number(audit.score) || 0, pesoTotal: 1, estado: audit.status });
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

// --- Admin uploads ---
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
          renderMedicoProfiles();
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
          initDashboard();
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
