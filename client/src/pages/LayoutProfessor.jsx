import { Outlet, Link } from "react-router-dom";

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

      <Outlet />
    </>
  );
};

export default LayoutProfessor;
