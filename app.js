const express = require("express");
const app = express();
const PORT = 3000;
const checkListRouter = require("./src/routes/checklist");
require("./config/database");

// Middlewares
app.use(express.json());

app.use("/checklists", checkListRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
