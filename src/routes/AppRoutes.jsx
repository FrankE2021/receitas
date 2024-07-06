import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";
import ListReceitas from '../components/ListReceitas';
import Login from '../components/Login';
import ListPacientes from '../components/ListPacientes';
import InfoDetallada from '../pages/InfoDetallada';
import { AuthProvider } from '../context/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';


const AppRoutes = () => {
    return (
      <AuthProvider>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/receitas" element={<ProtectedRoute><ListReceitas /></ProtectedRoute>} />
              <Route path="/pacientes" element={<ProtectedRoute><ListPacientes /></ProtectedRoute>} />
              <Route path="/detalles/:id" element={<ProtectedRoute><InfoDetallada /></ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
          </Routes> 
      </AuthProvider>
    )
  }
  
  export default AppRoutes;