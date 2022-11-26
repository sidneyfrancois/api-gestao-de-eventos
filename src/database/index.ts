import "reflect-metadata";
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ["./src/entities/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
});

export function createConnection(host = "localhost"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;
