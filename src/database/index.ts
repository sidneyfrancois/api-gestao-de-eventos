import "reflect-metadata";
import { DataSource } from "typeorm";
require("dotenv").config();

const port = process.env.TYPEORM_PORT as unknown as number | undefined;
let sslOption: any;
let migrationOption: string;

process.env.NODE_ENV === "development"
  ? (sslOption = null)
  : (sslOption = {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    });

process.env.NODE_ENV === "development"
  ? (migrationOption = `${process.env.TYPEORM_MIGRATIONS}/database/migrations/*.{ts,js}`)
  : (migrationOption = `${process.env.TYPEORM_MIGRATIONS}/database/migration-deploy/*.{ts,js}`);

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: port,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [`${process.env.TYPEORM_ENTITIES}/entities/*.{ts,js}`],
  migrations: [migrationOption],
  extra: sslOption,
});

export { AppDataSource };
