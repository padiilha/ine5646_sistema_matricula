import { VFlow, Text } from "bold-ui";
import CadastroProfessor from "../components/CadastroProfessor";

const CadastroNovoProfessor = () => {
  const customStyle = {
    marginLeft: "70px",
  };

  return (
    <>
      <VFlow vSpacing={1}>
        <Text fontSize={1.5} color="primary" style={customStyle}>
          Novo cadastro
        </Text>
      </VFlow>
      <CadastroProfessor />
    </>
  );
};

export default CadastroNovoProfessor;
