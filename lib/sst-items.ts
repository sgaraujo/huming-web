export type Respuesta = 'cumple' | 'no_cumple' | 'no_aplica_j' | 'no_aplica_nj' | null;

export interface SSTItem {
  id: string;
  ciclo: 'I. PLANEAR' | 'II. HACER' | 'III. VERIFICAR' | 'IV. ACTUAR';
  estandar: string;
  subEstandar: string;
  descripcion: string;
  valor: number;
}

export interface RespuestaItem {
  estado: Respuesta;
  observacion?: string;
}

export const SST_ITEMS: SSTItem[] = [
  // ──────────────────────────── I. PLANEAR ────────────────────────────
  // RECURSOS (10%)
  { id: '1.1.1', ciclo: 'I. PLANEAR', estandar: 'RECURSOS (10%)', subEstandar: 'Recursos financieros, técnicos, humanos y de otra índole (4%)', descripcion: '1.1.1 Responsable del Sistema de Gestión de Seguridad y Salud en el Trabajo SG-SST', valor: 0.5 },
  { id: '1.1.2', ciclo: 'I. PLANEAR', estandar: 'RECURSOS (10%)', subEstandar: 'Recursos financieros, técnicos, humanos y de otra índole (4%)', descripcion: '1.1.2 Responsabilidades en el Sistema de Gestión de Seguridad y Salud en el Trabajo – SG-SST', valor: 0.5 },
  { id: '1.1.3', ciclo: 'I. PLANEAR', estandar: 'RECURSOS (10%)', subEstandar: 'Recursos financieros, técnicos, humanos y de otra índole (4%)', descripcion: '1.1.3 Asignación de recursos para el Sistema de Gestión en Seguridad y Salud en el Trabajo – SG-SST', valor: 0.5 },
  { id: '1.1.4', ciclo: 'I. PLANEAR', estandar: 'RECURSOS (10%)', subEstandar: 'Recursos financieros, técnicos, humanos y de otra índole (4%)', descripcion: '1.1.4 Afiliación al Sistema General de Riesgos Laborales', valor: 0.5 },
  { id: '1.1.5', ciclo: 'I. PLANEAR', estandar: 'RECURSOS (10%)', subEstandar: 'Recursos financieros, técnicos, humanos y de otra índole (4%)', descripcion: '1.1.5 Pago de pensión trabajadores alto riesgo', valor: 0.5 },
  { id: '1.1.6', ciclo: 'I. PLANEAR', estandar: 'RECURSOS (10%)', subEstandar: 'Recursos financieros, técnicos, humanos y de otra índole (4%)', descripcion: '1.1.6 Conformación COPASST / Vigía', valor: 0.5 },
  { id: '1.1.7', ciclo: 'I. PLANEAR', estandar: 'RECURSOS (10%)', subEstandar: 'Recursos financieros, técnicos, humanos y de otra índole (4%)', descripcion: '1.1.7 Capacitación COPASST / Vigía', valor: 0.5 },
  { id: '1.1.8', ciclo: 'I. PLANEAR', estandar: 'RECURSOS (10%)', subEstandar: 'Recursos financieros, técnicos, humanos y de otra índole (4%)', descripcion: '1.1.8 Conformación Comité de Convivencia', valor: 0.5 },
  { id: '1.2.1', ciclo: 'I. PLANEAR', estandar: 'RECURSOS (10%)', subEstandar: 'Capacitación en el Sistema de Gestión de la SST (6%)', descripcion: '1.2.1 Programa Capacitación promoción y prevención PYP', valor: 2.0 },
  { id: '1.2.2', ciclo: 'I. PLANEAR', estandar: 'RECURSOS (10%)', subEstandar: 'Capacitación en el Sistema de Gestión de la SST (6%)', descripcion: '1.2.2 Capacitación, Inducción y Reinducción en SG-SST, actividades de Promoción y Prevención PyP', valor: 2.0 },
  { id: '1.2.3', ciclo: 'I. PLANEAR', estandar: 'RECURSOS (10%)', subEstandar: 'Capacitación en el Sistema de Gestión de la SST (6%)', descripcion: '1.2.3 Responsables del SG-SST con curso (50 horas)', valor: 2.0 },

  // GESTIÓN INTEGRAL (15%)
  { id: '2.1.1', ciclo: 'I. PLANEAR', estandar: 'GESTIÓN INTEGRAL DEL SG-SST (15%)', subEstandar: 'Política de Seguridad y Salud en el Trabajo (1%)', descripcion: '2.1.1 Política del SG-SST firmada, fechada y comunicada al COPASST/Vigía', valor: 1.0 },
  { id: '2.2.1', ciclo: 'I. PLANEAR', estandar: 'GESTIÓN INTEGRAL DEL SG-SST (15%)', subEstandar: 'Objetivos del SG-SST (1%)', descripcion: '2.2.1 Objetivos definidos, claros, medibles, cuantificables, con metas, documentados, revisados del SG-SST', valor: 1.0 },
  { id: '2.3.1', ciclo: 'I. PLANEAR', estandar: 'GESTIÓN INTEGRAL DEL SG-SST (15%)', subEstandar: 'Evaluación inicial del SG-SST (1%)', descripcion: '2.3.1 Evaluación e identificación de prioridades', valor: 1.0 },
  { id: '2.4.1', ciclo: 'I. PLANEAR', estandar: 'GESTIÓN INTEGRAL DEL SG-SST (15%)', subEstandar: 'Plan Anual de Trabajo (2%)', descripcion: '2.4.1 Plan que identifica objetivos, metas, responsabilidad, recursos con cronograma y firmado', valor: 2.0 },
  { id: '2.5.1', ciclo: 'I. PLANEAR', estandar: 'GESTIÓN INTEGRAL DEL SG-SST (15%)', subEstandar: 'Conservación de la documentación (2%)', descripcion: '2.5.1 Archivo o retención documental del SG-SST', valor: 2.0 },
  { id: '2.6.1', ciclo: 'I. PLANEAR', estandar: 'GESTIÓN INTEGRAL DEL SG-SST (15%)', subEstandar: 'Rendición de cuentas (1%)', descripcion: '2.6.1 Rendición sobre el desempeño', valor: 1.0 },
  { id: '2.7.1', ciclo: 'I. PLANEAR', estandar: 'GESTIÓN INTEGRAL DEL SG-SST (15%)', subEstandar: 'Normatividad nacional vigente en SST (2%)', descripcion: '2.7.1 Matriz legal', valor: 2.0 },
  { id: '2.8.1', ciclo: 'I. PLANEAR', estandar: 'GESTIÓN INTEGRAL DEL SG-SST (15%)', subEstandar: 'Comunicación (1%)', descripcion: '2.8.1 Mecanismos de comunicación, auto reporte en SG-SST', valor: 1.0 },
  { id: '2.9.1', ciclo: 'I. PLANEAR', estandar: 'GESTIÓN INTEGRAL DEL SG-SST (15%)', subEstandar: 'Adquisiciones (1%)', descripcion: '2.9.1 Identificación, evaluación para adquisición de productos y servicios en SG-SST', valor: 1.0 },
  { id: '2.10.1', ciclo: 'I. PLANEAR', estandar: 'GESTIÓN INTEGRAL DEL SG-SST (15%)', subEstandar: 'Contratación (2%)', descripcion: '2.10.1 Evaluación y selección de proveedores y contratistas', valor: 2.0 },
  { id: '2.11.1', ciclo: 'I. PLANEAR', estandar: 'GESTIÓN INTEGRAL DEL SG-SST (15%)', subEstandar: 'Gestión del cambio (1%)', descripcion: '2.11.1 Evaluación del impacto de cambios internos y externos en el SG-SST', valor: 1.0 },

  // ──────────────────────────── II. HACER ────────────────────────────
  // GESTIÓN DE LA SALUD (20%)
  { id: '3.1.1', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Condiciones de salud en el trabajo (9%)', descripcion: '3.1.1 Evaluación Médica Ocupacional', valor: 1.0 },
  { id: '3.1.2', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Condiciones de salud en el trabajo (9%)', descripcion: '3.1.2 Actividades de Promoción y Prevención en Salud', valor: 1.0 },
  { id: '3.1.3', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Condiciones de salud en el trabajo (9%)', descripcion: '3.1.3 Información al médico de los perfiles de cargo', valor: 1.0 },
  { id: '3.1.4', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Condiciones de salud en el trabajo (9%)', descripcion: '3.1.4 Realización de los exámenes médicos ocupacionales: preingreso, periódicos', valor: 1.0 },
  { id: '3.1.5', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Condiciones de salud en el trabajo (9%)', descripcion: '3.1.5 Custodia de Historias Clínicas', valor: 1.0 },
  { id: '3.1.6', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Condiciones de salud en el trabajo (9%)', descripcion: '3.1.6 Restricciones y recomendaciones médico laborales', valor: 1.0 },
  { id: '3.1.7', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Condiciones de salud en el trabajo (9%)', descripcion: '3.1.7 Estilos de vida y entornos saludables (controles tabaquismo, alcoholismo, farmacodependencia)', valor: 1.0 },
  { id: '3.1.8', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Condiciones de salud en el trabajo (9%)', descripcion: '3.1.8 Agua potable, servicios sanitarios y disposición de basuras', valor: 1.0 },
  { id: '3.1.9', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Condiciones de salud en el trabajo (9%)', descripcion: '3.1.9 Eliminación adecuada de residuos sólidos, líquidos o gaseosos', valor: 1.0 },
  { id: '3.2.1', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Registro, reporte e investigación de enfermedades y accidentes (5%)', descripcion: '3.2.1 Reporte de los accidentes de trabajo y enfermedad laboral a la ARL, EPS y Ministerio de Trabajo', valor: 2.0 },
  { id: '3.2.2', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Registro, reporte e investigación de enfermedades y accidentes (5%)', descripcion: '3.2.2 Investigación de Accidentes, Incidentes y Enfermedad Laboral', valor: 2.0 },
  { id: '3.2.3', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Registro, reporte e investigación de enfermedades y accidentes (5%)', descripcion: '3.2.3 Registro y análisis estadístico de Incidentes, Accidentes de Trabajo y Enfermedad Laboral', valor: 1.0 },
  { id: '3.3.1', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Mecanismos de vigilancia de condiciones de salud (6%)', descripcion: '3.3.1 Medición de la severidad de los Accidentes de Trabajo y Enfermedad Laboral', valor: 1.0 },
  { id: '3.3.2', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Mecanismos de vigilancia de condiciones de salud (6%)', descripcion: '3.3.2 Medición de la frecuencia de los Incidentes, Accidentes de Trabajo y Enfermedad Laboral', valor: 1.0 },
  { id: '3.3.3', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Mecanismos de vigilancia de condiciones de salud (6%)', descripcion: '3.3.3 Medición de la mortalidad de Accidentes de Trabajo y Enfermedad Laboral', valor: 1.0 },
  { id: '3.3.4', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Mecanismos de vigilancia de condiciones de salud (6%)', descripcion: '3.3.4 Medición de la prevalencia de incidentes, Accidentes de Trabajo y Enfermedad Laboral', valor: 1.0 },
  { id: '3.3.5', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Mecanismos de vigilancia de condiciones de salud (6%)', descripcion: '3.3.5 Medición de la incidencia de Incidentes, Accidentes de Trabajo y Enfermedad Laboral', valor: 1.0 },
  { id: '3.3.6', ciclo: 'II. HACER', estandar: 'GESTIÓN DE LA SALUD (20%)', subEstandar: 'Mecanismos de vigilancia de condiciones de salud (6%)', descripcion: '3.3.6 Medición del ausentismo por incidentes, Accidentes de Trabajo y Enfermedad Laboral', valor: 1.0 },

  // GESTIÓN DE PELIGROS Y RIESGOS (30%)
  { id: '4.1.1', ciclo: 'II. HACER', estandar: 'GESTIÓN DE PELIGROS Y RIESGOS (30%)', subEstandar: 'Identificación de peligros, evaluación y valoración de riesgos (15%)', descripcion: '4.1.1 Metodología para la identificación, evaluación y valoración de peligros', valor: 4.0 },
  { id: '4.1.2', ciclo: 'II. HACER', estandar: 'GESTIÓN DE PELIGROS Y RIESGOS (30%)', subEstandar: 'Identificación de peligros, evaluación y valoración de riesgos (15%)', descripcion: '4.1.2 Identificación de peligros con participación de todos los niveles de la empresa', valor: 4.0 },
  { id: '4.1.3', ciclo: 'II. HACER', estandar: 'GESTIÓN DE PELIGROS Y RIESGOS (30%)', subEstandar: 'Identificación de peligros, evaluación y valoración de riesgos (15%)', descripcion: '4.1.3 Identificación y priorización de la naturaleza de los peligros (Metodología adicional, cancerígenos y otros)', valor: 3.0 },
  { id: '4.1.4', ciclo: 'II. HACER', estandar: 'GESTIÓN DE PELIGROS Y RIESGOS (30%)', subEstandar: 'Identificación de peligros, evaluación y valoración de riesgos (15%)', descripcion: '4.1.4 Realización mediciones ambientales, químicos, físicos y biológicos', valor: 4.0 },
  { id: '4.2.1', ciclo: 'II. HACER', estandar: 'GESTIÓN DE PELIGROS Y RIESGOS (30%)', subEstandar: 'Medidas de prevención y control de peligros/riesgos (15%)', descripcion: '4.2.1 Se implementan las medidas de prevención y control de peligros', valor: 2.5 },
  { id: '4.2.2', ciclo: 'II. HACER', estandar: 'GESTIÓN DE PELIGROS Y RIESGOS (30%)', subEstandar: 'Medidas de prevención y control de peligros/riesgos (15%)', descripcion: '4.2.2 Se verifica aplicación de las medidas de prevención y control', valor: 2.5 },
  { id: '4.2.3', ciclo: 'II. HACER', estandar: 'GESTIÓN DE PELIGROS Y RIESGOS (30%)', subEstandar: 'Medidas de prevención y control de peligros/riesgos (15%)', descripcion: '4.2.3 Hay procedimientos, instructivos, fichas, protocolos', valor: 2.5 },
  { id: '4.2.4', ciclo: 'II. HACER', estandar: 'GESTIÓN DE PELIGROS Y RIESGOS (30%)', subEstandar: 'Medidas de prevención y control de peligros/riesgos (15%)', descripcion: '4.2.4 Inspección con el COPASST o Vigía', valor: 2.5 },
  { id: '4.2.5', ciclo: 'II. HACER', estandar: 'GESTIÓN DE PELIGROS Y RIESGOS (30%)', subEstandar: 'Medidas de prevención y control de peligros/riesgos (15%)', descripcion: '4.2.5 Mantenimiento periódico de instalaciones, equipos, máquinas, herramientas', valor: 2.5 },
  { id: '4.2.6', ciclo: 'II. HACER', estandar: 'GESTIÓN DE PELIGROS Y RIESGOS (30%)', subEstandar: 'Medidas de prevención y control de peligros/riesgos (15%)', descripcion: '4.2.6 Entrega de Elementos de Protección Personal EPP, se verifica con contratistas y subcontratistas', valor: 2.5 },

  // GESTIÓN DE AMENAZAS (10%)
  { id: '5.1.1', ciclo: 'II. HACER', estandar: 'GESTIÓN DE AMENAZAS (10%)', subEstandar: 'Plan de prevención, preparación y respuesta ante emergencias (10%)', descripcion: '5.1.1 Se cuenta con el Plan de Prevención y Preparación ante emergencias', valor: 5.0 },
  { id: '5.1.2', ciclo: 'II. HACER', estandar: 'GESTIÓN DE AMENAZAS (10%)', subEstandar: 'Plan de prevención, preparación y respuesta ante emergencias (10%)', descripcion: '5.1.2 Brigada de prevención conformada, capacitada y dotada', valor: 5.0 },

  // ──────────────────────────── III. VERIFICAR ────────────────────────────
  { id: '6.1.1', ciclo: 'III. VERIFICAR', estandar: 'VERIFICACIÓN DEL SG-SST (5%)', subEstandar: 'Gestión y resultados del SG-SST (5%)', descripcion: '6.1.1 Indicadores estructura, proceso y resultado', valor: 1.25 },
  { id: '6.1.2', ciclo: 'III. VERIFICAR', estandar: 'VERIFICACIÓN DEL SG-SST (5%)', subEstandar: 'Gestión y resultados del SG-SST (5%)', descripcion: '6.1.2 La empresa adelanta auditoría por lo menos una vez al año', valor: 1.25 },
  { id: '6.1.3', ciclo: 'III. VERIFICAR', estandar: 'VERIFICACIÓN DEL SG-SST (5%)', subEstandar: 'Gestión y resultados del SG-SST (5%)', descripcion: '6.1.3 Revisión anual por la alta dirección, resultados y alcance de la auditoría', valor: 1.25 },
  { id: '6.1.4', ciclo: 'III. VERIFICAR', estandar: 'VERIFICACIÓN DEL SG-SST (5%)', subEstandar: 'Gestión y resultados del SG-SST (5%)', descripcion: '6.1.4 Planificar auditoría con el COPASST', valor: 1.25 },

  // ──────────────────────────── IV. ACTUAR ────────────────────────────
  { id: '7.1.1', ciclo: 'IV. ACTUAR', estandar: 'MEJORAMIENTO (10%)', subEstandar: 'Acciones preventivas y correctivas con base en los resultados del SG-SST (10%)', descripcion: '7.1.1 Definir acciones de Promoción y Prevención con base en resultados del SG-SST', valor: 2.5 },
  { id: '7.1.2', ciclo: 'IV. ACTUAR', estandar: 'MEJORAMIENTO (10%)', subEstandar: 'Acciones preventivas y correctivas con base en los resultados del SG-SST (10%)', descripcion: '7.1.2 Toma de medidas correctivas, preventivas y de mejora', valor: 2.5 },
  { id: '7.1.3', ciclo: 'IV. ACTUAR', estandar: 'MEJORAMIENTO (10%)', subEstandar: 'Acciones preventivas y correctivas con base en los resultados del SG-SST (10%)', descripcion: '7.1.3 Ejecución de acciones preventivas, correctivas y de mejora de la investigación de incidentes y accidentes', valor: 2.5 },
  { id: '7.1.4', ciclo: 'IV. ACTUAR', estandar: 'MEJORAMIENTO (10%)', subEstandar: 'Acciones preventivas y correctivas con base en los resultados del SG-SST (10%)', descripcion: '7.1.4 Implementar medidas y acciones correctivas de autoridades y de ARL', valor: 2.5 },
];

export const CICLOS = ['I. PLANEAR', 'II. HACER', 'III. VERIFICAR', 'IV. ACTUAR'] as const;

// ── Lógica de tiers por Res. 0312 de 2019 ────────────────────────────────────
export type NivelRiesgo = 'I' | 'II' | 'III' | 'IV' | 'V';

/** IDs de los ítems que aplican a cada tier */
export const TIER_IDS: Record<7 | 21 | 60, string[]> = {
  7: ['1.1.1', '1.1.2', '1.1.4', '1.2.1', '2.4.1', '3.1.4', '4.1.1', '4.2.1'],
  21: [
    '1.1.1', '1.1.2', '1.1.3', '1.1.4', '1.1.6', '1.1.8',
    '1.2.1', '2.1.1', '2.4.1', '2.5.1',
    '3.1.1', '3.1.2', '3.1.4', '3.1.6', '3.2.1', '3.2.2',
    '4.1.1', '4.2.5', '4.2.6',
    '5.1.1', '5.1.2', '6.1.4',
  ],
  60: [],
};

export function getTier(trabajadores: number, nivelRiesgo: NivelRiesgo): 7 | 21 | 60 {
  const riesgoBajo = ['I', 'II', 'III'].includes(nivelRiesgo);
  if (trabajadores <= 10 && riesgoBajo) return 7;
  if (trabajadores <= 50 && riesgoBajo) return 21;
  return 60;
}

export function getItemsByTier(tier: 7 | 21 | 60): SSTItem[] {
  if (tier === 60) return SST_ITEMS;
  return SST_ITEMS.filter((i) => TIER_IDS[tier].includes(i.id));
}

export const ESTANDARES_MAX: Record<string, number> = {
  'RECURSOS (10%)': 10,
  'GESTIÓN INTEGRAL DEL SG-SST (15%)': 15,
  'GESTIÓN DE LA SALUD (20%)': 20,
  'GESTIÓN DE PELIGROS Y RIESGOS (30%)': 30,
  'GESTIÓN DE AMENAZAS (10%)': 10,
  'VERIFICACIÓN DEL SG-SST (5%)': 5,
  'MEJORAMIENTO (10%)': 10,
};

export const CICLOS_MAX: Record<string, number> = {
  'I. PLANEAR': 25,
  'II. HACER': 60,
  'III. VERIFICAR': 5,
  'IV. ACTUAR': 10,
};

export function calcularPuntaje(respuestas: Record<string, RespuestaItem>, items = SST_ITEMS): number {
  const maxPosible = items.reduce((s, i) => s + i.valor, 0);
  if (maxPosible === 0) return 0;
  const obtenido = items.reduce((total, item) => {
    const r = respuestas[item.id];
    if (!r) return total;
    if (r.estado === 'cumple' || r.estado === 'no_aplica_j') return total + item.valor;
    return total;
  }, 0);
  return (obtenido / maxPosible) * 100;
}

export function calcularNivel(puntaje: number): 'CRÍTICO' | 'MODERADO' | 'ACEPTABLE' {
  if (puntaje <= 60) return 'CRÍTICO';
  if (puntaje <= 85) return 'MODERADO';
  return 'ACEPTABLE';
}

export function calcularPorCiclo(respuestas: Record<string, RespuestaItem>, items = SST_ITEMS) {
  const result: Record<string, { obtenido: number; maximo: number }> = {};
  for (const ciclo of CICLOS) {
    const cicloItems = items.filter((i) => i.ciclo === ciclo);
    if (cicloItems.length === 0) continue;
    const obtenido = cicloItems.reduce((acc, item) => {
      const r = respuestas[item.id];
      if (!r) return acc;
      if (r.estado === 'cumple' || r.estado === 'no_aplica_j') return acc + item.valor;
      return acc;
    }, 0);
    const maximo = cicloItems.reduce((s, i) => s + i.valor, 0);
    result[ciclo] = { obtenido, maximo };
  }
  return result;
}

export function calcularPorEstandar(respuestas: Record<string, RespuestaItem>, items = SST_ITEMS) {
  const estandares = [...new Set(items.map((i) => i.estandar))];
  const result: Record<string, { obtenido: number; maximo: number }> = {};
  for (const est of estandares) {
    const estItems = items.filter((i) => i.estandar === est);
    const obtenido = estItems.reduce((acc, item) => {
      const r = respuestas[item.id];
      if (!r) return acc;
      if (r.estado === 'cumple' || r.estado === 'no_aplica_j') return acc + item.valor;
      return acc;
    }, 0);
    const maximo = estItems.reduce((s, i) => s + i.valor, 0);
    result[est] = { obtenido, maximo };
  }
  return result;
}
