import "reflect-metadata";
require("dotenv").config();
import { AppDataSource } from "./database";
import express from "express";

const app = express();

AppDataSource.initialize()
  .then(() => {
    app.use(express.json());

    app.listen(process.env.PORT, () => console.log("Event API is running"));
  })
  .catch((error) => console.log("Database connection error: " + error));
