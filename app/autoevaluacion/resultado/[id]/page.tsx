'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import {
  calcularPorCiclo,
  SST_ITEMS,
  type RespuestaItem,
} from '@/lib/sst-items';
import { Loader2, CheckCircle2, XCircle, ArrowLeft, Download } from 'lucide-react';

interface Evaluacion {
  empresa: {
    nombre: string;
    nit: string;
    sector: string;
    responsable: string;
    cargo?: string;
    email: string;
    trabajadores?: string;
  };
  respuestas: Record<string, RespuestaItem>;
  puntaje: number;
  nivel: 'CRÍTICO' | 'MODERADO' | 'ACEPTABLE';
  createdAt: { seconds: number };
}

export default function ResultadoPage() {
  const { id } = useParams<{ id: string }>();
  const { isAdmin } = useAuth();
  const [data, setData] = useState<Evaluacion | null>(null);
  const [fetching, setFetching] = useState(true);
  const [downloadingPdf, setDownloadingPdf] = useState(false);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const snap = await getDoc(doc(db, 'evaluaciones', id));
        if (snap.exists()) setData(snap.data() as Evaluacion);
      } catch {
        // permission denied or network error — setData stays null
      } finally {
        setFetching(false);
      }
    })();
  }, [id]);

  if (fetching) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-violet-400 animate-spin" />
      </div>
    );
  }

  async function handleDownloadPdf() {
    if (!data) return;
    setDownloadingPdf(true);
    try {
      const res = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          empresa: data.empresa,
          respuestas: data.respuestas,
          puntaje: data.puntaje,
          nivel: data.nivel,
          evaluacionId: id,
        }),
      });
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `HumanIA-SG-SST-${data.empresa.nit || 'evaluacion'}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      alert('Error generando el PDF. Intenta de nuevo.');
    } finally {
      setDownloadingPdf(false);
    }
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        Evaluación no encontrada.
      </div>
    );
  }

  const { puntaje, nivel, empresa, respuestas } = data;
  const nivelColor = nivel === 'CRÍTICO' ? 'red' : nivel === 'MODERADO' ? 'yellow' : 'green';

  const porCiclo = calcularPorCiclo(respuestas);

  const fecha = data.createdAt
    ? new Date(data.createdAt.seconds * 1000).toLocaleDateString('es-CO', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : '';

  // Items no cumplidos para plan de mejora
  const noConformes = SST_ITEMS.filter((i) => {
    const r = respuestas[i.id];
    return r?.estado === 'no_cumple' || r?.estado === 'no_aplica_nj';
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-slate-950/90 backdrop-blur border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href={isAdmin ? '/dashboard' : '/autoevaluacion/formulario'} className="text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="text-white font-bold text-lg tracking-tight">
            Human<span className="text-violet-400">IA</span>
          </Link>
          <div className="flex-1" />
          <button
            onClick={handleDownloadPdf}
            disabled={downloadingPdf}
            className="flex items-center gap-2 text-xs px-3 py-1.5 border border-white/15 text-slate-300 hover:text-white rounded-lg transition-colors disabled:opacity-60"
          >
            {downloadingPdf
              ? <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Generando...</>
              : <><Download className="w-3.5 h-3.5" /> Descargar PDF</>
            }
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Score Hero */}
        <div
          className={`rounded-2xl p-8 border ${
            nivelColor === 'red'
              ? 'bg-gradient-to-br from-red-950/60 to-slate-900 border-red-800/50'
              : nivelColor === 'yellow'
              ? 'bg-gradient-to-br from-yellow-950/60 to-slate-900 border-yellow-800/50'
              : 'bg-gradient-to-br from-green-950/60 to-slate-900 border-green-800/50'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-slate-400 text-sm mb-1">
                {empresa.nombre} · NIT {empresa.nit}
              </p>
              <p className="text-slate-500 text-xs">{fecha}</p>
              <div className="flex items-end gap-3 mt-4">
                <span
                  className={`text-7xl font-black ${
                    nivelColor === 'red' ? 'text-red-400' : nivelColor === 'yellow' ? 'text-yellow-400' : 'text-green-400'
                  }`}
                >
                  {puntaje.toFixed(1)}
                </span>
                <span className="text-slate-400 text-2xl mb-2">/ 100</span>
              </div>
              <div className={`mt-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold ${
                nivelColor === 'red'
                  ? 'bg-red-500/20 text-red-300'
                  : nivelColor === 'yellow'
                  ? 'bg-yellow-500/20 text-yellow-300'
                  : 'bg-green-500/20 text-green-300'
              }`}>
                {nivel === 'CRÍTICO' ? '🔴' : nivel === 'MODERADO' ? '🟡' : '🟢'} {nivel}
              </div>
            </div>
            <div className="text-sm text-slate-300 max-w-xs space-y-2">
              {nivel === 'CRÍTICO' && (
                <p className="text-red-300 leading-relaxed">
                  Realizar Plan de Mejoramiento de inmediato. Seguimiento anual del Ministerio de Trabajo.
                </p>
              )}
              {nivel === 'MODERADO' && (
                <p className="text-yellow-300 leading-relaxed">
                  Elaborar Plan de Mejoramiento y reportar avances a la ARL en máximo 6 meses.
                </p>
              )}
              {nivel === 'ACEPTABLE' && (
                <p className="text-green-300 leading-relaxed">
                  Mantener evidencias y mejoras en el Plan Anual de Trabajo. ¡Felicitaciones!
                </p>
              )}
              <p className="text-slate-500 text-xs mt-3">
                Res. 0312 de 2019 · SG-SST Colombia
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6 h-3 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${
                nivelColor === 'red' ? 'bg-red-500' : nivelColor === 'yellow' ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${puntaje}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>0%</span>
            <span className="text-red-400">60% Crítico</span>
            <span className="text-yellow-400">85% Moderado</span>
            <span className="text-green-400">100%</span>
          </div>
        </div>

        {/* Ciclo PHVA — tabla visual con barras */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <h3 className="text-white font-semibold">Resultado por Ciclo PHVA</h3>
            <span className="text-xs text-slate-500">obtenido / máximo</span>
          </div>
          {/* Filas */}
          <div className="divide-y divide-white/[0.06]">
            {Object.entries(porCiclo).map(([ciclo, v], idx) => {
              const pct = v.maximo > 0 ? (v.obtenido / v.maximo) * 100 : 0;
              const icons = ['📋', '⚙️', '✅', '🔄'];
              const names = ['PLANEAR', 'HACER', 'VERIFICAR', 'ACTUAR'];
              const colorBar = pct >= 85 ? 'bg-emerald-500' : pct >= 60 ? 'bg-yellow-500' : 'bg-red-500';
              return (
                <div key={ciclo} className="px-6 py-4 flex items-center gap-4">
                  <span className="text-xl shrink-0">{icons[idx] ?? '📌'}</span>
                  <div className="w-24 shrink-0">
                    <p className="text-white text-sm font-semibold">{names[idx] ?? ciclo}</p>
                    <p className="text-slate-500 text-xs">{ciclo.split('. ')[0]}</p>
                  </div>
                  <div className="flex-1">
                    <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full ${colorBar} rounded-full transition-all`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                  <div className="text-right shrink-0 w-24">
                    <span className="text-white font-bold text-sm">{v.obtenido.toFixed(1)}</span>
                    <span className="text-slate-500 text-xs"> / {v.maximo}</span>
                    <p className={`text-xs font-semibold mt-0.5 ${pct >= 85 ? 'text-emerald-400' : pct >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>{pct.toFixed(0)}%</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Resumen de respuestas */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/10">
            <h3 className="text-white font-semibold">Resumen de respuestas</h3>
          </div>
          <div className="divide-y divide-white/[0.06]">
            {[
              { label: 'Cumple', icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10', estado: 'cumple' },
              { label: 'No cumple', icon: XCircle, color: 'text-red-400', bg: 'bg-red-500/10', estado: 'no_cumple' },
            ].map(({ label, icon: Icon, color, bg, estado }) => {
              const count = SST_ITEMS.filter((i) => respuestas[i.id]?.estado === estado).length;
              const pct = SST_ITEMS.length > 0 ? Math.round((count / SST_ITEMS.length) * 100) : 0;
              return (
                <div key={estado} className="px-6 py-4 flex items-center gap-4">
                  <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <span className="text-slate-300 text-sm flex-1">{label}</span>
                  <div className="w-28 hidden sm:block">
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full ${estado === 'cumple' ? 'bg-emerald-500' : 'bg-red-500'} rounded-full`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                  <span className="text-white font-bold text-lg w-10 text-right">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Plan de mejora */}
        {noConformes.length > 0 && (
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center shrink-0">
                <XCircle className="w-4 h-4 text-red-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Plan de Mejoramiento</h3>
                <p className="text-slate-500 text-xs">{noConformes.length} ítems requieren acción inmediata</p>
              </div>
            </div>
            {/* Agrupa por estándar */}
            {(() => {
              const byEstandar = noConformes.reduce((acc, item) => {
                if (!acc[item.estandar]) acc[item.estandar] = [];
                acc[item.estandar].push(item);
                return acc;
              }, {} as Record<string, typeof noConformes>);
              return (
                <div className="divide-y divide-white/[0.06] max-h-[520px] overflow-y-auto">
                  {Object.entries(byEstandar).map(([estandar, items]) => (
                    <div key={estandar}>
                      {/* Separador de estándar */}
                      <div className="px-6 py-2.5 bg-white/[0.03] flex items-center gap-2">
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="text-[11px] font-bold text-violet-400 uppercase tracking-wider px-2 whitespace-nowrap">
                          {estandar}
                        </span>
                        <div className="h-px flex-1 bg-white/10" />
                      </div>
                      {/* Ítems */}
                      {items.map((item) => {
                        const r = respuestas[item.id];
                        return (
                          <div key={item.id} className="px-6 py-3.5 flex items-start gap-3 hover:bg-white/[0.03] transition-colors">
                            <span className="text-[11px] font-bold text-slate-600 bg-slate-800 px-2 py-0.5 rounded-md shrink-0 mt-0.5 font-mono">
                              {item.id}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-slate-200 text-sm leading-relaxed">{item.descripcion}</p>
                              {r?.observacion && (
                                <p className="text-slate-500 text-xs mt-1 italic">"{r.observacion}"</p>
                              )}
                            </div>
                            <span className="text-xs font-semibold text-red-400 shrink-0 mt-0.5 bg-red-500/10 px-2 py-0.5 rounded-lg">
                              -{item.valor} pts
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        )}

        {/* CTA */}
        <div className="bg-violet-950/40 border border-violet-800/40 rounded-2xl p-6 text-center">
          <h3 className="text-white font-semibold text-lg mb-2">¿Necesitas apoyo en tu Plan de Mejoramiento?</h3>
          <p className="text-slate-400 text-sm mb-5">
            Nuestros expertos en SST te acompañan desde el diagnóstico hasta la implementación.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-colors"
          >
            Hablar con un asesor
          </Link>
        </div>
      </div>
    </main>
  );
}
