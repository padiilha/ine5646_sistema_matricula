const express = require("express");
const cors = require("cors");

require("./db-connection");

const ALLOWED_ORIGINS = "*";
const options = {
  origin: ALLOWED_ORIGINS,
};

const app = express();

app.use(express.json());
app.use(cors(options));

const authRoutes = require("./routes/auth");
const disciplinaRoutes = require("./routes/disciplina");
const professorRoutes = require("./routes/professor");
const loginRoutes = require("./routes/login");

app.use("/auth", authRoutes);
app.use("/disciplina", disciplinaRoutes);
app.use("/professor", professorRoutes);
app.use("/login", loginRoutes);

const port = 8080;
app.listen(port, () => console.log(`Server start on port ${port}`));
