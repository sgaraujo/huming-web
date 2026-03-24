import Link from 'next/link';
import { ShieldCheck, ClipboardList, BarChart3, Mail } from 'lucide-react';

export const metadata = {
  title: 'Autoevaluación Estándares Mínimos SG-SST | HumanIA',
  description: 'Evalúa el nivel de cumplimiento de tu SG-SST según la Resolución 0312 de 2019.',
};

const beneficios = [
  {
    icon: ClipboardList,
    titulo: 'Diagnóstico completo',
    desc: '60 ítems basados en la Res. 0312 de 2019. Cubre los 4 ciclos PHVA.',
  },
  {
    icon: BarChart3,
    titulo: 'Resultado inmediato',
    desc: 'Obtén tu puntaje y nivel (Crítico, Moderado o Aceptable) al instante.',
  },
  {
    icon: Mail,
    titulo: 'Informe por correo',
    desc: 'Recibirás un resumen de tus resultados directamente en tu correo.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Asesoría personalizada',
    desc: 'Nuestros expertos te acompañan en el plan de mejoramiento.',
  },
];

export default function AutoevaluacionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl tracking-tight">
            Human<span className="text-violet-400">IA</span>
          </Link>
          <Link
            href="/autoevaluacion/login"
            className="text-sm text-violet-300 hover:text-white transition-colors"
          >
            Iniciar sesión
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-medium mb-6 border border-violet-500/30">
          Resolución 0312 de 2019
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Autoevaluación de{' '}
          <span className="text-violet-400">Estándares Mínimos</span> SG-SST
        </h1>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Conoce en minutos el nivel de cumplimiento de tu Sistema de Gestión de Seguridad y Salud
          en el Trabajo, sin costo y con resultados inmediatos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/autoevaluacion/login?modo=registro"
            className="px-8 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-violet-900/40"
          >
            Comenzar evaluación gratis
          </Link>
          <Link
            href="/autoevaluacion/login"
            className="px-8 py-3.5 border border-white/20 hover:border-white/40 text-white rounded-xl transition-colors"
          >
            Ya tengo cuenta
          </Link>
        </div>
      </section>

      {/* Beneficios */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((b) => (
            <div
              key={b.titulo}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
            >
              <div className="w-10 h-10 bg-violet-500/20 rounded-xl flex items-center justify-center mb-4">
                <b.icon className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{b.titulo}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Niveles */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="text-white text-center font-semibold text-xl mb-8">
          ¿Qué significa tu resultado?
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { nivel: 'CRÍTICO', rango: '≤ 60%', color: 'red', desc: 'Plan de mejoramiento inmediato. Seguimiento anual del Ministerio de Trabajo.' },
            { nivel: 'MODERADO', rango: '61% – 85%', color: 'yellow', desc: 'Plan de mejoramiento y reporte a la ARL en 6 meses.' },
            { nivel: 'ACEPTABLE', rango: '≥ 86%', color: 'green', desc: 'Mantener evidencias y mejoras en el Plan Anual de Trabajo.' },
          ].map((n) => (
            <div
              key={n.nivel}
              className={`rounded-2xl p-5 border ${
                n.color === 'red'
                  ? 'bg-red-950/40 border-red-800/40'
                  : n.color === 'yellow'
                  ? 'bg-yellow-950/40 border-yellow-800/40'
                  : 'bg-green-950/40 border-green-800/40'
              }`}
            >
              <div
                className={`text-xs font-bold tracking-wider mb-1 ${
                  n.color === 'red' ? 'text-red-400' : n.color === 'yellow' ? 'text-yellow-400' : 'text-green-400'
                }`}
              >
                {n.nivel}
              </div>
              <div className="text-white font-semibold mb-2">{n.rango}</div>
              <p className="text-slate-400 text-xs leading-relaxed">{n.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
