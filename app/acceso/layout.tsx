import { AuthProvider } from '@/contexts/AuthContext';

export default function AccesoLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
