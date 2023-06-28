import React, { useState } from "react";
import { Grid, Cell, TextField, Button } from "bold-ui";
import api from "../../../api";
import { useNavigate } from "react-router-dom";

const CadastroProfessor = () => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);

  const authenticate = () => {
    api
      .get("/auth", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) setIsAuth(true);
        else setIsAuth(false);
      })
      .catch((err) => {
        console.error(err);
        setIsAuth(false);
      });
  };

  authenticate();

  const cadastrar = (nome, cpf, departamento, senha) => {
    api
      .post("/professor/new", {
        nome: nome,
        cpf: cpf,
        departamento: departamento,
        senha: senha,
      })
      .then((response) => {
        console.log(response);
        navigate("/professor/disciplinas");
      });
  };

  const [nameData, setNameData] = useState();
  const [registrationData, setRegistrationData] = useState();
  const [departamentoData, setDepartamentoData] = useState();
  const [passwordData, setPasswordData] = useState();

  const handleNameChange = (e) => {
    setNameData(e.target.value);
  };

  const handleRegistrationChange = (e) => {
    setRegistrationData(e.target.value);
  };

  const handleDepartamentoChange = (e) => {
    setDepartamentoData(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordData(e.target.value);
  };

  const handleButtonClick = () => {
    if (!nameData || !registrationData || !departamentoData || !passwordData) {
      alert("Por favor, preencha todos os campos necessários.");
      return;
    }
    cadastrar(nameData, registrationData, departamentoData, passwordData);
    setRegistrationData("");
    setPasswordData("");
    setNameData("");
    setDepartamentoData("");
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  };

  return (
    <Grid alignItems="flex-end" gap={1.5}>
      <Cell sm={8} xs={12}>
        <TextField
          label="Nome"
          onChange={handleNameChange}
          disabled={isAuth}
          required
        />
      </Cell>
      <Cell sm={3} xs={12}>
        <TextField
          label="CPF"
          type="cpf"
          onChange={handleRegistrationChange}
          disabled={isAuth}
          required
        />
      </Cell>
      <Cell sm={12} xs={12}>
        <TextField
          label="Departamento"
          onChange={handleDepartamentoChange}
          required
        />
      </Cell>
      <Cell sm={12} xs={12}>
        <TextField
          label="Senha"
          type="password"
          onChange={handlePasswordChange}
          required
        />
      </Cell>
      <Cell sm={12} xs={12}>
        <Button kind="primary" block onClick={handleButtonClick}>
          {!isAuth ? "Cadastrar professor" : "Atualizar cadastro"}
        </Button>
      </Cell>
    </Grid>
  );
};

export default CadastroProfessor;
