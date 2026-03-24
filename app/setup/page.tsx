'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/lib/firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  type User,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { Loader2, CheckCircle2, ShieldCheck } from 'lucide-react';

// ⚠️ Esta página solo debe usarse una vez para crear admins.
// No la enlaces desde ningún lugar del sitio.

export default function SetupPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [status, setStatus] = useState<'idle' | 'creating' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setMessage('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setMessage('Correo o contraseña incorrectos.');
    }
  }

  async function crearAdmin() {
    if (!user) return;
    setStatus('creating');
    try {
      const ref = doc(db, 'usuarios', user.uid);
      const snap = await getDoc(ref);

      await setDoc(ref, {
        uid: user.uid,
        email: user.email,
        nombre: nombre || user.email?.split('@')[0] || 'Admin',
        role: 'admin',
        empresa: 'HumanIA',
        createdAt: serverTimestamp(),
        ...(snap.exists() ? snap.data() : {}), // conserva datos si ya existía
        role_override: 'admin', // fuerza admin
      });

      // Re-escribir limpio
      await setDoc(ref, {
        uid: user.uid,
        email: user.email,
        nombre: nombre || user.email?.split('@')[0] || 'Admin',
        role: 'admin',
        empresa: 'HumanIA',
        createdAt: serverTimestamp(),
      });

      setStatus('done');
      setTimeout(() => router.push('/dashboard'), 2000);
    } catch (err) {
      setStatus('error');
      setMessage(String(err));
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-6 h-6 text-slate-400 animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 mb-3">
            <ShieldCheck className="w-6 h-6 text-orange-400" />
          </div>
          <h1 className="text-white font-bold text-lg">Configuración inicial</h1>
          <p className="text-slate-500 text-xs mt-1">Crear cuenta de administrador</p>
        </div>

        {!user ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <p className="text-slate-400 text-sm text-center">Inicia sesión con la cuenta que quieres hacer admin</p>
            {message && (
              <p className="text-red-400 text-sm text-center">{message}</p>
            )}
            <form onSubmit={handleLogin} className="space-y-3">
              <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-slate-500 text-sm"
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-slate-500 text-sm"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-colors text-sm"
              >
                Entrar
              </button>
            </form>
          </div>
        ) : status === 'done' ? (
          <div className="bg-green-950/40 border border-green-800/40 rounded-2xl p-6 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto" />
            <p className="text-white font-semibold">¡Admin creado exitosamente!</p>
            <p className="text-slate-400 text-sm">Redirigiendo al dashboard...</p>
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="bg-slate-800/60 rounded-xl px-4 py-3">
              <p className="text-slate-400 text-xs mb-1">Cuenta detectada</p>
              <p className="text-white text-sm font-medium">{user.email}</p>
            </div>

            <div>
              <label className="text-slate-400 text-xs mb-1.5 block">Tu nombre (opcional)</label>
              <input
                type="text"
                placeholder="Ej: Willy García"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-slate-500 text-sm"
              />
            </div>

            {message && (
              <p className="text-red-400 text-sm">{message}</p>
            )}

            <button
              onClick={crearAdmin}
              disabled={status === 'creating'}
              className="w-full py-2.5 bg-orange-600 hover:bg-orange-500 disabled:opacity-60 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
            >
              {status === 'creating'
                ? <><Loader2 className="w-4 h-4 animate-spin" /> Creando...</>
                : 'Crear como Administrador'
              }
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
