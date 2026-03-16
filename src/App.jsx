import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

// Placeholders for Pages
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/auth/AuthPage';
import ProfileSetup from './pages/onboarding/ProfileSetup';
import Dashboard from './pages/dashboard/Dashboard';
import FieldDetail from './pages/learning/FieldDetail';
import ModuleViewer from './pages/learning/ModuleViewer';
import QuizArena from './pages/gamification/QuizArena';
import Leaderboard from './pages/gamification/Leaderboard';
import Rewards from './pages/gamification/Rewards';
import Settings from './pages/Settings';
import Explore from './pages/Explore';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  if (!user) return <Navigate to="/auth" />;
  if (!user.level && window.location.pathname !== '/setup') return <Navigate to="/setup" />;
  return children;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          
          <Route path="/setup" element={
            <ProtectedRoute><ProfileSetup /></ProtectedRoute>
          } />
          
          <Route path="/dashboard" element={
            <ProtectedRoute><Dashboard /></ProtectedRoute>
          } />
          
          <Route path="/explore" element={
            <ProtectedRoute><Explore /></ProtectedRoute>
          } />

          <Route path="/field/:fieldId" element={
            <ProtectedRoute><FieldDetail /></ProtectedRoute>
          } />
          
          <Route path="/module/:fieldId/:moduleId" element={
            <ProtectedRoute><ModuleViewer /></ProtectedRoute>
          } />
          
          <Route path="/quiz" element={
            <ProtectedRoute><QuizArena /></ProtectedRoute>
          } />
          
          <Route path="/leaderboard" element={
            <ProtectedRoute><Leaderboard /></ProtectedRoute>
          } />
          
          <Route path="/rewards" element={
            <ProtectedRoute><Rewards /></ProtectedRoute>
          } />
          
          <Route path="/settings" element={
            <ProtectedRoute><Settings /></ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
