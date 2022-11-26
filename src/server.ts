import "reflect-metadata";
require("dotenv").config();
import { AppDataSource } from "./database";
import { routes } from "./routes";
import express from "express";

const app = express();

AppDataSource.initialize()
  .then(() => {
    app.use(express.json());
    app.use(routes);

    app.listen(process.env.PORT, () => console.log("Event API is running"));
  })
  .catch((error) => console.log("Database connection error: " + error));
