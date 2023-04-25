import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import {
  Adm,
  HomePage,
  LoginPage,
  Perfil,
  Produtos,
  RegistroPage,
} from "./pages";

const Rotas = () => {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/registro" element={<RegistroPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/adm" element={<Adm />} />
        </Routes>
      </Router>
  );
};

export default Rotas;
