import React, { useState } from "react";
import { Grid, Cell, TextField, Button } from "bold-ui";
import api from "../../../api";
import { useNavigate } from "react-router-dom";

const CadastroDisciplina = () => {
  const navigate = useNavigate();

  const cadastrar = (
    nome,
    codigo,
    carga_horaria,
    requisitos,
    horario_aulas,
    departamento
  ) => {
    api
      .post("/disciplina/new", {
        nome: nome,
        codigo: codigo,
        carga_horaria: carga_horaria,
        requisitos: requisitos,
        horario_aulas: horario_aulas,
        departamento: departamento,
      })
      .then((response) => {
        console.log(response);
        navigate("/professor/disciplinas");
      });
  };

  const [nameData, setNameData] = useState();
  const [codigoData, setCodigoData] = useState();
  const [cargaHorariaData, setCargaHorariaData] = useState();
  const [requisitosData, setRequisitosData] = useState();
  const [horarioAulasData, setHorarioAulasData] = useState();
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
    setCargaHorariaData(e.target.value);
  };

  const handleRequisitosChange = (e) => {
    setRequisitosData(e.target.value);
  };

  const handleHorarioAulasChange = (e) => {
    setHorarioAulasData(e.target.value);
  };

  const handleButtonClick = () => {
    if (
      !nameData ||
      !codigoData ||
      !cargaHorariaData ||
      !requisitosData ||
      !horarioAulasData ||
      !departamentoData
    ) {
      alert("Por favor, preencha todos os campos necessários.");
      return;
    }
    cadastrar(
      nameData,
      codigoData,
      cargaHorariaData,
      requisitosData.split(","),
      horarioAulasData.split(","),
      departamentoData
    );
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  };

  return (
    <Grid>
      <Cell md={12} xs={12}>
        <TextField label="Nome" onChange={handleNameChange} />
      </Cell>
      <Cell md={12} xs={12}>
        <TextField label="Departamento" onChange={handleDepartamentoChange} />
      </Cell>
      <Cell md={12} xs={12}>
        <TextField label="Código" onChange={handleCodigoChange} />
      </Cell>
      <Cell md={12} xs={12}>
        <TextField label="Carga Horária" onChange={handleCargaHorariaChange} />
      </Cell>
      <Cell md={12} xs={12}>
        <TextField label="Requisitos" onChange={handleRequisitosChange} />
      </Cell>
      <Cell md={12} xs={12}>
        <TextField
          label="Horário das Aulas"
          onChange={handleHorarioAulasChange}
        />
      </Cell>
      <Cell md={12} xs={12}>
        <Button kind="primary" block onClick={handleButtonClick}>
          Cadastrar Disciplina
        </Button>
      </Cell>
    </Grid>
  );
};

export default CadastroDisciplina;
