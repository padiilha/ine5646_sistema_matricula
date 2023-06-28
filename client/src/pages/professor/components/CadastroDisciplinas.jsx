import React, { useState } from "react";
import { Grid, Cell, TextField, Button } from "bold-ui";
import * as Yup from "yup";
import api from "../../../api";

const CadastroDisciplina = () => {
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Nome é obrigatório"),
    codigo: Yup.string().required("Codigo é obrigatória"),
    carga_horaria: Yup.string().required("Carga Horária é obrigatório"),
    departamento: Yup.string().required("Departamento é obrigatório"),
  });

  const cadastrar = (
    nome,
    codigo,
    carga_horaria,
    requisitos,
    horario_aulas,
    departamento
  ) => {
    api.post("/disciplina/new", {
      nome: nome,
      codigo: codigo,
      carga_horaria: carga_horaria,
      requisitos: requisitos,
      horario_aulas: horario_aulas,
      departamento: departamento,
    });
  };

  const [nameData, setNameData] = useState();
  const [codigoData, setCodigoData] = useState();
  const [carga_horariaData, setCarga_horariaData] = useState();
  const [requisitosData, setRequisitosData] = useState();
  const [horario_aulasData, setHorario_aulasData] = useState();
  const [departamentoData, setDepartamentoData] = useState();

  const handleNameChange = (e) => {
    setNameData(e.target.value);
  };

  const handleDepartamentoChange = (e) => {
    setDepartamentoData(e.target.value);
  };

  const handleCodigoChange = (e) => {
    setCodigoData(e.target.value);
  };

  const handleCargaHorariaChange = (e) => {
    setCarga_horariaData(e.target.value);
  };

  const handleRequisitosChange = (e) => {
    setRequisitosData(e.target.value);
  };

  const handleHorarioAulasChange = (e) => {
    setHorario_aulasData(e.target.value);
  };

  const handleButtonClick = () => {
    validationSchema
      .validate({
        nome: nameData,
        codigo: codigoData,
        carga_horaria: carga_horariaData,
        departamento: departamentoData,
      })
      .then(() => {
        cadastrar(
          nameData,
          codigoData,
          carga_horariaData,
          requisitosData,
          horario_aulasData,
          departamentoData
        );
        setNameData("");
        setCodigoData("");
        setCarga_horariaData("");
        setRequisitosData("");
        setHorario_aulasData("");
        setDepartamentoData("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid>
      <Cell md={12}>
        <TextField label="Nome" value={nameData} onChange={handleNameChange} />
      </Cell>
      <Cell md={12}>
        <TextField
          label="Departamento"
          value={departamentoData}
          onChange={handleDepartamentoChange}
        />
      </Cell>
      <Cell md={12}>
        <TextField
          label="Código"
          value={codigoData}
          onChange={handleCodigoChange}
        />
      </Cell>
      <Cell md={12}>
        <TextField
          label="Carga Horária"
          value={carga_horariaData}
          onChange={handleCargaHorariaChange}
        />
      </Cell>
      <Cell md={12}>
        <TextField
          label="Requisitos"
          value={requisitosData}
          onChange={handleRequisitosChange}
        />
      </Cell>
      <Cell md={12}>
        <TextField
          label="Horário das Aulas"
          value={horario_aulasData}
          onChange={handleHorarioAulasChange}
        />
      </Cell>
      <Cell md={12}>
        <Button kind="primary" block onClick={handleButtonClick}>
          Cadastrar Disciplina
        </Button>
      </Cell>
    </Grid>
  );
};

export default CadastroDisciplina;
