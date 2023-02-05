import { Exclude } from 'class-transformer';
import { Service } from 'src/services/entities/service.entity';
import {
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
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'integer' })
    id: number;

    @Column({ type: 'varchar', nullable: false })
    username: string;

    @Column({ type: 'varchar', nullable: false })
    mail: string;
    @Exclude({ toPlainOnly: true })
    @Column({ type: 'varchar', select: false })
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
}
