'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';
import { calcularPorCiclo, type RespuestaItem } from '@/lib/sst-items';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend, LineChart, Line,
} from 'recharts';
import { Loader2, LogOut, Search, ExternalLink, Users, TrendingUp, ShieldCheck, AlertTriangle } from 'lucide-react';

interface Evaluacion {
  id: string;
  empresa: { nombre: string; nit: string; sector: string; email: string; trabajadores?: string };
  puntaje: number;
  nivel: 'CRÍTICO' | 'MODERADO' | 'ACEPTABLE';
  respuestas: Record<string, RespuestaItem>;
  createdAt: Timestamp;
}

const NIVEL_COLORS = { CRÍTICO: '#ef4444', MODERADO: '#eab308', ACEPTABLE: '#22c55e' };

export default function DashboardPage() {
  const { user, profile, loading, isAdmin, signOut } = useAuth();
  const router = useRouter();
  const [evaluaciones, setEvaluaciones] = useState<Evaluacion[]>([]);
  const [fetching, setFetching] = useState(true);
  const [search, setSearch] = useState('');
  const [filtroNivel, setFiltroNivel] = useState<string>('todos');

  useEffect(() => {
    if (!loading) {
      if (!user) router.push('/autoevaluacion/login');
      else if (!isAdmin) router.push('/autoevaluacion/formulario');
    }
  }, [user, loading, isAdmin, router]);

  useEffect(() => {
    if (!isAdmin) return;
    (async () => {
      const q = query(collection(db, 'evaluaciones'), orderBy('createdAt', 'desc'));
      const snap = await getDocs(q);
      const docs = snap.docs.map((d) => ({ id: d.id, ...d.data() })) as Evaluacion[];
      setEvaluaciones(docs);
      setFetching(false);
    })();
  }, [isAdmin]);

  if (loading || fetching) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
      </div>
    );
  }

  const filtered = evaluaciones.filter((e) => {
    const matchSearch =
      e.empresa.nombre.toLowerCase().includes(search.toLowerCase()) ||
      e.empresa.nit.includes(search) ||
      e.empresa.email.toLowerCase().includes(search.toLowerCase());
    const matchNivel = filtroNivel === 'todos' || e.nivel === filtroNivel;
    return matchSearch && matchNivel;
  });

  // KPIs
  const promedio = evaluaciones.length > 0
    ? evaluaciones.reduce((a, e) => a + e.puntaje, 0) / evaluaciones.length
    : 0;
  const criticos = evaluaciones.filter((e) => e.nivel === 'CRÍTICO').length;
  const aceptables = evaluaciones.filter((e) => e.nivel === 'ACEPTABLE').length;

  // Pie data
  const pieData = [
    { name: 'CRÍTICO', value: criticos },
    { name: 'MODERADO', value: evaluaciones.filter((e) => e.nivel === 'MODERADO').length },
    { name: 'ACEPTABLE', value: aceptables },
  ].filter((d) => d.value > 0);

  // Bar data – score per company (last 10)
  const barData = evaluaciones.slice(0, 10).map((e) => ({
    empresa: e.empresa.nombre.split(' ')[0],
    Puntaje: Math.round(e.puntaje * 10) / 10,
  })).reverse();

  // Promedio por ciclo across all evaluations
  const cicloSums: Record<string, { sum: number; count: number; max: number }> = {};
  evaluaciones.forEach((ev) => {
    const porCiclo = calcularPorCiclo(ev.respuestas);
    Object.entries(porCiclo).forEach(([ciclo, v]) => {
      if (!cicloSums[ciclo]) cicloSums[ciclo] = { sum: 0, count: 0, max: v.maximo };
      cicloSums[ciclo].sum += v.obtenido;
      cicloSums[ciclo].count += 1;
    });
  });
  const cicloData = Object.entries(cicloSums).map(([ciclo, v]) => ({
    ciclo: ciclo.replace(/^[IVX]+\.\s/, ''),
    Promedio: Math.round((v.sum / v.count) * 10) / 10,
    Máximo: v.max,
  }));

  // Line chart: evolution over time
  const lineData = evaluaciones
    .slice()
    .reverse()
    .slice(-20)
    .map((e, i) => ({
      n: i + 1,
      Puntaje: Math.round(e.puntaje * 10) / 10,
    }));

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Sidebar + Header */}
      <header className="sticky top-0 z-10 bg-slate-950/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="text-white font-bold text-lg tracking-tight">
            Human<span className="text-blue-400">IA</span>
          </Link>
          <span className="text-slate-600 text-sm">|</span>
          <span className="text-slate-400 text-sm font-medium">Dashboard Administrativo</span>
          <div className="flex-1" />
          <span className="text-slate-400 text-sm hidden sm:block">{profile?.email}</span>
          <button onClick={signOut} className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors">
            <LogOut className="w-4 h-4" /> Salir
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* KPIs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Users, label: 'Total evaluaciones', value: evaluaciones.length, color: 'blue', sub: 'empresas evaluadas' },
            { icon: TrendingUp, label: 'Puntaje promedio', value: `${promedio.toFixed(1)}%`, color: 'purple', sub: 'en todos los ciclos' },
            { icon: AlertTriangle, label: 'Nivel Crítico', value: criticos, color: 'red', sub: `${evaluaciones.length > 0 ? Math.round((criticos / evaluaciones.length) * 100) : 0}% del total` },
            { icon: ShieldCheck, label: 'Nivel Aceptable', value: aceptables, color: 'green', sub: `${evaluaciones.length > 0 ? Math.round((aceptables / evaluaciones.length) * 100) : 0}% del total` },
          ].map(({ icon: Icon, label, value, color, sub }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
                color === 'blue' ? 'bg-blue-500/20' : color === 'purple' ? 'bg-purple-500/20' : color === 'red' ? 'bg-red-500/20' : 'bg-green-500/20'
              }`}>
                <Icon className={`w-4 h-4 ${
                  color === 'blue' ? 'text-blue-400' : color === 'purple' ? 'text-purple-400' : color === 'red' ? 'text-red-400' : 'text-green-400'
                }`} />
              </div>
              <p className="text-slate-400 text-xs mb-1">{label}</p>
              <p className="text-white font-bold text-2xl">{value}</p>
              <p className="text-slate-600 text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Bar - puntajes recientes */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-5">
            <h3 className="text-white font-semibold mb-4 text-sm">Puntajes más recientes (últimas 10)</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData} margin={{ top: 5, right: 10, left: -25, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
                <XAxis dataKey="empresa" tick={{ fill: '#64748b', fontSize: 10 }} />
                <YAxis domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 10 }} />
                <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 8 }} labelStyle={{ color: '#e2e8f0' }} />
                <Bar dataKey="Puntaje" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie - distribución niveles */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h3 className="text-white font-semibold mb-4 text-sm">Distribución por nivel</h3>
            {pieData.length > 0 ? (
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label={({ percent }: { percent?: number }) => `${((percent ?? 0) * 100).toFixed(0)}%`} labelLine={false}>
                    {pieData.map((entry) => (
                      <Cell key={entry.name} fill={NIVEL_COLORS[entry.name as keyof typeof NIVEL_COLORS]} />
                    ))}
                  </Pie>
                  <Legend wrapperStyle={{ color: '#94a3b8', fontSize: 11 }} />
                  <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 8 }} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-48 flex items-center justify-center text-slate-500 text-sm">Sin datos</div>
            )}
          </div>
        </div>

        {/* Charts row 2 */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Ciclo averages */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h3 className="text-white font-semibold mb-4 text-sm">Promedio por ciclo PHVA</h3>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={cicloData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
                <XAxis dataKey="ciclo" tick={{ fill: '#64748b', fontSize: 10 }} />
                <YAxis tick={{ fill: '#64748b', fontSize: 10 }} />
                <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 8 }} />
                <Legend wrapperStyle={{ color: '#94a3b8', fontSize: 11 }} />
                <Bar dataKey="Promedio" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Máximo" fill="#1e1b4b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line - evolución */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h3 className="text-white font-semibold mb-4 text-sm">Evolución de puntajes</h3>
            {lineData.length > 1 ? (
              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={lineData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
                  <XAxis dataKey="n" tick={{ fill: '#64748b', fontSize: 10 }} />
                  <YAxis domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 10 }} />
                  <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 8 }} />
                  <Line type="monotone" dataKey="Puntaje" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6', r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-44 flex items-center justify-center text-slate-500 text-sm">
                Se necesitan más evaluaciones para mostrar evolución
              </div>
            )}
          </div>
        </div>

        {/* Tabla de empresas */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <div className="flex flex-col sm:flex-row gap-3 mb-5 items-start sm:items-center">
            <h3 className="text-white font-semibold text-sm flex-1">Empresas evaluadas</h3>
            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar empresa, NIT..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 w-56 transition-colors"
              />
            </div>
            {/* Filter */}
            <select
              value={filtroNivel}
              onChange={(e) => setFiltroNivel(e.target.value)}
              className="bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-slate-300 text-sm focus:outline-none"
            >
              <option value="todos">Todos los niveles</option>
              <option value="CRÍTICO">Crítico</option>
              <option value="MODERADO">Moderado</option>
              <option value="ACEPTABLE">Aceptable</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {['Empresa', 'NIT', 'Sector', 'Puntaje', 'Nivel', 'Fecha', ''].map((h) => (
                    <th key={h} className="text-left text-slate-500 font-medium text-xs py-2 px-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-slate-500 text-sm">
                      No hay evaluaciones que coincidan con la búsqueda.
                    </td>
                  </tr>
                )}
                {filtered.map((ev) => (
                  <tr key={ev.id} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                    <td className="py-3 px-3 text-white font-medium">{ev.empresa.nombre}</td>
                    <td className="py-3 px-3 text-slate-400">{ev.empresa.nit}</td>
                    <td className="py-3 px-3 text-slate-400">{ev.empresa.sector}</td>
                    <td className="py-3 px-3">
                      <span className="text-white font-bold">{ev.puntaje.toFixed(1)}%</span>
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          ev.nivel === 'CRÍTICO'
                            ? 'bg-red-950/60 text-red-400'
                            : ev.nivel === 'MODERADO'
                            ? 'bg-yellow-950/60 text-yellow-400'
                            : 'bg-green-950/60 text-green-400'
                        }`}
                      >
                        {ev.nivel}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-slate-500 text-xs">
                      {ev.createdAt
                        ? new Date(ev.createdAt.seconds * 1000).toLocaleDateString('es-CO')
                        : '-'}
                    </td>
                    <td className="py-3 px-3">
                      <Link
                        href={`/autoevaluacion/resultado/${ev.id}`}
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
