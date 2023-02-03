import { Service } from "src/services/entities/service.entity";
import {
<<<<<<< HEAD
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

@Entity()
//@Unique(["mail"])
=======
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm';

@Entity()
@Unique(['mail'])
>>>>>>> e31e5f2f0b785fe406ed56be260d56a80403ac9c
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "integer" })
  id: number;

  @Column({ type: "varchar" })
  username: string;

  @Column({ type: "varchar" })
  mail: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "varchar" })
  adress_line1: string;
  @Column({ type: "varchar", default: "" })
  adress_line2: string;

  @Column({ type: "varchar", default: "" })
  adress_line3: string;

  @Column({ type: "varchar" })
  zipCode: string;

  @Column({ type: "varchar" })
  city: string;
  @OneToMany(() => Service, (service) => service.id)
  @JoinColumn()
  service: Service[];
}
