import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutProfessor from "./pages/LayoutProfessor";
import Home from "./pages/Home";
import Professor from "./pages/professor/Professor";
import Cadastro from "./pages/professor/Cadastro";
import Disciplinas from "./pages/professor/Disciplinas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/professor" element={<LayoutProfessor />}>
          <Route path="/professor" element={<Professor />} />
          <Route path="/professor/disciplinas" element={<Disciplinas />} />
          <Route path="/professor/cadastro" element={<Cadastro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
