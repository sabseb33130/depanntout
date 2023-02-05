import { type } from 'os';
import { Service } from 'src/services/entities/service.entity';
import { User } from 'src/users/entities/user.entity';
import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Reservation extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'integer' })
    numero: number;
    @OneToOne(() => Service, (service) => service.name)
    @JoinColumn({ referencedColumnName: 'name' })
    name: string;

    @ManyToOne(() => User, (user) => user.mail, { eager: true })
    @JoinColumn({ referencedColumnName: 'mail' })
    username: string;
}
