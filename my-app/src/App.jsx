import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthContext';
import MainLayout from './components/layout/MainLayout';

// Page Components
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ResetPassword from './pages/auth/ResetPassword';
import Dashboard from './pages/dashboard/Dashboard';
import CaseCreation from './pages/cases/CaseCreation';
import CaseDetails from './pages/cases/CaseDetails';
import Profile from './pages/dashboard/Profile';
import NotFound from './pages/NotFound';
import Community from './pages/community/Community';
import AgeProgression from './pages/age/AgeProgression';
import FacialMatching from './pages/matching/FacialMatching';
import Notifications from './pages/notifications/Notifications';
import Settings from './pages/settings/Settings';
import Privacy from './pages/privacy/Privacy';
import Help from './pages/help/Help';
import Upload from './pages/upload/Upload';
import Search from './pages/search/Search';
import About from './pages/About';

// Protected Route Component
function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen w-full">
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="search" element={<Search />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="help" element={<Help />} />
            <Route path="privacy" element={<Privacy />} />
            
            {/* Protected Routes */}
            <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="cases/new" element={<ProtectedRoute><CaseCreation /></ProtectedRoute>} />
            <Route path="cases/:id" element={<ProtectedRoute><CaseDetails /></ProtectedRoute>} />
            <Route path="community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
            <Route path="age-progression" element={<ProtectedRoute><AgeProgression /></ProtectedRoute>} />
            <Route path="facial-matching" element={<ProtectedRoute><FacialMatching /></ProtectedRoute>} />
            <Route path="notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
            <Route path="settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route path="upload" element={<ProtectedRoute><Upload /></ProtectedRoute>} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
