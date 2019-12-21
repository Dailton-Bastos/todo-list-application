const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const checkListRouter = require("./src/routes/checklist");
const taskRouter = require("./src/routes/task");
const rooterRouter = require("./src/routes/index");
const methodOverride = require("method-override");
require("./config/database");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

// Configurando arquivos html staticos
app.use(express.static(path.join(__dirname, "public")));

// Configurando um template engine EJS
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use("/", rooterRouter);
app.use("/checklists", checkListRouter);
app.use("/checklists", taskRouter.checklistDepedent);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
