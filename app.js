const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Minha lista de tarefas</h1>");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
