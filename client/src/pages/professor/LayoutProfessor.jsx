import { Outlet, Link } from "react-router-dom";
import { Button } from "bold-ui";

const LayoutProfessor = () => {
  const customStyle = {
    marginTop: "30px",
    marginLeft: "70px",
    display: "flex",
    gap: "50px",
  };
  return (
    <>
      <nav>
        <ul style={customStyle}>
          <Link to="/disciplina/novo" style={{ textDecoration: "none" }}>
            <Button>Cadastrar disciplina</Button>
          </Link>
          <Link to="/professor/disciplinas" style={{ textDecoration: "none" }}>
            <Button>Disciplinas</Button>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default LayoutProfessor;
