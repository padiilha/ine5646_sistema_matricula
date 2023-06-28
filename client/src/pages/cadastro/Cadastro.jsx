import { Text, VFlow } from "bold-ui";
import CadastroProfessor from "./components/CadastroProfessor";

const Cadastro = () => {
  const customStyle = {
    marginLeft: "70px",
  };

  return (
    <>
      <VFlow vSpacing={1}>
        <Text fontSize={1.5} color="primary" style={customStyle}>
          Cadastro
        </Text>
      </VFlow>
      <CadastroProfessor />
    </>
  );
};

export default Cadastro;
