import { Grid, Cell, TextField, Button } from "bold-ui";
import { useState } from "react";
import api from "../api";

export default function Login() {
  const login = (registration, password) => {
    api
      .post("/login", { matricula: registration, senha: password })
      .then((response) => {
        console.log("Credenciais enviadas");
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
          <TextField
            label="Matrícula"
            type="matricula"
            onChange={handleRegistrationChange}
          />
        </Cell>
        <Cell md={12}>
          <TextField
            label="Senha"
            type="password"
            onChenge={handlePasswordChange}
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
