import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
@Entity()
export class Service extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "decimal" })
  price: number;

  @Column({ type: "varchar" })
  city: string;

  @Column({ type: "timestamp", default: null })
  start_time: Date;

  @Column({ type: "timestamp", default: null })
  end_time: Date;

  @Column({ type: "boolean", default: false })
  reserved: boolean;
}
