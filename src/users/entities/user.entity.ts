import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Service } from 'src/services/entities/service.entity';
import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { servicesVersion } from 'typescript';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'integer' })
    id: number;

    @Column({ type: 'varchar' })
    username: string;

    @Column({ type: 'varchar' })
    mail: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'varchar' })
    adress_line1: string;
    @Column({ type: 'varchar', default: '' })
    adress_line2: string;

    @Column({ type: 'varchar', default: '' })
    adress_line3: string;

    @Column({ type: 'varchar' })
    zipCode: string;

    @Column({ type: 'varchar' })
    city: string;
    @OneToMany(() => Service, (service) => service.id)
    @JoinColumn()
    service: Service[];
}
