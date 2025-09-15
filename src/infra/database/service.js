import { Sequelize } from "sequelize";
import sequelizeConfig from "./config.cjs";

const sequelize = new Sequelize(sequelizeConfig.url, {
  dialect: sequelizeConfig.dialect,
  logging: sequelizeConfig.logging,
  dialectOptions: {
    connectTimeout: 60000,
  },
  retry: {
    max: 3,
    timeout: 30000,
  },
});

export default sequelize;
