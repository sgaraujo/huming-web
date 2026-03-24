import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import { calcularPorCiclo, calcularPorEstandar, SST_ITEMS, type RespuestaItem } from './sst-items';

// ── Colores de marca HumanIA ──────────────────────────────────────────────────
const C = {
  naranja: '#f97316',
  naranjaLight: '#fff7ed',
  azul: '#1e40af',
  azulLight: '#eff6ff',
  slate900: '#0f172a',
  slate700: '#334155',
  slate500: '#64748b',
  slate300: '#cbd5e1',
  slate100: '#f1f5f9',
  rojo: '#ef4444',
  rojoLight: '#fef2f2',
  amarillo: '#eab308',
  amarilloLight: '#fefce8',
  verde: '#22c55e',
  verdeLight: '#f0fdf4',
  white: '#ffffff',
};

const styles = StyleSheet.create({
  page: { fontFamily: 'Helvetica', backgroundColor: C.white, padding: 0 },

  // Header
  header: { backgroundColor: C.slate900, padding: '28 36', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerBrand: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  brandName: { fontSize: 20, fontFamily: 'Helvetica-Bold', color: C.white, letterSpacing: 0.5 },
  brandAccent: { fontSize: 20, fontFamily: 'Helvetica-Bold', color: C.naranja },
  headerSub: { fontSize: 8, color: C.slate300, marginTop: 3 },
  headerRight: { alignItems: 'flex-end' },
  headerTag: { fontSize: 7, color: C.slate300, backgroundColor: '#ffffff15', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4 },

  // Body
  body: { padding: '24 36' },

  // Score hero
  scoreCard: { flexDirection: 'row', borderRadius: 12, marginBottom: 20, overflow: 'hidden' },
  scoreLeft: { flex: 1, padding: '20 24', justifyContent: 'center' },
  scoreRight: { width: 160, padding: '20 24', alignItems: 'center', justifyContent: 'center' },
  scoreNumber: { fontSize: 56, fontFamily: 'Helvetica-Bold', lineHeight: 1 },
  scoreDivider: { fontSize: 22, color: C.slate500, marginLeft: 6 },
  scoreLabel: { fontSize: 8, color: C.slate500, marginTop: 4, marginBottom: 8 },
  nivelBadge: { fontSize: 11, fontFamily: 'Helvetica-Bold', paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20 },
  empresaNombre: { fontSize: 15, fontFamily: 'Helvetica-Bold', color: C.slate900, marginBottom: 4 },
  empresaSub: { fontSize: 8, color: C.slate500, marginBottom: 2 },
  progressBg: { height: 6, backgroundColor: '#e2e8f0', borderRadius: 3, marginTop: 12, width: '100%' },
  progressFill: { height: 6, borderRadius: 3 },
  progressLabels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 },
  progressLabel: { fontSize: 6, color: C.slate500 },

  // Section
  sectionTitle: { fontSize: 10, fontFamily: 'Helvetica-Bold', color: C.slate900, marginBottom: 10, marginTop: 18, paddingBottom: 4, borderBottomWidth: 1, borderBottomColor: C.slate300, textTransform: 'uppercase', letterSpacing: 0.8 },

  // Grid 2 cols
  row2: { flexDirection: 'row', gap: 12, marginBottom: 12 },
  col: { flex: 1 },

  // Ciclo bars
  cicloCard: { backgroundColor: C.slate100, borderRadius: 8, padding: '12 14', marginBottom: 8 },
  cicloTitle: { fontSize: 8, fontFamily: 'Helvetica-Bold', color: C.slate700, marginBottom: 6 },
  cicloRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 },
  cicloLabel: { fontSize: 7, color: C.slate500, width: 70 },
  cicloBarBg: { flex: 1, height: 7, backgroundColor: '#e2e8f0', borderRadius: 3 },
  cicloBarFill: { height: 7, borderRadius: 3, backgroundColor: C.azul },
  cicloValue: { fontSize: 7, fontFamily: 'Helvetica-Bold', color: C.slate700, width: 35, textAlign: 'right' },

  // Estandar table
  tableRow: { flexDirection: 'row', paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: C.slate100 },
  tableHeader: { flexDirection: 'row', paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: C.slate300, backgroundColor: C.slate100, paddingHorizontal: 6 },
  tableHeaderText: { fontSize: 7, fontFamily: 'Helvetica-Bold', color: C.slate700 },
  tableCellEst: { flex: 3, fontSize: 7, color: C.slate700 },
  tableCellNum: { flex: 1, fontSize: 7, color: C.slate700, textAlign: 'center' },
  tableCellPct: { flex: 1, fontSize: 7, fontFamily: 'Helvetica-Bold', textAlign: 'right' },

  // Plan mejora
  mejorItem: { flexDirection: 'row', gap: 8, paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: C.slate100 },
  mejorBullet: { width: 14, height: 14, borderRadius: 7, backgroundColor: C.rojoLight, alignItems: 'center', justifyContent: 'center', marginTop: 1, flexShrink: 0 },
  mejorBulletText: { fontSize: 6, fontFamily: 'Helvetica-Bold', color: C.rojo },
  mejorDesc: { flex: 1, fontSize: 7, color: C.slate700, lineHeight: 1.5 },
  mejorVal: { fontSize: 7, color: C.slate500, width: 30, textAlign: 'right' },

  // Resumen respuestas
  statBox: { flex: 1, borderRadius: 8, padding: '10 12', alignItems: 'center' },
  statNum: { fontSize: 22, fontFamily: 'Helvetica-Bold' },
  statLabel: { fontSize: 6, color: C.slate500, marginTop: 2, textAlign: 'center' },

  // Footer
  footer: { backgroundColor: C.slate900, padding: '14 36', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 },
  footerText: { fontSize: 7, color: C.slate500 },
  footerBrand: { fontSize: 8, fontFamily: 'Helvetica-Bold', color: C.white },

  // Action box
  actionBox: { borderRadius: 10, padding: '14 16', marginTop: 16 },
  actionTitle: { fontSize: 9, fontFamily: 'Helvetica-Bold', marginBottom: 4 },
  actionText: { fontSize: 7, lineHeight: 1.6 },
});

// ── Helpers ───────────────────────────────────────────────────────────────────
function nivelColors(nivel: string) {
  if (nivel === 'CRÍTICO') return { bg: C.rojoLight, text: C.rojo, bar: C.rojo, cardBg: '#fef2f2', emoji: '🔴' };
  if (nivel === 'MODERADO') return { bg: C.amarilloLight, text: '#92400e', bar: C.amarillo, cardBg: '#fefce8', emoji: '🟡' };
  return { bg: C.verdeLight, text: '#14532d', bar: C.verde, cardBg: '#f0fdf4', emoji: '🟢' };
}

function accionNivel(nivel: string) {
  if (nivel === 'CRÍTICO') return 'Debes realizar un Plan de Mejoramiento de inmediato y ponerlo a disposición del Ministerio del Trabajo. Se hará seguimiento anual.';
  if (nivel === 'MODERADO') return 'Elaborar Plan de Mejoramiento y enviar reporte de avances a la ARL en máximo 6 meses. Plan de visita del Ministerio.';
  return 'Mantener calificación y evidencias a disposición del Ministerio del Trabajo. Incluir mejoras en el Plan Anual de Trabajo.';
}

// ── Interfaces ────────────────────────────────────────────────────────────────
interface EmpresaData {
  nombre: string; nit: string; sector: string;
  responsable: string; cargo?: string; email: string;
  telefono?: string; trabajadores?: string;
}

interface PDFProps {
  empresa: EmpresaData;
  respuestas: Record<string, RespuestaItem>;
  puntaje: number;
  nivel: 'CRÍTICO' | 'MODERADO' | 'ACEPTABLE';
  fecha: string;
  evaluacionId: string;
}

// ── Componente PDF ────────────────────────────────────────────────────────────
export function EvaluacionPDF({ empresa, respuestas, puntaje, nivel, fecha, evaluacionId }: PDFProps) {
  const nc = nivelColors(nivel);
  const porCiclo = calcularPorCiclo(respuestas);
  const porEstandar = calcularPorEstandar(respuestas);
  const noConformes = SST_ITEMS.filter(i => {
    const r = respuestas[i.id];
    return r?.estado === 'no_cumple' || r?.estado === 'no_aplica_nj';
  });

  const cumpleCount = SST_ITEMS.filter(i => respuestas[i.id]?.estado === 'cumple').length;
  const noAplicaJ = SST_ITEMS.filter(i => respuestas[i.id]?.estado === 'no_aplica_j').length;
  const noAplicaNJ = SST_ITEMS.filter(i => respuestas[i.id]?.estado === 'no_aplica_nj').length;
  const noCumple = SST_ITEMS.filter(i => respuestas[i.id]?.estado === 'no_cumple').length;

  return (
    <Document
      title={`Autoevaluación SG-SST – ${empresa.nombre}`}
      author="HumanIA"
      subject="Estándares Mínimos Resolución 0312 de 2019"
    >
      <Page size="A4" style={styles.page}>

        {/* ── HEADER ── */}
        <View style={styles.header}>
          <View>
            <View style={styles.headerBrand}>
              <Text style={styles.brandName}>Human</Text>
              <Text style={styles.brandAccent}>IA</Text>
            </View>
            <Text style={styles.headerSub}>Consultoría en SST · Sistemas de Gestión ISO · Colombia</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.headerTag}>Res. 0312 de 2019 · Estándares Mínimos SG-SST</Text>
            <Text style={[styles.headerSub, { marginTop: 4 }]}>Fecha: {fecha} · ID: {evaluacionId.slice(0, 8)}</Text>
          </View>
        </View>

        <View style={styles.body}>

          {/* ── SCORE HERO ── */}
          <View style={[styles.scoreCard, { backgroundColor: nc.cardBg, borderWidth: 1, borderColor: nc.bar + '40' }]}>
            <View style={styles.scoreLeft}>
              <Text style={styles.empresaNombre}>{empresa.nombre}</Text>
              <Text style={styles.empresaSub}>NIT: {empresa.nit} · Sector: {empresa.sector}</Text>
              <Text style={styles.empresaSub}>Responsable: {empresa.responsable}{empresa.cargo ? ` · ${empresa.cargo}` : ''}</Text>
              <Text style={styles.empresaSub}>{empresa.email}{empresa.telefono ? ` · ${empresa.telefono}` : ''}</Text>
              {empresa.trabajadores && <Text style={styles.empresaSub}>Trabajadores: {empresa.trabajadores}</Text>}

              {/* Progress bar */}
              <View style={styles.progressBg}>
                <View style={[styles.progressFill, { width: `${puntaje}%`, backgroundColor: nc.bar }]} />
              </View>
              <View style={styles.progressLabels}>
                <Text style={styles.progressLabel}>0%</Text>
                <Text style={[styles.progressLabel, { color: C.rojo }]}>60% Crítico</Text>
                <Text style={[styles.progressLabel, { color: C.amarillo }]}>85% Moderado</Text>
                <Text style={[styles.progressLabel, { color: C.verde }]}>100%</Text>
              </View>
            </View>

            <View style={[styles.scoreRight, { backgroundColor: nc.bg }]}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={[styles.scoreNumber, { color: nc.bar }]}>{puntaje.toFixed(1)}</Text>
                <Text style={styles.scoreDivider}>/100</Text>
              </View>
              <Text style={styles.scoreLabel}>Puntaje obtenido</Text>
              <View style={[styles.nivelBadge, { backgroundColor: nc.bg, borderWidth: 1, borderColor: nc.bar }]}>
                <Text style={[{ fontSize: 11, fontFamily: 'Helvetica-Bold', color: nc.text }]}>{nivel}</Text>
              </View>
            </View>
          </View>

          {/* ── ACCIÓN REQUERIDA ── */}
          <View style={[styles.actionBox, { backgroundColor: nc.bg, borderWidth: 1, borderColor: nc.bar + '50' }]}>
            <Text style={[styles.actionTitle, { color: nc.text }]}>Acción requerida — Nivel {nivel}</Text>
            <Text style={[styles.actionText, { color: nc.text + 'cc' }]}>{accionNivel(nivel)}</Text>
          </View>

          {/* ── PUNTAJE POR CICLO ── */}
          <Text style={styles.sectionTitle}>Resultados por Ciclo PHVA</Text>
          <View style={styles.row2}>
            {Object.entries(porCiclo).map(([ciclo, v]) => {
              const pct = v.maximo > 0 ? (v.obtenido / v.maximo) * 100 : 0;
              return (
                <View key={ciclo} style={[styles.col, styles.cicloCard]}>
                  <Text style={styles.cicloTitle}>{ciclo}</Text>
                  <View style={styles.cicloRow}>
                    <Text style={styles.cicloLabel}>Obtenido</Text>
                    <View style={styles.cicloBarBg}>
                      <View style={[styles.cicloBarFill, { width: `${pct}%`, backgroundColor: pct >= 86 ? C.verde : pct >= 61 ? C.amarillo : C.rojo }]} />
                    </View>
                    <Text style={styles.cicloValue}>{v.obtenido.toFixed(1)}/{v.maximo}</Text>
                  </View>
                  <Text style={[{ fontSize: 7, color: C.slate500, marginTop: 2 }]}>{pct.toFixed(0)}% de cumplimiento</Text>
                </View>
              );
            })}
          </View>

          {/* ── TABLA POR ESTÁNDAR ── */}
          <Text style={styles.sectionTitle}>Puntaje por Estándar</Text>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, { flex: 3 }]}>Estándar</Text>
            <Text style={[styles.tableHeaderText, { flex: 1, textAlign: 'center' }]}>Obtenido</Text>
            <Text style={[styles.tableHeaderText, { flex: 1, textAlign: 'center' }]}>Máximo</Text>
            <Text style={[styles.tableHeaderText, { flex: 1, textAlign: 'right' }]}>%</Text>
          </View>
          {Object.entries(porEstandar).map(([est, v]) => {
            const pct = v.maximo > 0 ? (v.obtenido / v.maximo) * 100 : 0;
            return (
              <View key={est} style={[styles.tableRow, { paddingHorizontal: 6 }]}>
                <Text style={styles.tableCellEst}>{est.split('(')[0].trim()}</Text>
                <Text style={styles.tableCellNum}>{v.obtenido.toFixed(2)}</Text>
                <Text style={styles.tableCellNum}>{v.maximo}</Text>
                <Text style={[styles.tableCellPct, { color: pct >= 86 ? C.verde : pct >= 61 ? '#92400e' : C.rojo }]}>
                  {pct.toFixed(0)}%
                </Text>
              </View>
            );
          })}

          {/* ── RESUMEN RESPUESTAS ── */}
          <Text style={styles.sectionTitle}>Resumen de respuestas</Text>
          <View style={{ flexDirection: 'row', gap: 8, marginBottom: 4 }}>
            <View style={[styles.statBox, { backgroundColor: C.verdeLight }]}>
              <Text style={[styles.statNum, { color: C.verde }]}>{cumpleCount}</Text>
              <Text style={styles.statLabel}>Cumple totalmente</Text>
            </View>
            <View style={[styles.statBox, { backgroundColor: C.rojoLight }]}>
              <Text style={[styles.statNum, { color: C.rojo }]}>{noCumple}</Text>
              <Text style={styles.statLabel}>No cumple</Text>
            </View>
            <View style={[styles.statBox, { backgroundColor: C.azulLight }]}>
              <Text style={[styles.statNum, { color: C.azul }]}>{noAplicaJ}</Text>
              <Text style={styles.statLabel}>N/A Justificado</Text>
            </View>
            <View style={[styles.statBox, { backgroundColor: C.amarilloLight }]}>
              <Text style={[styles.statNum, { color: '#92400e' }]}>{noAplicaNJ}</Text>
              <Text style={styles.statLabel}>N/A Sin justificar</Text>
            </View>
          </View>

        </View>

        {/* ── FOOTER ── */}
        <View style={styles.footer}>
          <View>
            <Text style={styles.footerBrand}>HumanIA</Text>
            <Text style={styles.footerText}>comercial@humania.com.co · +57 310 236 5931 · Bogotá, Colombia</Text>
          </View>
          <Text style={styles.footerText}>Autoevaluación Estándares Mínimos SG-SST · Res. 0312 de 2019</Text>
        </View>

      </Page>

      {/* ── PÁGINA 2: Plan de Mejoramiento ── */}
      {noConformes.length > 0 && (
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <View>
              <View style={styles.headerBrand}>
                <Text style={styles.brandName}>Human</Text>
                <Text style={styles.brandAccent}>IA</Text>
              </View>
              <Text style={styles.headerSub}>Plan de Mejoramiento · {empresa.nombre}</Text>
            </View>
            <Text style={styles.headerTag}>{noConformes.length} ítems requieren acción</Text>
          </View>

          <View style={styles.body}>
            <Text style={styles.sectionTitle}>Ítems para Plan de Mejoramiento ({noConformes.length})</Text>
            <Text style={[{ fontSize: 7, color: C.slate500, marginBottom: 10 }]}>
              Los siguientes estándares obtuvieron calificación de cero y requieren implementar acciones correctivas o preventivas.
            </Text>

            {noConformes.map((item, idx) => {
              const r = respuestas[item.id];
              return (
                <View key={item.id} style={styles.mejorItem}>
                  <View style={styles.mejorBullet}>
                    <Text style={styles.mejorBulletText}>{idx + 1}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[{ fontSize: 7, fontFamily: 'Helvetica-Bold', color: C.slate700, marginBottom: 2 }]}>
                      {item.id} · {item.estandar.split('(')[0].trim()}
                    </Text>
                    <Text style={styles.mejorDesc}>{item.descripcion}</Text>
                    {r?.observacion && (
                      <Text style={[{ fontSize: 6, color: C.slate500, marginTop: 2 }]}>
                        Observación: {r.observacion}
                      </Text>
                    )}
                    <Text style={[{ fontSize: 6, color: C.slate500, marginTop: 2 }]}>
                      Estado: {r?.estado === 'no_cumple' ? 'No cumple' : 'N/A sin justificar'} · Ciclo: {item.ciclo}
                    </Text>
                  </View>
                  <Text style={styles.mejorVal}>{item.valor} pts</Text>
                </View>
              );
            })}

            {/* CTA HumanIA */}
            <View style={[styles.actionBox, { backgroundColor: C.azulLight, borderWidth: 1, borderColor: C.azul + '30', marginTop: 20 }]}>
              <Text style={[styles.actionTitle, { color: C.azul }]}>¿Necesitas apoyo en tu Plan de Mejoramiento?</Text>
              <Text style={[styles.actionText, { color: C.slate700 }]}>
                El equipo de HumanIA te acompaña desde el diagnóstico hasta la implementación completa del SG-SST.
                Contáctanos en comercial@humania.com.co o al +57 310 236 5931.
              </Text>
            </View>
          </View>

          <View style={styles.footer}>
            <View>
              <Text style={styles.footerBrand}>HumanIA</Text>
              <Text style={styles.footerText}>comercial@humania.com.co · +57 310 236 5931 · Bogotá, Colombia</Text>
            </View>
            <Text style={styles.footerText}>Autoevaluación Estándares Mínimos SG-SST · Res. 0312 de 2019</Text>
          </View>
        </Page>
      )}
    </Document>
  );
}
