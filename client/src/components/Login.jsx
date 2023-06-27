import { Grid, Cell, TextField, Button, Alert } from "bold-ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Login() {
  const navigate = useNavigate();

  const login = (registration, password) => {
    api
      .post("/login", { cpf: registration, senha: password })
      .then((response) => {
        if (response.data !== 0) return navigate("/professor");
        else {
          console.log("Credenciais inválidas ", response.data);
        }
      });
  };

  const [registrationData, setRegistrationData] = useState();
  const [passwordData, setPasswordData] = useState();

  const handleRegistrationChange = (e) => {
    setRegistrationData(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordData(e.target.value);
  };

  const handleButtonClick = () => {
    login(registrationData, passwordData);
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  };

  return (
    <>
      <Grid>
        <Cell md={12}>
          <Alert type="danger" onCloseClick={console.log}>
            Credenciais inválidas
          </Alert>
        </Cell>
        <Cell md={12}>
          <TextField
            label="CPF"
            type="cpf"
            onChange={handleRegistrationChange}
          />
        </Cell>
        <Cell md={12}>
          <TextField
            label="Senha"
            type="password"
            onChange={handlePasswordChange}
          />
        </Cell>
        <Cell md={12}>
          <Button kind="primary" block onClick={handleButtonClick}>
            Entrar
          </Button>
        </Cell>
      </Grid>
    </>
  );
}
