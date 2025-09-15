import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST || "localhost";
const dbPort = process.env.DB_PORT || 3306;
const dbDialect = "mysql";
const dbLogging = process.env.NODE_ENV === "development" ? console.log : false;

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  port: dbPort,
  dialect: dbDialect,
  logging: dbLogging,
  dialectOptions: {
    connectTimeout: 60000,
  },
  retry: {
    max: 3,
    timeout: 30000,
  },
});

export default sequelize;
