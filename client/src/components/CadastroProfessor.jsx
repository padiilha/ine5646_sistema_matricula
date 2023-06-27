import React, { useState } from "react";
import { Grid, Cell, TextField, Button, Alert } from "bold-ui";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import api from "../api";

export default function CadastroProfessor() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    cpf: Yup.string().required("CPF é obrigatório"),
    senha: Yup.string().required("Senha é obrigatória"),
    nome: Yup.string().required("Nome é obrigatório"),
  });

  const cadastrar = (nome, cpf, senha, departamento) => {
    api.post("/professor/new", {
      nome: nome,
      cpf: cpf,
      senha: senha,
      departamento: departamento,
    });
  };

  const [registrationData, setRegistrationData] = useState();
  const [passwordData, setPasswordData] = useState();
  const [nameData, setNameData] = useState();
  const [departamentoData, setDepartamentoData] = useState();

  const handleRegistrationChange = (e) => {
    setRegistrationData(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordData(e.target.value);
  };

  const handleNameChange = (e) => {
    setNameData(e.target.value);
  };

  const handleDepartamentoChange = (e) => {
    setDepartamentoData(e.target.value);
  };

  const handleButtonClick = () => {
    validationSchema
      .validate({ cpf: registrationData, senha: passwordData, nome: nameData })
      .then(() => {
        cadastrar(nameData, registrationData, passwordData, departamentoData);
        setRegistrationData("");
        setPasswordData("");
        setNameData("");
        setDepartamentoData("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid>
      {/* <Cell md={12}>
        {alertMessage && (
          <Alert type={alertType} onCloseClick={() => setAlertMessage("")}>
            {alertMessage}
          </Alert>
        )}
      </Cell> */}
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
          label="CPF"
          type="cpf"
          value={registrationData}
          onChange={handleRegistrationChange}
        />
      </Cell>
      <Cell md={12}>
        <TextField
          label="Senha"
          type="password"
          value={passwordData}
          onChange={handlePasswordChange}
        />
      </Cell>
      <Cell md={12}>
        <Button kind="primary" block onClick={handleButtonClick}>
          Cadastrar Professor
        </Button>
      </Cell>
    </Grid>
  );
}
