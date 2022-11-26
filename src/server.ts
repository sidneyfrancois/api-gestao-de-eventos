import "reflect-metadata";
require("dotenv").config();
import { createConnection } from "./database";
import express from "express";

createConnection();
const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => console.log("Server is running"));
