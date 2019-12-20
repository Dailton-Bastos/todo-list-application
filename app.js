const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const checkListRouter = require("./src/routes/checklist");
const rooterRouter = require("./src/routes/index");
require("./config/database");

// Middlewares
app.use(express.json());

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use("/", rooterRouter);
app.use("/checklists", checkListRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
