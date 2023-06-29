import { VFlow, Text } from "bold-ui";
import CadastroDisciplina from "../components/CadastroDisciplina";

const CadastroNovoDisciplina = () => {
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
      <CadastroDisciplina />
    </>
  );
};

export default CadastroNovoDisciplina;
