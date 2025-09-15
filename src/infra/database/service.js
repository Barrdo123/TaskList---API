import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",
    logging: process.env.NODE_ENV === "development" ? console.log : false,
    dialectOptions: {
      connectTimeout: 60000,
    },
    retry: {
      max: 3,
      timeout: 30000,
    },
  }
);

export default sequelize;
