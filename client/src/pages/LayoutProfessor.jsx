import { Outlet, Link } from "react-router-dom";
import { Text, Button } from "bold-ui";
import CadastroProfessor from "../components/CadastroProfessor";
import AtualizarProfessor from "../components/AtualizarCadastroProfessor";

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
          <Button>
            <Link
              to="/professor/disciplinas"
              style={{ textDecoration: "none" }}
            >
              <Text fontSize={1.0} color="normal">
                Disciplinas
              </Text>
            </Link>
          </Button>
          <Button>
            <Link
              to="/professor/atualizar_cadastro"
              style={{ textDecoration: "none" }}
            >
              <Text fontSize={1.0} color="normal">
                Atualizar cadastro
              </Text>
            </Link>
          </Button>
        </ul>
      </nav>
      <CadastroProfessor />
      <AtualizarProfessor />
      <Outlet />
    </>
  );
};

export default LayoutProfessor;
