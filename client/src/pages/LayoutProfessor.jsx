import { Outlet, Link } from "react-router-dom";
import CadastroProfessor from "../components/CadastroProfessor";
import AtualizarProfessor from "../components/AtualizarCadastroProfessor";

const LayoutProfessor = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/professor/disciplinas">Disciplinas</Link>
          </li>
        </ul>
      </nav>
      <CadastroProfessor />
      <AtualizarProfessor />
      <Outlet />
    </>
  );
};

export default LayoutProfessor;
