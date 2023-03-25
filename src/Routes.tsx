import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import { LoginPage, RegistroPage } from "./pages";

const Rotas = () => {
  return (
    <Router>
        <Routes>     
            <Route path="/login" Component={LoginPage} />
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/registro" Component={RegistroPage} />
        </Routes>
    </Router>
  );
};

export default Rotas;
