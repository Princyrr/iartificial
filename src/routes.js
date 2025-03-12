import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} /> {/* Rota principal */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

