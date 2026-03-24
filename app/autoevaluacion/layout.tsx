import { AuthProvider } from '@/contexts/AuthContext';

export default function AutoevaluacionLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
