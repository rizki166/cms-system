import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import User from './pages/home';
import MainLayout from './layout';
import { AddUser } from './pages/home/addUser';
import UserDetail from './pages/home/detailUsers';
import LandingPage from './pages/landingPage';
import PantonePage from './pages/pantone';
import DetailPantone from './pages/pantone/detailPantone';
import PrivateRoute from './component/protect/index'; // Import PrivateRoute

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute element={<MainLayout><User /></MainLayout>} />} />
        <Route path="/Administrative/personnel/add" element={<PrivateRoute element={<MainLayout><AddUser /></MainLayout>} />} />
        <Route path="/detail/:userId" element={<PrivateRoute element={<MainLayout><UserDetail /></MainLayout>} />} />
        <Route path="/Administrative/profile" element={<PrivateRoute element={<MainLayout><LandingPage /></MainLayout>} />} />
        <Route path="/Administrative/personnel" element={<PrivateRoute element={<MainLayout><User /></MainLayout>} />} />
        <Route path="/Resources/Pantone" element={<PrivateRoute element={<MainLayout><PantonePage /></MainLayout>} />} />
        <Route path="/detail-pantone/:resourceId" element={<PrivateRoute element={<MainLayout><DetailPantone /></MainLayout>} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
