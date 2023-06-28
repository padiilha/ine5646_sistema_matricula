import { VFlow, Text } from "bold-ui";
import CadastroProfessor from "../components/CadastroProfessor";

const CadastroAtualizarProfessor = () => {
  const customStyle = {
    marginLeft: "70px",
  };

  return (
    <>
      <VFlow vSpacing={1}>
        <Text fontSize={1.5} color="primary" style={customStyle}>
          Atualizar cadastro
        </Text>
      </VFlow>
      <CadastroProfessor />
    </>
  );
};

export default CadastroAtualizarProfessor;
