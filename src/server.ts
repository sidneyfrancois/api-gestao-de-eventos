import "reflect-metadata";
require("dotenv").config();
import express, { Request, Response, NextFunction } from "express";
import { AppDataSource } from "./database";
import { routes } from "./routes";
import { AppError } from "./error/AppError";
import "express-async-errors";

const app = express();

AppDataSource.initialize()
  .then(() => {
    app.use(express.json());
    app.use(routes);

    app.use(
      (
        err: Error,
        request: Request,
        response: Response,
        next: NextFunction
      ) => {
        if (err instanceof AppError) {
          return response.status(err.statusCode).json({
            message: err.message,
          });
        }

        return response.status(500).json({
          status: "error",
          message: `Internal server error - ${err.message}`,
        });
      }
    );

    app.listen(process.env.PORT, () => console.log("Event API is running"));
  })
  .catch((error) => console.log("Database connection error: " + error));
