import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Entity } from 'typeorm';
@Entity()
export class AuthToken {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    mail: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
