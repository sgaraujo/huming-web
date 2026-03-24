'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import {
  calcularPorCiclo,
  calcularPorEstandar,
  SST_ITEMS,
  type RespuestaItem,
} from '@/lib/sst-items';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Legend,
} from 'recharts';
import { Loader2, CheckCircle2, XCircle, MinusCircle, ArrowLeft, Download } from 'lucide-react';

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
  const { user, loading } = useAuth();
  const router = useRouter();
  const [data, setData] = useState<Evaluacion | null>(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) router.push('/autoevaluacion/login');
  }, [user, loading, router]);

  useEffect(() => {
    if (!id || !user) return;
    (async () => {
      const snap = await getDoc(doc(db, 'evaluaciones', id));
      if (snap.exists()) setData(snap.data() as Evaluacion);
      setFetching(false);
    })();
  }, [id, user]);

  if (loading || fetching) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
      </div>
    );
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
  const porEstandar = calcularPorEstandar(respuestas);

  const cicloData = Object.entries(porCiclo).map(([ciclo, v]) => ({
    ciclo: ciclo.replace('I. ', '').replace('II. ', '').replace('III. ', '').replace('IV. ', ''),
    Obtenido: Math.round(v.obtenido * 10) / 10,
    Máximo: v.maximo,
  }));

  const estandarData = Object.entries(porEstandar).map(([est, v]) => ({
    subject: est.split('(')[0].trim().slice(0, 20),
    Obtenido: Math.round(v.obtenido * 10) / 10,
    Máximo: v.maximo,
  }));

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
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-slate-950/90 backdrop-blur border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/autoevaluacion/formulario" className="text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="text-white font-bold text-lg tracking-tight">
            Human<span className="text-blue-400">IA</span>
          </Link>
          <div className="flex-1" />
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 text-xs px-3 py-1.5 border border-white/15 text-slate-300 hover:text-white rounded-lg transition-colors"
          >
            <Download className="w-3.5 h-3.5" /> Guardar PDF
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

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Por ciclo */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-4">Puntaje por Ciclo PHVA</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={cicloData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="ciclo" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 8 }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Legend wrapperStyle={{ color: '#94a3b8', fontSize: 12 }} />
                <Bar dataKey="Obtenido" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Máximo" fill="#1e3a5f" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Por estándar radar */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-4">Puntaje por Estándar</h3>
            <ResponsiveContainer width="100%" height={220}>
              <RadarChart data={estandarData}>
                <PolarGrid stroke="#ffffff15" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <Radar name="Obtenido" dataKey="Obtenido" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                <Radar name="Máximo" dataKey="Máximo" stroke="#1e3a5f" fill="#1e3a5f" fillOpacity={0.2} />
                <Legend wrapperStyle={{ color: '#94a3b8', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 8 }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detalle por ciclo */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">Detalle por ciclo</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(porCiclo).map(([ciclo, v]) => {
              const pct = v.maximo > 0 ? (v.obtenido / v.maximo) * 100 : 0;
              return (
                <div key={ciclo} className="bg-white/5 rounded-xl p-4">
                  <p className="text-slate-400 text-xs mb-1">{ciclo}</p>
                  <p className="text-white font-bold text-lg">{v.obtenido.toFixed(1)} / {v.maximo}</p>
                  <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                  <p className="text-slate-500 text-xs mt-1">{pct.toFixed(0)}%</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Plan de mejora */}
        {noConformes.length > 0 && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-1">
              Ítems para Plan de Mejoramiento ({noConformes.length})
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Estos ítems obtuvieron calificación de cero y requieren acción.
            </p>
            <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
              {noConformes.map((item) => {
                const r = respuestas[item.id];
                return (
                  <div key={item.id} className="flex items-start gap-3 py-2 border-b border-white/5 last:border-0">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-slate-200 text-sm">{item.descripcion}</p>
                      {r?.observacion && (
                        <p className="text-slate-500 text-xs mt-0.5">Obs: {r.observacion}</p>
                      )}
                    </div>
                    <span className="text-xs text-slate-500 shrink-0">{item.valor} pts</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Ítems cumplidos */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">Resumen de respuestas</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Cumple', icon: CheckCircle2, color: 'text-green-400', estado: 'cumple' },
              { label: 'No cumple', icon: XCircle, color: 'text-red-400', estado: 'no_cumple' },
              { label: 'N/A Justificado', icon: MinusCircle, color: 'text-blue-400', estado: 'no_aplica_j' },
              { label: 'N/A Sin justificar', icon: MinusCircle, color: 'text-orange-400', estado: 'no_aplica_nj' },
            ].map(({ label, icon: Icon, color, estado }) => {
              const count = SST_ITEMS.filter((i) => respuestas[i.id]?.estado === estado).length;
              return (
                <div key={estado} className="bg-white/5 rounded-xl p-4">
                  <Icon className={`w-6 h-6 ${color} mx-auto mb-2`} />
                  <p className="text-white font-bold text-2xl">{count}</p>
                  <p className="text-slate-400 text-xs mt-1">{label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-950/40 border border-blue-800/40 rounded-2xl p-6 text-center">
          <h3 className="text-white font-semibold text-lg mb-2">¿Necesitas apoyo en tu Plan de Mejoramiento?</h3>
          <p className="text-slate-400 text-sm mb-5">
            Nuestros expertos en SST te acompañan desde el diagnóstico hasta la implementación.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors"
          >
            Hablar con un asesor
          </Link>
        </div>
      </div>
    </main>
  );
}
