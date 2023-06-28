import React, { useState } from "react";
import { Grid, Cell, TextField, Button } from "bold-ui";
import * as Yup from "yup";
import api from "../api";

const CadastroEstudante = () => {
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Nome é obrigatório"),
    senha: Yup.string().required("Senha é obrigatória"),
    cpf: Yup.string().required("Cpf é obrigatório"),
    matricula: Yup.string().required("Matricula é obrigatória"),
    curso: Yup.string().required("Curso é obrigatório"),
    semestre_ingresso: Yup.string().required(
      "Semestre de ingresso é obrigatório"
    ),
  });

  const cadastrar = (nome, senha, cpf, matricula, curso, semestre_ingresso) => {
    api.post("/estudante/new", {
      nome: nome,
      senha: senha,
      cpf: cpf,
      matricula: matricula,
      curso: curso,
      semestre_ingresso: semestre_ingresso,
    });
  };

  const [nameData, setNameData] = useState("");
  const [senhaData, setSenhaData] = useState("");
  const [cpfData, setCpfData] = useState("");
  const [matriculaData, setMatriculaData] = useState("");
  const [cursoData, setCursoData] = useState("");
  const [semestreData, setSemestreData] = useState("");

  const handleNameChange = (e) => {
    setNameData(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenhaData(e.target.value);
  };

  const handleCpfChange = (e) => {
    setCpfData(e.target.value);
  };

  const handleMatriculaChange = (e) => {
    setMatriculaData(e.target.value);
  };

  const handleCursoChange = (e) => {
    setCursoData(e.target.value);
  };

  const handleSemestreChange = (e) => {
    setSemestreData(e.target.value);
  };

  const handleButtonClick = () => {
    validationSchema
      .validate({
        nome: nameData,
        senha: senhaData,
        cpf: cpfData,
        matricula: matriculaData,
        curso: cursoData,
        semestre_ingresso: semestreData,
      })
      .then(() => {
        cadastrar(
          nameData,
          senhaData,
          cpfData,
          matriculaData,
          cursoData,
          semestreData
        );
        setNameData("");
        setSenhaData("");
        setCpfData("");
        setMatriculaData("");
        setCursoData("");
        setSemestreData("");
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
          label="Senha"
          type="password"
          value={senhaData}
          onChange={handleSenhaChange}
        />
      </Cell>
      <Cell md={12}>
        <TextField label="CPF" value={cpfData} onChange={handleCpfChange} />
      </Cell>
      <Cell md={12}>
        <TextField
          label="Matrícula"
          value={matriculaData}
          onChange={handleMatriculaChange}
        />
      </Cell>
      <Cell md={12}>
        <TextField
          label="Curso"
          value={cursoData}
          onChange={handleCursoChange}
        />
      </Cell>
      <Cell md={12}>
        <TextField
          label="Semestre de Ingresso"
          value={semestreData}
          onChange={handleSemestreChange}
        />
      </Cell>
      <Cell md={12}>
        <Button kind="primary" block onClick={handleButtonClick}>
          Cadastrar Estudante
        </Button>
      </Cell>
    </Grid>
  );
};

export default CadastroEstudante;
