import { DataTypes } from "sequelize";
import sequelize from "../service.js";

const Tarefa = sequelize.define("tarefas", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  concluida: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Tarefa;
