import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutProfessor from "./pages/professor/LayoutProfessor";
import Home from "./pages/Home";
import Professor from "./pages/professor/Professor";
import ProfessorDisciplinas from "./pages/professor/disciplinas/ProfessorDisciplinas";
import Cadastro from "./pages/cadastro/Cadastro";
import CadastroNovoProfessor from "./pages/cadastro/novo/CadastroNovoProfessor";
import CadastroAtualizarProfessor from "./pages/cadastro/atualizar/CadastroAtualizarProfessor";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/professor" element={<LayoutProfessor />}>
          <Route path="/professor" element={<Professor />} />
          <Route
            path="/professor/disciplinas"
            element={<ProfessorDisciplinas />}
          />
        </Route>
        <Route path="/cadastro">
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cadastro/novo" element={<CadastroNovoProfessor />} />
          <Route
            path="/cadastro/atualizar"
            element={<CadastroAtualizarProfessor />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
