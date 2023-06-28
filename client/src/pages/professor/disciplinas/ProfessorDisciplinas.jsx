import { Text, VFlow, DataTable } from "bold-ui";
import api from "../../../api";

const ProfessorDisciplinas = () => {
  const customStyle = {
    marginLeft: "70px",
  };

  return (
    <>
      <VFlow vSpacing={1}>
        <Text fontSize={1.5} color="primary" style={customStyle}>
          Disciplinas
        </Text>
      </VFlow>
      <DataTable
        columns={[
          {
            header: "Código",
            name: "codigo",
            render: (item) => item.codigo,
          },
          {
            header: "Nome",
            name: "nome",
            render: (item) => item.nome,
          },
          {
            header: "Horário das Aulas",
            name: "horario_aulas",
            render: (item) => item.horario_aulas.join(" | "),
          },
        ]}
        rows={items}
      />
    </>
  );
};

export default ProfessorDisciplinas;

const itemsJSON = await api.get("/disciplina");
const items = itemsJSON.data;
