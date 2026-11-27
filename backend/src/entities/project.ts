import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  description!: string;

  @Column({ type: "simple-array" })
  tools!: string[];

  @Column({ type: "text" })
  webAddress!: string;

  @Column({ type: "float" })
  timePerTool!: number;

  @Column({ type: "text" })
  status!: "active" | "published";
}