'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Eye, EyeOff, ArrowLeft, Loader2 } from 'lucide-react';

function LoginContent() {
  const { signIn, signUp, resetPassword, user, loading } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const [modo, setModo] = useState<'login' | 'registro' | 'reset'>(
    params.get('modo') === 'registro' ? 'registro' : 'login'
  );
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    email: '',
    password: '',
    nombre: '',
    empresa: '',
    nit: '',
    telefono: '',
  });

  useEffect(() => {
    if (!loading && user) router.push('/autoevaluacion/formulario');
  }, [user, loading, router]);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSubmitting(true);
    try {
      if (modo === 'login') {
        await signIn(form.email, form.password);
        router.push('/autoevaluacion/formulario');
      } else if (modo === 'registro') {
        if (!form.nombre || !form.empresa || !form.nit) {
          setError('Por favor completa todos los campos.');
          return;
        }
        await signUp(form.email, form.password, form.nombre, form.empresa, form.nit, form.telefono);
        router.push('/autoevaluacion/formulario');
      } else {
        await resetPassword(form.email);
        setSuccess('Te enviamos un correo para restablecer tu contraseña.');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : '';
      if (msg.includes('user-not-found') || msg.includes('wrong-password') || msg.includes('invalid-credential')) {
        setError('Correo o contraseña incorrectos.');
      } else if (msg.includes('email-already-in-use')) {
        setError('Este correo ya está registrado. Inicia sesión.');
      } else if (msg.includes('weak-password')) {
        setError('La contraseña debe tener al menos 6 caracteres.');
      } else {
        setError('Ocurrió un error. Intenta de nuevo.');
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex flex-col">
      <header className="px-6 py-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link href="/autoevaluacion" className="text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="text-white font-bold text-xl tracking-tight">
            Human<span className="text-blue-400">IA</span>
          </Link>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h1 className="text-white text-2xl font-bold mb-1">
              {modo === 'login' ? 'Iniciar sesión' : modo === 'registro' ? 'Crear cuenta' : 'Recuperar contraseña'}
            </h1>
            <p className="text-slate-400 text-sm mb-8">
              {modo === 'registro'
                ? 'Regístrate para realizar la autoevaluación'
                : modo === 'login'
                ? 'Accede a tu autoevaluación SG-SST'
                : 'Te enviaremos un enlace a tu correo'}
            </p>

            {error && (
              <div className="mb-4 p-3 bg-red-950/50 border border-red-800/50 rounded-xl text-red-400 text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-3 bg-green-950/50 border border-green-800/50 rounded-xl text-green-400 text-sm">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {modo === 'registro' && (
                <>
                  <div>
                    <label className="text-slate-300 text-sm mb-1.5 block">Nombre completo</label>
                    <input
                      type="text"
                      value={form.nombre}
                      onChange={set('nombre')}
                      required
                      placeholder="Ej: María García"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-slate-300 text-sm mb-1.5 block">Empresa</label>
                    <input
                      type="text"
                      value={form.empresa}
                      onChange={set('empresa')}
                      required
                      placeholder="Razón social"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-300 text-sm mb-1.5 block">NIT</label>
                      <input
                        type="text"
                        value={form.nit}
                        onChange={set('nit')}
                        required
                        placeholder="900.123.456-7"
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-slate-300 text-sm mb-1.5 block">Teléfono</label>
                      <input
                        type="tel"
                        value={form.telefono}
                        onChange={set('telefono')}
                        placeholder="+57 300..."
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="text-slate-300 text-sm mb-1.5 block">Correo electrónico</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  required
                  placeholder="empresa@ejemplo.com"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>

              {modo !== 'reset' && (
                <div>
                  <label className="text-slate-300 text-sm mb-1.5 block">Contraseña</label>
                  <div className="relative">
                    <input
                      type={showPass ? 'text' : 'password'}
                      value={form.password}
                      onChange={set('password')}
                      required
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                {modo === 'login' ? 'Entrar' : modo === 'registro' ? 'Crear cuenta' : 'Enviar enlace'}
              </button>
            </form>

            <div className="mt-6 space-y-2 text-center text-sm">
              {modo === 'login' && (
                <>
                  <button onClick={() => setModo('reset')} className="text-slate-400 hover:text-white block w-full transition-colors">
                    ¿Olvidaste tu contraseña?
                  </button>
                  <button onClick={() => setModo('registro')} className="text-blue-400 hover:text-blue-300 transition-colors">
                    No tengo cuenta — Registrarme
                  </button>
                </>
              )}
              {modo === 'registro' && (
                <button onClick={() => setModo('login')} className="text-blue-400 hover:text-blue-300 transition-colors">
                  Ya tengo cuenta — Iniciar sesión
                </button>
              )}
              {modo === 'reset' && (
                <button onClick={() => setModo('login')} className="text-blue-400 hover:text-blue-300 transition-colors">
                  Volver al inicio de sesión
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}
