import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity } from 'typeorm';
@Entity()
export class AuthToken {
    @IsNotEmpty()
    @IsString()
    mail: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
