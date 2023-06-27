import { Collapse } from "antd";
import { Button, HFlow, VFlow } from "bold-ui";
import api from "../api";

const itensJSON = await api.get("/disciplina");
const itens = itensJSON.data;

itens.forEach((element) => {
  console.log(element.codigo, element.nome);
  element.horario_aulas.forEach((horario) => {
    console.log(horario);
  });
});

const items = [
  {
    key: "1",
    label: "Estrutura de Dados",
    children: (
      <>
        <VFlow>
          <HFlow justifyContent="center">
            <p>Código: INE5609</p>
            <p>Horário: 2.2020-2</p>
            <Button kind="primary" size="medium">
              Ministrar disciplina
            </Button>
          </HFlow>
        </VFlow>
      </>
    ),
  },
  {
    key: "2",
    label: "Banco de Dados I",
    children: (
      <VFlow>
        <HFlow justifyContent="center">
          <p>Código: INE5609</p>
          <p>Horário: 2.2020-2</p>
          <Button kind="danger" size="medium">
            Largar disciplina
          </Button>
        </HFlow>
      </VFlow>
    ),
  },
  {
    key: "3",
    label: "Banco de Dados II",
    children: (
      <>
        <VFlow>
          <HFlow justifyContent="center">
            <p>Código: INE5608</p>
            <p>Horário: 2.2020-2</p>
            <p>Não disponível</p>
          </HFlow>
        </VFlow>
      </>
    ),
  },
  {
    key: "4",
    label: "Grafos",
    children: (
      <>
        <VFlow>
          <HFlow justifyContent="center">
            <p>Código: INE5607</p>
            <p>Horário: 2.2020-2</p>
            <p>Não disponível</p>
          </HFlow>
        </VFlow>
      </>
    ),
  },
  {
    key: "5",
    label: "Arquitetura e Organização de Computadores",
    children: (
      <>
        <VFlow>
          <HFlow justifyContent="center">
            <p>Código: INE5619</p>
            <p>Horário: 2.2020-2</p>
            <p>Não disponível</p>
          </HFlow>
        </VFlow>
      </>
    ),
  },
  {
    key: "6",
    label: "Geração de Ideias e Criatividade",
    children: (
      <>
        <VFlow>
          <HFlow justifyContent="center">
            <p>Código: INE5619</p>
            <p>Horário: 2.2020-2</p>
            <p>Não disponível</p>
          </HFlow>
        </VFlow>
      </>
    ),
  },
  {
    key: "7",
    label: "Probabilidade e Estatística",
    children: (
      <>
        <VFlow>
          <HFlow justifyContent="center">
            <p>Código: INE5619</p>
            <p>Horário: 2.2020-2</p>
            <p>Não disponível</p>
          </HFlow>
        </VFlow>
      </>
    ),
  },
  {
    key: "8",
    label: "Arquitetura e Organização de Computadores",
    children: (
      <>
        <VFlow>
          <HFlow justifyContent="center">
            <p>Código: INE5619</p>
            <p>Horário: 2.2020-2</p>
            <p>Não disponível</p>
          </HFlow>
        </VFlow>
      </>
    ),
  },
];

function CollapseE() {
  const customStyle = {
    marginLeft: "50px",
    marginRight: "50px",
    marginBottom: "20px",
  };

  return (
    <Collapse accordion items={items} bordered={false} style={customStyle} />
  );
}

export default CollapseE;
