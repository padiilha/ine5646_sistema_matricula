import React, { useState } from "react";
import { Grid, Cell, TextField, Button } from "bold-ui";
import { useNavigate } from "react-router-dom";
import api from "../../../api";

const CadastroProfessor = () => {
  const navigate = useNavigate();

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
    if (!nameData || !registrationData || !passwordData || !departamentoData) {
      alert("Por favor, preencha todos os campos necessários.");
      return;
    }
    cadastrar(nameData, registrationData, passwordData, departamentoData);
    setRegistrationData("");
    setPasswordData("");
    setNameData("");
    setDepartamentoData("");
  };

  return (
    <Grid>
      <Cell md={12}>
        <TextField
          label="Nome"
          value={nameData}
          onChange={handleNameChange}
          required
        />
      </Cell>
      <Cell md={12}>
        <TextField
          label="Departamento"
          value={departamentoData}
          onChange={handleDepartamentoChange}
          required
        />
      </Cell>
      <Cell md={12}>
        <TextField
          label="CPF"
          type="cpf"
          value={registrationData}
          onChange={handleRegistrationChange}
          required
        />
      </Cell>
      <Cell md={12}>
        <TextField
          label="Senha"
          type="password"
          value={passwordData}
          onChange={handlePasswordChange}
          required
        />
      </Cell>
      <Cell md={12}>
        <Button kind="primary" block onClick={handleButtonClick}>
          Cadastrar Professor
        </Button>
      </Cell>
    </Grid>
  );
};

export default CadastroProfessor;
