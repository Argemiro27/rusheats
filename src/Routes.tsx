import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import { Adm, Carrinho, HomePage, LoginPage, Perfil, Produtos, RegistroPage } from "./pages";

const Rotas = () => {
  return (
    <Router>
        <Routes>     
            <Route path="/login" Component={LoginPage} />
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/registro" Component={RegistroPage} />
            <Route path="/home" Component={HomePage} />
            <Route path="/carrinho" Component={Carrinho} />
            <Route path="/perfil" Component={Perfil} />
            <Route path="/produtos" Component={Produtos} />
            <Route path="/adm" Component={Adm} />

        </Routes>
    </Router>
  );
};

export default Rotas;
