import "reflect-metadata";
import { DataSource } from "typeorm";
import { Project } from "./models/project.js";

export const AppDataSource = new DataSource({
  type: "better-sqlite3",
  database: "database.sqlite",
  synchronize: true,
  entities: [Project],
});