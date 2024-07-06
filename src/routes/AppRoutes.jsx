import { Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";
import ListReceitas from '../components/ListReceitas';
import Login from '../components/Login';
import ListPacientes from '../components/ListPacientes';


const AppRoutes = () => {
    return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/receitas" element={<ListReceitas />} />
          <Route path="/pacientes" element={<ListPacientes />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    )
  }
  
  export default AppRoutes;