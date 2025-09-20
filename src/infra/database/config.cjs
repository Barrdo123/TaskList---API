require("dotenv").config();

function getDatabaseUrl() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;

  const dbUser = process.env.DB_USER;
  const dbPass = process.env.DB_PASS;
  const dbHost = process.env.DB_HOST || "localhost";
  const dbPort = process.env.DB_PORT || 3306;
  const dbName = process.env.DB_NAME;

  return `mysql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
}

module.exports = {
  url: getDatabaseUrl(),
  dialect: "mysql",
  logging: process.env.NODE_ENV === "development" ? console.log : false,
};
