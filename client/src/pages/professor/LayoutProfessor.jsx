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
          <Link to="/professor/disciplinas" style={{ textDecoration: "none" }}>
            <Button>Disciplinas</Button>
          </Link>
          <Link to="/cadastro/atualizar" style={{ textDecoration: "none" }}>
            <Button>Atualizar cadastro</Button>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default LayoutProfessor;
