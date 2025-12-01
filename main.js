// Auditoría Médica Metrored – experiencia profesional con roles, KPIs y flujo de auditoría.

// Datos incrustados como respaldo. Si la carga por fetch falla (por ejemplo, al abrir mediante file://),
// estos datos se utilizarán como fuente de datos.
const EMBEDDED_ARC_DATA = [{"fecha_admision": "2025-10-27", "centro_medico": "CM KENNEDY", "especialidad": "GASTROENTEROLOGIA",
"nombre_medico": "KAREN DENISSE FRANCO AGUILAR", "admision": "CEX012-10-002008588", "historia_clinica": 954359279, "nombres_completos": "DAYANA RAFAELA VERGARA ZAMORA"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM KENNEDY", "especialidad": "GASTROENTEROLOGIA", "nombre_medico": "KAREN DENISSE FRANCO AGUILAR", "admision": "CEX012-10-002002905", "historia_clinica": 926529579, "nombres_completos": "VANESSA ELIZABETH SANCHEZ YAGUAL"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM KENNEDY", "especialidad": "GASTROENTEROLOGIA", "nombre_medico": "KAREN DENISSE FRANCO AGUILAR", "admision": "CEX012-10-002004679", "historia_clinica": 923981500, "nombres_completos": "KAREN ALEXANDRA ROSADO GONZALEZ"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "MARIA JOSE IZQUIERDO PALOMEQUE", "admision": "CEX012-10-002004350", "historia_clinica": 1700603721, "nombres_completos": "JOSE RAFAEL ACOSTA USCA"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "MARIA JOSE IZQUIERDO PALOMEQUE", "admision": "CEX012-10-001997766", "historia_clinica": 1711880417, "nombres_completos": "MARIA FERNANDA ALVAREZ SANDOVAL"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "MARIA JOSE IZQUIERDO PALOMEQUE", "admision": "CEX012-10-002004123", "historia_clinica": 1752210862, "nombres_completos": "ESTEBAN SEBASTIAN RIVERA SILVA"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "MARIA JOSE IZQUIERDO PALOMEQUE", "admision": "CEX012-10-002003802", "historia_clinica": 1715438154, "nombres_completos": "LAURA GABRIELA MOLINA BURBANO"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "JOSE ALBERTO GARCES GUEVARA", "admision": "CEX012-10-002002677", "historia_clinica": 1753667839, "nombres_completos": "DOMINIQUE ALEJANDRA AVILA NAZATE"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM CUMBAYA", "especialidad": "OFTALMOLOGIA", "nombre_medico": "JOSE ALBERTO GARCES GUEVARA", "admision": "CEX012-10-002002225", "historia_clinica": 1721683520, "nombres_completos": "MARÍA JOSE CARRERA ALAVA"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM PLAZA DE TOROS", "especialidad": "REUMATOLOGIA", "nombre_medico": "NIVI MARIA GARCIA GARCIA", "admision": "CEX012-10-002003746", "historia_clinica": 1712481637, "nombres_completos": "JORGE ANTONIO AVALOS JACOME"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM PLAZA DE TOROS", "especialidad": "DERMATOLOGIA", "nombre_medico": "ANALIA KARINA PASQUEL SOTELO", "admision": "CEX012-10-002000141", "historia_clinica": 1710060706, "nombres_completos": "ANDRES EDUARDO TORRES FERNANDEZ"}, {"fecha_admision": "2025-10-27", "centro_medico": "CM PLAZA DE TOROS", "especialidad": "REUMATOLOGIA", "nombre_medico": "NIVI MARIA GARCIA GARCIA", "admision": "CEX012-10-002008533", "historia_clinica": 1704149739, "nombres_completos": "BEATRIZ MERCEDES TORRES VIZCAINO"}];

const EMBEDDED_CRITERIA = [{"id": "C1", "name": "CENTRO", "description": "Unidad de atención"}, {"id": "C2", "name": "ESPECIALIDAD", "description": "Servicio en que se atendió"}, {"id": "C3", "name": "FECHA", "description": "Mes"}, {"id": "C4", "name": "ADMISION", "description": "Código de admisión"}, {"id": "C5", "name": "DATOS", "description": "Se escribe los datos de consulta según la especialidad respectiva"}, {"id": "C6", "name": "SIGNOS", "description": "Signos vitales registrados completos y adecuados para la edad"}, {"id": "C7", "name": "APP", "description": "Presencia de registro de antecedentes personales relevantes"}, {"id": "C8", "name": "APF", "description": "Presencia de registro tanto positivo como negativo de antecedentes familiares relevantes"}, {"id": "C9", "name": "ALERGIAS", "description": "Presencia de registro de antecedentes de alergias"}, {"id": "C10", "name": "MOTIVO DE CONSULTA", "description": "Registro del motivo por el que el paciente acude a pedir atención médica"}, {"id": "C11", "name": "EA", "description": "Descripción de la evolución y detalles de los síntomas y/ o signos descritos en el motivo de consulta y los hallazgos en el interrogatorio, Se incluyen datos positivos y negativos,  Valoración del dolor"}, {"id": "C13", "name": "RAS", "description": "Describe signos y síntomas extras al motivo de consulta y forman parte importante en el diagnóstico"}, {"id": "C14", "name": "EF", "description": "Descripción clara y especifica de hallazgos en el  examen físico- registro datos negativos importantes para el diagnóstico diferencial"}, {"id": "C15", "name": "HISTORIA CONSISTENTE", "description": "Se evalúa la estructura global de la redacción de la historia clínica buscando la consistencia interna entre síntomas y signos explorados con el motivo de consulta presentado"}, {"id": "C16", "name": "RIESGO LEGAL", "description": "Se evalúa si la información presente en la historia, en caso de presentarse alguna queja, contenga vacíos que puedan presentar riesgo dejando espacio libre para especulaciones o que no evidencie lo actuado"}, {"id": "C17", "name": "DG", "description": "Se analiza la hipótesis diagnostica más probable considerando de manera integral la clínica, los factores de riesgo y la situación del contexto del paciente"}, {"id": "C18", "name": "LAB", "description": "Los exámenes prescritos se soportan tanto en evidencia clínica como científica"}, {"id": "C19", "name": "IMAGEN / PROCEDIMIENTO", "description": "Los exámenes prescritos se soportan tanto en evidencia clínica como científica"}, {"id": "C20", "name": "RP", "description": "La decisión de la prescripción terapéutica es adecuada y esta soportada en evidencia científica"}, {"id": "C21", "name": "INDICACIONES COMPLETAS", "description": "Indicaciones completas y claras sin espacios de confusión para el paciente, dosificación, horarios, tiempo de tratamiento"}, {"id": "C22", "name": "PRESCRIPCIÓN DE HÁBITOS Y ASESORÍA EN SALUD", "description": "La prescripción cuenta con recomendaciones de hábitos saludables y no farmacológicos, así como aspectos de prevención y promoción de la salud"}];

const USER_STORAGE_KEY = 'metroredUsers';
const USER_VERSION_KEY = 'metroredUsersVersion';
const CURRENT_USER_VERSION = 'v3';
const DEFAULT_USERS = [
  { prefix: 'Sr.', firstName: 'Argenis', lastName: 'Navas', username: 'gnavas', password: 'Metrored2025', role: 'admin' },
  { prefix: 'Dra.', firstName: 'Maite', lastName: 'Vargas', username: 'mvargas', password: 'Metrored2025', role: 'auditor' },
  {
    prefix: 'Sra.',
    firstName: 'Nathalia',
    lastName: 'Navarrete',
    username: 'nnavarrete',
    password: 'Metrored2025',
    role: 'controller',
  },
];

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
let userDirectory = [];
let userRoleMap = {};
let userDisplayMap = {};
let isAuthenticated = false;
let dataLoaded = false;
let currentRecord = null;
let modalRecord = null;
let lastCompletedRecord = null;
let lastReportPdfUrl = null;
let lastReportFile = null;
let auditFilters = { date: "", center: "all", cex: "" };
let auditSort = { column: null, direction: "asc" };
let stratificationResult = null;
let assignments = [];
let assignmentSearchTerm = "";
const SESSION_KEY = 'metroredSession';
const BRANDING_STORAGE_KEY = 'metroredBranding';
// Fallback store para contextos donde localStorage no está disponible (p. ej. modo incógnito estricto).
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

let brandingAssets = loadBrandingAssets();
loadUserDirectory();
const ARC_TEMPLATE_COLUMNS = [
  { header: 'Fecha de admisión', key: 'fecha_admision' },
  { header: 'Centro médico', key: 'centro_medico' },
  { header: 'Especialidad', key: 'especialidad' },
  { header: 'Médico', key: 'nombre_medico' },
  { header: 'Admisión/CEX', key: 'admision' },
  { header: 'Historia clínica', key: 'historia_clinica' },
  { header: 'Paciente', key: 'nombres_completos' },
];

const DEFAULT_REPORT_GUIDANCE_BODY = `
  <div class="report-section">
    <h4>Definiciones y anexos de un informe de auditoría</h4>
    <div class="report-footnote">
      <p>Redactar las no conformidades es uno de los aspectos más críticos de la auditoría, por ello, el auditor debe tener una buena capacidad de expresión escrita, porque debe hacer un registro exacto de los hechos observados, indicando cuantas evidencias apoyen el hallazgo o hallazgos.</p>
      <ul>
        <li>La redacción de la no conformidad debe ser lo más exacta y precisa posible.</li>
        <li>La redacción de la no conformidad deberá incluir:</li>
      </ul>
      <p>El hallazgo de auditoría: resultados de la evaluación de la evidencia de la auditoría (registros, declaraciones de hechos o cualquier otra información que es pertinente para los criterios de auditoría y que es verificable) recopilada frente a los criterios de auditoría</p>
      <p>Las evidencias de auditoría: que la sustentan, o al menos ejemplos significativos</p>
      <p>El criterio de auditoría: que se incumple (requisito propio, externo de carácter obligatorio)</p>
      <p>Por citar un ejemplo:</p>
      <ul>
        <li>Hallazgo: La organización no ha registrado los resultados de indicadores de gestión como está establecido en su planificación estratégica.</li>
        <li>Evidencia: Indicadores en cero de los tres primeros meses de gestión.</li>
        <li>Criterio: Punto 9.1.1 a) de la Norma ISO 9001:2015 y su propio procedimiento PE-002</li>
        <li>Redacción final: La organización no ha registrado los resultados de indicadores de gestión como está establecido en su planificación estratégica, incumpliendo el Punto 9.1.1 a) de la Norma ISO 9001:2015 y su propio procedimiento PE-002.</li>
      </ul>
      <h4>Anexos</h4>
      <p>Se puede sustentar las evidencias objetivas de los hallazgos con fotografías, que ayuden de manera objetiva (crítica constructiva) a la solución, mejora o contención de la no conformidad detectada.</p>
      <h4>Recomendaciones al elaborar el informe de auditoría</h4>
      <p>Se puede sugerir planes de acción a los hallazgos detectados de tal manera que sean solucionados en el corto o mediano plazo.</p>
    </div>
  </div>
`;

const REPORT_FOOTER_LABEL = 'Informe de Auditoría Médica generado el';

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

function persistUserDirectory() {
  safeStorage.set(USER_STORAGE_KEY, JSON.stringify(userDirectory));
  safeStorage.set(USER_VERSION_KEY, CURRENT_USER_VERSION);
}

function loadUserDirectory() {
  try {
    const raw = safeStorage.get(USER_STORAGE_KEY);
    const version = safeStorage.get(USER_VERSION_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    const sanitized = Array.isArray(parsed)
      ? parsed.map(sanitizeUserRecord).filter(Boolean)
      : DEFAULT_USERS.map(sanitizeUserRecord).filter(Boolean);

    const migrated = sanitized.map((u) => {
      if (
        ['gnavas', 'mvargas', 'nnavarrete'].includes(u.username) &&
        u.password === 'Metro2025'
      ) {
        return { ...u, password: 'Metrored2025' };
      }
      return u;
    });

    userDirectory = migrated.length ? migrated : DEFAULT_USERS.map(sanitizeUserRecord).filter(Boolean);
    persistUserDirectory();
    if (version !== CURRENT_USER_VERSION && raw) {
      persistUserDirectory();
    }
  } catch (e) {
    userDirectory = DEFAULT_USERS.map(sanitizeUserRecord).filter(Boolean);
    persistUserDirectory();
  }
  userRoleMap = {};
  userDisplayMap = {};
  userDirectory.forEach((u) => {
    userRoleMap[u.username] = u.role;
    userDisplayMap[u.username] = `${u.prefix} ${u.firstName} ${u.lastName}`.trim();
  });
}

function defaultBrandingConfig() {
  return {
    reportGuidanceHtml: DEFAULT_REPORT_GUIDANCE_BODY,
    logoName: '',
    logoData: '',
    faviconName: '',
    faviconData: '',
  };
}

function loadBrandingAssets() {
  try {
    const raw = safeStorage.get(BRANDING_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return { ...defaultBrandingConfig(), ...(parsed || {}) };
  } catch (e) {
    return defaultBrandingConfig();
  }
}

function persistBrandingAssets() {
  safeStorage.set(BRANDING_STORAGE_KEY, JSON.stringify(brandingAssets));
}

function setInlineStatus(id, message, type = 'muted') {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = message;
  el.className = `status-inline ${type}`;
}

function applyBrandingAssets() {
  const logoImg = document.getElementById('brandLogoImg');
  const logoMark = document.querySelector('.logo-mark');
  const faviconBadge = document.getElementById('brandFaviconBadge');
  if (logoImg) {
    if (brandingAssets.logoData) {
      logoImg.src = brandingAssets.logoData;
      logoImg.classList.remove('hidden');
      logoMark?.classList.add('hidden');
    } else {
      logoImg.src = '';
      logoImg.classList.add('hidden');
      logoMark?.classList.remove('hidden');
    }
  }

  const favicon = document.getElementById('dynamicFavicon');
  if (favicon) {
    favicon.href = brandingAssets.faviconData || '';
  }

  if (faviconBadge) {
    if (brandingAssets.faviconData) {
      faviconBadge.style.backgroundImage = `url(${brandingAssets.faviconData})`;
      faviconBadge.classList.remove('hidden');
    } else {
      faviconBadge.classList.add('hidden');
      faviconBadge.style.backgroundImage = '';
    }
  }
}

function updateBrandingUI() {
  const logoStatus = brandingAssets.logoName ? `Logo cargado: ${brandingAssets.logoName}` : 'Se usará la marca por defecto.';
  setInlineStatus('logoStatus', logoStatus, brandingAssets.logoName ? 'success' : 'muted');

  const faviconStatus = brandingAssets.faviconName
    ? `Favicon cargado: ${brandingAssets.faviconName}`
    : 'Sin favicon personalizado.';
  setInlineStatus('faviconStatus', faviconStatus, brandingAssets.faviconName ? 'success' : 'muted');

  const logoPreview = document.getElementById('logoPreview');
  if (logoPreview) {
    if (brandingAssets.logoData) {
      logoPreview.style.backgroundImage = `url(${brandingAssets.logoData})`;
      logoPreview.textContent = '';
      logoPreview.classList.remove('muted');
    } else {
      logoPreview.style.backgroundImage = 'none';
      logoPreview.textContent = 'Sin logo cargado';
      logoPreview.classList.add('muted');
    }
  }

  applyBrandingAssets();

  const reportModal = document.getElementById('reportModal');
  if (reportModal && !reportModal.classList.contains('hidden') && (modalRecord || lastCompletedRecord)) {
    renderAuditReport(modalRecord || lastCompletedRecord);
  }
}

function setTemplateStatus(message, type = 'muted') {
  const el = document.getElementById('templateStatus');
  if (!el) return;
  el.textContent = message;
  el.className = `status-inline ${type}`;
}

function refreshReportTemplateEditor() {
  const editor = document.getElementById('reportTemplateEditor');
  if (!editor) return;
  editor.innerHTML = getReportGuidanceBody();
  setTemplateStatus('Formato cargado. Edite y luego guarde para aplicarlo al informe.', 'muted');
}

function initTemplateEditor() {
  const editor = document.getElementById('reportTemplateEditor');
  if (!editor) return;

  refreshReportTemplateEditor();

  const toolbarButtons = document.querySelectorAll('[data-editor-cmd]');
  toolbarButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cmd = btn.dataset.editorCmd;
      const val = btn.dataset.editorValue || null;
      document.execCommand(cmd, false, val);
      editor.focus();
    });
  });

  editor.addEventListener('input', () => {
    setTemplateStatus('Cambios sin guardar. Presione "Guardar formato".', 'warning');
  });

  const saveBtn = document.getElementById('saveTemplateBtn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const html = editor.innerHTML.trim() || DEFAULT_REPORT_GUIDANCE_BODY;
      brandingAssets = { ...brandingAssets, reportGuidanceHtml: html };
      persistBrandingAssets();
      setTemplateStatus('Formato guardado y aplicado al informe.', 'success');
    });
  }

  const resetBtn = document.getElementById('resetTemplateBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      brandingAssets = { ...brandingAssets, reportGuidanceHtml: DEFAULT_REPORT_GUIDANCE_BODY };
      persistBrandingAssets();
      refreshReportTemplateEditor();
      setTemplateStatus('Formato restaurado al estándar Metrored.', 'info');
    });
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error('No se pudo leer el archivo'));
    reader.readAsDataURL(file);
  });
}

function initBrandingConfig() {
  const logoInput = document.getElementById('uploadBrandLogo');
  if (logoInput) {
    logoInput.addEventListener('change', async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        setInlineStatus('logoStatus', 'Cargue un archivo de imagen válido.', 'error');
        return;
      }
      const data = await readFileAsDataUrl(file);
      brandingAssets = { ...brandingAssets, logoName: file.name, logoData: data };
      persistBrandingAssets();
      updateBrandingUI();
    });
  }

  const faviconInput = document.getElementById('uploadFavicon');
  if (faviconInput) {
    faviconInput.addEventListener('change', async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        setInlineStatus('faviconStatus', 'Cargue un archivo de imagen válido.', 'error');
        return;
      }
      const data = await readFileAsDataUrl(file);
      brandingAssets = { ...brandingAssets, faviconName: file.name, faviconData: data };
      persistBrandingAssets();
      updateBrandingUI();
    });
  }

  const clearLogoBtn = document.getElementById('clearLogoBtn');
  if (clearLogoBtn) {
    clearLogoBtn.addEventListener('click', () => {
      brandingAssets = { ...brandingAssets, logoName: '', logoData: '' };
      persistBrandingAssets();
      updateBrandingUI();
    });
  }

  const clearFaviconBtn = document.getElementById('clearFaviconBtn');
  if (clearFaviconBtn) {
    clearFaviconBtn.addEventListener('click', () => {
      brandingAssets = { ...brandingAssets, faviconName: '', faviconData: '' };
      persistBrandingAssets();
      updateBrandingUI();
    });
  }

  updateBrandingUI();
}

function buildReportHeader(reportDate) {
  const logoBlock = brandingAssets.logoData
    ? `<div class="brand-logo"><img src="${brandingAssets.logoData}" alt="Logo Metrored" /></div>`
    : '';
  return `
    <div class="report-header">
      <div class="brand-block">
        ${logoBlock}
        <div class="brand-text-block">
          <p class="report-brand-title">Metrored</p>
          <p class="report-brand-sub">Centros Médicos</p>
          <p class="report-stamp">MTR-GSP-F-016 · Revisión / Vigencia</p>
        </div>
      </div>
      <div class="meta-block">
        <div class="report-meta-item"><span>Informe</span><strong>Auditoría interna</strong></div>
        <div class="report-meta-item"><span>Versión</span><strong>1</strong></div>
        <div class="report-meta-item"><span>Código</span><strong>MTR-GSP-F-016</strong></div>
        <div class="report-meta-item"><span>Fecha</span><strong>${reportDate}</strong></div>
      </div>
    </div>
  `;
}

function buildReportFooter(generatedDate) {
  return `<div class="report-footer">${REPORT_FOOTER_LABEL} ${generatedDate}</div>`;
}

function getReportGuidanceBody() {
  return brandingAssets.reportGuidanceHtml || DEFAULT_REPORT_GUIDANCE_BODY;
}

function buildGuidancePage(header, footer) {
  return `
    <div class="report-page">
      ${header}
      ${getReportGuidanceBody()}
      ${footer}
    </div>
  `;
}

function getOrInitAudit(admision) {
  const base = audits[admision] || {};
  const map = base.nonConformidadesMap || {};
  if (!Object.keys(map).length && base.noConformidades) {
    base.noConformidades
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .forEach((line, idx) => {
        map[`legacy-${idx}`] = line;
      });
  }
  return {
    respuestas: base.respuestas || {},
    comentarios: base.comentarios || '',
    recomendaciones: base.recomendaciones || '',
    noConformidades: base.noConformidades || '',
    nonConformidadesMap: map,
    status: base.status || 'borrador',
    fecha: base.fecha || new Date().toISOString(),
  };
}

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

function getDisplayName(username) {
  if (!username) return 'Sin asignar';
  return userDisplayMap[username] || username;
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
    const raw = safeStorage.get(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function clearSession() {
  safeStorage.remove(SESSION_KEY);
}

function setUserStatus(message, type = 'muted') {
  const status = document.getElementById('userStatus');
  if (status) {
    status.textContent = message;
    status.className = `status-banner ${type}`;
  }
}

function renderUserTable() {
  const tbody = document.querySelector('#userTable tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (!userDirectory.length) {
    const tr = document.createElement('tr');
    tr.innerHTML = '<td colspan="6" class="muted">No hay usuarios registrados.</td>';
    tbody.appendChild(tr);
    return;
  }

  userDirectory.forEach((user) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${user.prefix}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.username}</td>
      <td class="pill sm">${user.role}</td>
      <td></td>
    `;
    const actions = document.createElement('div');
    actions.className = 'inline-actions';
    const delBtn = document.createElement('button');
    delBtn.className = 'danger small inline';
    delBtn.textContent = 'Eliminar';
    delBtn.onclick = () => {
      if (currentUser === user.username) {
        setUserStatus('No puedes eliminar el usuario con sesión activa.', 'error');
        return;
      }
      if (userDirectory.filter((u) => u.role === 'admin').length === 1 && user.role === 'admin') {
        setUserStatus('Debe existir al menos un administrador.', 'error');
        return;
      }
      userDirectory = userDirectory.filter((u) => u.username !== user.username);
      persistUserDirectory();
      loadUserDirectory();
      renderUserTable();
      renderAssignmentsTable();
      renderAuditAssignmentTable();
      setUserStatus(`Usuario ${user.username} eliminado.`, 'info');
    };
    actions.appendChild(delBtn);
    tr.lastElementChild.appendChild(actions);
    tbody.appendChild(tr);
  });
}

function addUserFromForm() {
  const prefix = document.getElementById('userPrefix')?.value || 'Dr.';
  const firstName = document.getElementById('userFirstName')?.value.trim();
  const lastName = document.getElementById('userLastName')?.value.trim();
  const username = document.getElementById('userUsername')?.value.trim();
  const password = document.getElementById('userPassword')?.value;
  const role = document.getElementById('userRole')?.value || 'auditor';

  if (!firstName || !lastName || !username || !password) {
    setUserStatus('Complete todos los campos para crear el usuario.', 'error');
    return;
  }
  if (userDirectory.some((u) => u.username === username)) {
    setUserStatus('El usuario ya existe, elija otro nombre de usuario.', 'error');
    return;
  }

  userDirectory.push({ prefix, firstName, lastName, username, password, role });
  persistUserDirectory();
  loadUserDirectory();
  renderUserTable();
  renderAssignmentsTable();
  renderAuditAssignmentTable();
  setUserStatus(`Usuario ${username} creado como ${role}.`, 'success');
  ['userFirstName', 'userLastName', 'userUsername', 'userPassword'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

function initUserAdmin() {
  renderUserTable();
  const addBtn = document.getElementById('addUserBtn');
  if (addBtn) addBtn.addEventListener('click', addUserFromForm);
}

function loadAssignments() {
  try {
    const raw = safeStorage.get('assignments');
    assignments = raw ? JSON.parse(raw) : [];
  } catch (e) {
    assignments = [];
  }
}

function saveAssignments() {
  safeStorage.set('assignments', JSON.stringify(assignments));
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
    const stored = safeStorage.get('audits');
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
  const stored = getOrInitAudit(record.admision);
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
    content.className = 'section-content';
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
    renderAuditReport(record);
    lastCompletedRecord = record;
    closeAuditStartModal();
    openCompletionModal(record);
  };
  const comments = document.getElementById('auditComments');
  const recommendations = document.getElementById('auditRecommendations');
  comments.value = stored.comentarios;
  recommendations.value = stored.recomendaciones;
  comments.oninput = () => {
    const existing = getOrInitAudit(record.admision);
    audits[record.admision] = { ...existing, comentarios: comments.value, fecha: new Date().toISOString() };
    persistAudits();
  };
  recommendations.oninput = () => {
    const existing = getOrInitAudit(record.admision);
    audits[record.admision] = { ...existing, recomendaciones: recommendations.value, fecha: new Date().toISOString() };
    persistAudits();
  };

  renderNonConformities(record);
  applyRestoredAnswers(record);
}

function handleAnswer(record, critId, value) {
  const existing = getOrInitAudit(record.admision);
  existing.respuestas[critId] = value;
  audits[record.admision] = existing;
  persistAudits();
  updateAuditStatus(record.admision);
  renderSavedAuditsTable();
  highlightAnswer(critId, value);
  autoFillNonConformity(record, critId, value);
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

function autoFillNonConformity(record, critId, value) {
  if (!record) return;
  const crit = criteriaList.find((c) => c.id === critId) || { description: critId, name: critId };
  const desc = (crit.description || crit.name || '').trim();
  if (!desc) return;
  const normalized = desc.replace(/\.$/, '');
  const phrase = `No ${normalized.charAt(0).toLowerCase()}${normalized.slice(1)}`;
  const existing = getOrInitAudit(record.admision);
  const map = { ...(existing.nonConformidadesMap || {}) };
  if (value === 0) {
    map[critId] = phrase;
  } else {
    delete map[critId];
  }
  audits[record.admision] = {
    ...existing,
    nonConformidadesMap: map,
    noConformidades: Object.values(map).join('\n'),
    fecha: new Date().toISOString(),
  };
  persistAudits();
  renderNonConformities(record);
}

function collectNonConformitiesFromUI() {
  const entries = document.querySelectorAll('#nonConformityList textarea[data-crit]');
  const map = {};
  entries.forEach((area) => {
    const val = area.value.trim();
    if (val) map[area.dataset.crit] = val;
  });
  return map;
}

function renderNonConformities(record) {
  const container = document.getElementById('nonConformityList');
  if (!container || !record) return;
  container.innerHTML = '';
  const data = getOrInitAudit(record.admision);
  const map = data.nonConformidadesMap || {};
  const entries = Object.entries(map);
  if (!entries.length) {
    container.innerHTML = '<p class="muted">No hay no conformidades registradas. Marca "No cumple" para autollenar.</p>';
    return;
  }
  const list = document.createElement('div');
  list.className = 'nonconformity-list horizontal';
  entries.forEach(([critId, text]) => {
    const crit = criteriaList.find((c) => c.id === critId);
    const sectionCfg = SECTION_CONFIG.find((s) => s.criteriaIds.includes(critId));
    const row = document.createElement('div');
    row.className = 'criteria-row nonconf-row';

    const info = document.createElement('div');
    info.className = 'criteria-info';
    info.innerHTML = `
      <div class="nonconf-head">
        <span class="chip soft">${sectionCfg?.title || crit?.section || 'Criterio'}</span>
        <strong>${crit?.name || critId}</strong>
      </div>
    `;

    const actions = document.createElement('div');
    actions.className = 'nonconf-actions';
    const area = document.createElement('textarea');
    area.dataset.crit = critId;
    area.rows = 3;
    area.value = text;
    area.placeholder = 'Detalle la no conformidad registrada';
    area.oninput = () => {
      const current = getOrInitAudit(record.admision);
      const mapUpdate = { ...(current.nonConformidadesMap || {}) };
      const val = area.value.trim();
      if (val) mapUpdate[critId] = val;
      else delete mapUpdate[critId];
      audits[record.admision] = {
        ...current,
        nonConformidadesMap: mapUpdate,
        noConformidades: Object.values(mapUpdate).join('\n'),
        fecha: new Date().toISOString(),
      };
      persistAudits();
    };
    actions.appendChild(area);

    row.appendChild(info);
    row.appendChild(actions);
    list.appendChild(row);
  });

  container.appendChild(list);
}

function formatReportDate(value) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('es-EC', { day: '2-digit', month: 'long', year: 'numeric' });
}

function buildOrderedList(items = [], placeholder = 'Sin información registrada.') {
  if (!items.length) return `<p class="muted">${placeholder}</p>`;
  const list = items.map((item) => `<li>${item}</li>`).join('');
  return `<ol>${list}</ol>`;
}

function renderAuditReport(record) {
  const container = document.getElementById('reportContent');
  if (!record || !container) return;
  const audit = getOrInitAudit(record.admision);
  const auditorName = getDisplayName(currentUser || 'mvargas');
  const reportDate = formatReportDate(audit.fecha || new Date().toISOString());
  const generatedDate = formatReportDate(new Date().toISOString());
  const leadAdmin = getDisplayName(userDirectory.find((u) => u.role === 'admin')?.username || 'gnavas');
  const header = buildReportHeader(reportDate);
  const footer = buildReportFooter(generatedDate);
  const areaAuditada = `Atención médica ambulatoria brindada al paciente en ${record.centro_medico || '_____'} en ${record.especialidad || '_____'}.`;
  const objetivo =
    'Evaluar la calidad y seguridad de la atención médica proporcionada, identificar áreas de mejora y asegurar el cumplimiento de los estándares y normativas vigentes.';

  const nonConfs = Object.values(audit.nonConformidadesMap || {})
    .map((v) => v.trim())
    .filter(Boolean);
  const recomendaciones = (audit.recomendaciones || '')
    .split('\n')
    .map((v) => v.trim())
    .filter(Boolean);

  const recommendationFallback = !recomendaciones.length
    ? nonConfs.map((item) => `Corregir: ${item.replace(/^No\s+/i, '')}`)
    : recomendaciones;

  const pageOne = `
    <div class="report-page">
      ${header}
      <div class="report-section">
        <h4>1. Datos generales del informe de auditoría</h4>
        <table class="report-table">
          <thead><tr><th>AUDITOR</th><th>FECHA</th><th>ÁREA AUDITADA</th><th>OBJETIVO</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>${auditorName}</strong></td>
              <td>${reportDate}</td>
              <td>${areaAuditada}</td>
              <td>${objetivo}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="report-section">
        <h4>2. Descripción de las no conformidades</h4>
        <div class="report-list">
          <p><strong>No conformidades detectadas</strong></p>
          ${buildOrderedList(nonConfs, 'No se registraron no conformidades en esta auditoría.')}
        </div>
      </div>
      <div class="report-section">
        <h4>3. Recomendaciones</h4>
        <div class="report-list">
          <p><strong>Recomendaciones</strong></p>
          ${buildOrderedList(recommendationFallback, 'Sin recomendaciones registradas.')}
        </div>
      </div>
      <div class="report-section">
        <h4>4. Firmas</h4>
        <table class="report-signatures">
          <tr>
            <th>JEFE DE AUDITORÍA MÉDICA<br><span>(Nombre, fecha y firma)</span></th>
            <th>AUDITOR<br><span>(Nombre y firma)</span></th>
            <th>AUDITADO<br><span>(Nombre y firma)</span></th>
          </tr>
          <tr>
            <td>
              <div class="signature-space"></div>
              <strong>${leadAdmin}</strong>
              <p class="signature-label">Nombre, fecha y firma</p>
            </td>
            <td>
              <div class="signature-space"></div>
              <strong>${auditorName}</strong>
              <p class="signature-label">Nombre y firma</p>
            </td>
            <td>
              <div class="signature-space"></div>
              <strong>${record.nombre_medico || 'Profesional auditado'}</strong>
              <p class="signature-label">Nombre y firma</p>
            </td>
          </tr>
        </table>
      </div>
      ${footer}
    </div>
  `;

  const pageTwo = buildGuidancePage(header, footer);

  container.innerHTML = `${pageOne}${pageTwo}`;
}

function populateCompletionModal(record) {
  const patient = document.getElementById('completionPatient');
  const summary = document.getElementById('completionSummary');
  const emailInput = document.getElementById('reportEmail');
  const emailBody = document.getElementById('reportEmailBody');
  const status = document.getElementById('emailStatus');

  if (patient) {
    patient.textContent = record?.nombres_completos || 'Paciente asignado';
  }
  if (summary) {
    summary.textContent = `Auditoría finalizada para la historia ${record?.admision || ''} del centro ${
      record?.centro_medico || '—'
    }`;
  }
  if (status) {
    status.textContent = '';
    status.className = 'status-inline muted';
  }

  const doctor = record?.nombre_medico || 'médico auditado';
  const patientName = record?.nombres_completos || 'el paciente asignado';
  const centro = record?.centro_medico || 'su centro';
  const reportLink = 'Adjunto encontrará el informe de auditoría correspondiente.';

  if (emailInput) emailInput.value = record?.correo_medico || '';
  if (emailBody) {
    emailBody.value = `Estimado(a) ${doctor},\n\nCompartimos el informe de Auditoría Médica correspondiente a la atención de ${patientName} en ${centro}. ${reportLink}\n\nSaludos,\n${getDisplayName(currentUser || 'mvargas')}`;
  }
}

function openCompletionModal(record) {
  const modal = document.getElementById('completionModal');
  if (!modal) return;
  populateCompletionModal(record);
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeCompletionModal() {
  const modal = document.getElementById('completionModal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

function cleanupReportUrl() {
  if (lastReportPdfUrl) {
    URL.revokeObjectURL(lastReportPdfUrl);
    lastReportPdfUrl = null;
  }
}

async function generateReportPdf(record = lastCompletedRecord) {
  const content = document.getElementById('reportContent');
  if (!content || !window.jspdf) return null;
  const { jsPDF } = window.jspdf;

  return new Promise((resolve) => {
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    doc.html(content, {
      x: 28,
      y: 28,
      html2canvas: { scale: 0.72, useCORS: true },
      callback: (docInstance) => {
        const blob = docInstance.output('blob');
        const filename = `Informe-${record?.admision || 'auditoria'}.pdf`;
        cleanupReportUrl();
        const url = URL.createObjectURL(blob);
        const file = new File([blob], filename, { type: 'application/pdf' });
        lastReportPdfUrl = url;
        lastReportFile = file;
        resolve({ blob, url, file, filename });
      },
    });
  });
}

function downloadLatestReportPdf(pdfResult) {
  const url = pdfResult?.url || lastReportPdfUrl;
  const filename = pdfResult?.filename || pdfResult?.file?.name || 'Informe-auditoria.pdf';
  if (!url) return;
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

async function sendReportEmail() {
  const emailInput = document.getElementById('reportEmail');
  const emailBody = document.getElementById('reportEmailBody');
  const status = document.getElementById('emailStatus');
  if (!emailInput || !emailBody || !status) return;

  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    status.textContent = 'Ingrese un correo válido del médico para enviar el informe.';
    status.className = 'status-inline error';
    return;
  }

  const record = lastCompletedRecord;
  if (!record) {
    status.textContent = 'Primero finalice y genere el informe antes de enviarlo.';
    status.className = 'status-inline error';
    return;
  }

  const subject = `Informe de Auditoría Médica - ${record.nombres_completos || 'Paciente'}`;
  const resumen = `Paciente: ${record.nombres_completos || 'N/D'}\nCEX: ${record.cex || 'N/D'}\nHC: ${
    record.admision || 'N/D'
  }\nCentro: ${record.centro_medico || 'N/D'}\nFecha: ${new Date().toLocaleDateString()}`;

  const userBody = emailBody.value.trim();
  const finalBody = `${userBody}\n\n---\nResumen del informe\n${resumen}\n\nEste correo fue generado desde la auditoría médica Metrored.`;

  status.textContent = 'Generando PDF del informe...';
  status.className = 'status-inline info';

  let pdfResult = null;
  try {
    pdfResult = await generateReportPdf(record);
  } catch (error) {
    console.error('No se pudo generar el PDF', error);
  }

  if (!pdfResult) {
    status.textContent = 'No se pudo generar el PDF para adjuntar. Intente imprimir o guardar manualmente.';
    status.className = 'status-inline error';
    return;
  }

  if (pdfResult.file && navigator.canShare && navigator.canShare({ files: [pdfResult.file] })) {
    try {
      await navigator.share({ files: [pdfResult.file], title: subject, text: finalBody });
      status.textContent = 'PDF adjunto y compartido con el cliente de correo. Verifique el envío.';
      status.className = 'status-inline success';
      return;
    } catch (shareError) {
      console.warn('Fallo el envío directo, se intentará con mailto', shareError);
    }
  }

  downloadLatestReportPdf(pdfResult);

  const mailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `${finalBody}\n\nSe adjunta el informe en PDF.`
  )}`;

  const mailWindow = window.open(mailto, '_blank');
  if (!mailWindow) {
    status.textContent = 'No se pudo abrir el cliente de correo. Desbloquee pop-ups e intente nuevamente.';
    status.className = 'status-inline error';
    return;
  }

  setTimeout(() => {
    status.textContent = 'PDF descargado y correo preparado. Adjunte si es necesario y envíe al médico.';
    status.className = 'status-inline success';
  }, 300);
}

function openReportModal(record) {
  const modal = document.getElementById('reportModal');
  if (record) renderAuditReport(record);
  modal?.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeReportModal() {
  const modal = document.getElementById('reportModal');
  modal?.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

async function printReport() {
  const pdfResult = await generateReportPdf(lastCompletedRecord || modalRecord);
  if (pdfResult?.url) {
    const win = window.open(pdfResult.url, '_blank', 'width=900,height=1200');
    if (win) {
      win.addEventListener('load', () => win.print());
    }
    return;
  }

  const content = document.getElementById('reportContent');
  if (!content) return;
  const fallback = window.open('', '_blank', 'width=900,height=1200');
  fallback.document.write(`<!DOCTYPE html><html><head><title>Informe de auditoría</title><link rel="stylesheet" href="style.css" /></head><body>${content.innerHTML}</body></html>`);
  fallback.document.close();
  fallback.focus();
  fallback.print();
}

function applyRestoredAnswers(record) {
  const data = audits[record.admision];
  if (!data) return;
  Object.entries(data.respuestas || {}).forEach(([critId, val]) => highlightAnswer(critId, val));
}

function saveAudit(record, status = 'borrador') {
  if (!record) return;
  const comentarios = document.getElementById('auditComments').value.trim();
  const recomendaciones = document.getElementById('auditRecommendations').value.trim();
  const noConformidadesMap = collectNonConformitiesFromUI();
  const noConformidades = Object.values(noConformidadesMap)
    .map((v) => v.trim())
    .filter(Boolean)
    .join('\n');
  const respuestas = (audits[record.admision] && audits[record.admision].respuestas) || {};
  const { score } = computeAuditScore(respuestas);
  audits[record.admision] = {
    respuestas,
    comentarios,
    recomendaciones,
    nonConformidadesMap: noConformidadesMap,
    noConformidades,
    fecha: new Date().toISOString(),
    score: score.toFixed(2),
    status,
  };
  persistAudits();
  updateAuditStatus(record.admision);
  renderSavedAuditsTable();
  renderMedicoProfiles();
  renderAuditAssignmentTable();
  if (status === 'borrador') {
    alert('Borrador guardado con autosave');
  }
}

function restoreAudit(record) {
  const data = audits[record.admision];
  document.getElementById('auditComments').value = data?.comentarios || '';
  document.getElementById('auditRecommendations').value = data?.recomendaciones || '';
  renderNonConformities(record);
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
    if (data.status === 'finalizada') {
      const reportBtn = document.createElement('button');
      reportBtn.className = 'secondary';
      reportBtn.textContent = 'Informe';
      reportBtn.onclick = () => {
        const rec = getRecordPool().find((r) => r.admision === admision) || assignments.find((r) => r.admision === admision);
        if (rec) renderAuditReport(rec);
        openReportModal(rec || null);
      };
      actionsTd.appendChild(reportBtn);
    }
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
  safeStorage.set('audits', JSON.stringify(audits));
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
  currentUser = session.username;
  currentRole = userRoleMap[session.username] || session.role;
  const roleSelect = document.getElementById('roleSelect');
  const activeUserLabel = document.getElementById('activeUserLabel');
  const roleBadge = document.getElementById('roleBadge');
  if (roleSelect) roleSelect.value = currentRole;
  if (activeUserLabel) activeUserLabel.textContent = `Usuario: ${getDisplayName(session.username)}`;
  if (roleBadge) roleBadge.textContent = currentRole;
  if (!currentRole) {
    clearSession();
    window.location.href = 'login.html';
    return;
  }

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
  return userDirectory.filter((u) => u.role === 'auditor').map((u) => u.username);
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
      opt.textContent = getDisplayName(a);
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
    const label = auditor === 'Sin asignar' ? auditor : getDisplayName(auditor);
    pill.textContent = `${label}: ${count}`;
    container.appendChild(pill);
  });
}

function initAdminTabs() {
  const buttons = document.querySelectorAll('.admin-tab-btn');
  const tabs = document.querySelectorAll('.admin-tab');
  if (!buttons.length || !tabs.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      tabs.forEach((tab) => tab.classList.toggle('active', tab.id === target));

      if (target === 'adminUsersTab') {
        renderUserTable();
      }
      if (target === 'adminDataTab') {
        renderAssignmentsTable();
        renderStratification(stratificationResult);
      }
      if (target === 'adminTemplateTab') {
        refreshReportTemplateEditor();
      }
    });
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

  const reportClose = document.getElementById('closeReportBtn');
  const reportBackdrop = document.querySelector('#reportModal .modal-backdrop');
  const reportCloseAction = document.getElementById('closeReportActionBtn');
  [reportClose, reportBackdrop, reportCloseAction].forEach((el) => {
    if (el) el.addEventListener('click', closeReportModal);
  });

  const printBtn = document.getElementById('printReportBtn');
  if (printBtn) printBtn.addEventListener('click', printReport);

  const completionClose = document.getElementById('closeCompletionBtn');
  const completionBackdrop = document.querySelector('#completionModal .modal-backdrop');
  [completionClose, completionBackdrop].forEach((el) => {
    if (el) el.addEventListener('click', closeCompletionModal);
  });

  const completionPrint = document.getElementById('completionPrintBtn');
  if (completionPrint) {
    completionPrint.addEventListener('click', () => {
      closeCompletionModal();
      if (lastCompletedRecord) renderAuditReport(lastCompletedRecord);
      openReportModal(lastCompletedRecord);
      setTimeout(printReport, 150);
    });
  }

  const completionView = document.getElementById('completionViewBtn');
  if (completionView) {
    completionView.addEventListener('click', () => {
      closeCompletionModal();
      if (lastCompletedRecord) renderAuditReport(lastCompletedRecord);
      openReportModal(lastCompletedRecord);
    });
  }

  const sendEmailBtn = document.getElementById('sendReportEmailBtn');
  if (sendEmailBtn) sendEmailBtn.addEventListener('click', sendReportEmail);
}

// --- Eventos iniciales ---
document.addEventListener('DOMContentLoaded', () => {
  enforceSession();
  setupNavigation();
  initRoleSelector();
  updateNavigationByRole();
  initAdminTabs();
  initBrandingConfig();
  initTemplateEditor();
  initUserAdmin();
  initAdminUploads();
  document.getElementById('exportAuditsBtn').addEventListener('click', exportAudits);
  if (isAuthenticated) {
    loadInitialData().then(() => {
      dataLoaded = true;
      updateNavigationByRole();
    });
  }
});
