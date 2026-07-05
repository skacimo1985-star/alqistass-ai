import { Routes, Route, Navigate } from 'react-router';
import { useAuth } from '@/hooks/useAuth';
import Layout from '@/components/Layout';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import PromptAI from '@/pages/PromptAI';
import Claims from '@/pages/Claims';
import FraudDetection from '@/pages/FraudDetection';
import Actuarial from '@/pages/Actuarial';
import Blockchain from '@/pages/Blockchain';
import Compliance from '@/pages/Compliance';
import UsersPage from '@/pages/Users';
import SettingsPage from '@/pages/SettingsPage';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-[#060E1E]">
        <div className="flex items-center gap-3 text-[#8892A4]">
          <div className="w-6 h-6 border-2 border-[#C8961A] border-t-transparent rounded-full animate-spin" />
          <span className="text-sm">Chargement d'AlqistAss AI...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/prompt-ai" element={<PromptAI />} />
        <Route path="/sinistres" element={<Claims />} />
        <Route path="/fraude" element={<FraudDetection />} />
        <Route path="/actuariat" element={<Actuarial />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/conformite" element={<Compliance />} />
        <Route path="/utilisateurs" element={<UsersPage />} />
        <Route path="/parametres" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
