"use strict";

import { createConnection } from "mysql";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
const connection = createConnection({
  host: "localhost",
  user: process.env.APP_DB_USER,
  password: process.env.APP_DB_PASSWORD,
  database: "mydb",
  insecureAuth: true,
});

connection.connect((err) => {
  if (err) throw err;
});

export default connection;
