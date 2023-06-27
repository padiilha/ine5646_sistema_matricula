import { Outlet, Link } from "react-router-dom";
import { Text} from "bold-ui";

const LayoutProfessor = () => {
  const customStyle = {
    marginTop: '30px',
    marginLeft: '70px',
    display: 'flex',
    gap: '50px' 
  };
  return (
    <>
      <nav>
        <ul style={customStyle}>
          <li>
            <Link to="/professor/disciplinas" style={{ textDecoration: 'none' }}>
              <Text fontSize={1.0} color="normal">Disciplinas</Text>
              </Link>
          </li>
          <li>
            <Link to="/professor/atualizar-cadastro" style={{ textDecoration: 'none' }}>
              <Text fontSize={1.0} color="normal">Atualizar cadastro</Text>
              </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default LayoutProfessor;
