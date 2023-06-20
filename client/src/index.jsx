import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutProfessor from "./pages/LayoutProfessor";
import Home from "./pages/Home";
import Professor from "./pages/professor/Professor";
import ProfessorDisciplinas from "./pages/professor/Disciplinas";

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
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
