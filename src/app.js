import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from "./infra/database/service.js";
import tarefasRouter from "./routes/tarefas.js";

const app = express();
const port = 3000;

// 🔹 Configuração CORS (sempre antes das rotas)
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Suas rotas
app.use("/tarefas", tarefasRouter);

// Conectar ao banco e iniciar servidor
sequelize
  .sync()
  .then(() => {
    console.log("Banco de dados sincronizado");
    app.listen(port, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((err) => console.error("Erro ao sincronizar banco de dados:", err));
