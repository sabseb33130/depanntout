import { PartialType } from '@nestjs/mapped-types';
import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsPostalCode,
    IsString,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    mail: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    confirmPassword: string;

    @IsNotEmpty()
    @IsString()
    adress_line1: string;

    @IsString()
    @IsOptional()
    adress_line2: string;

    @IsString()
    @IsOptional()
    adress_line3: string;

    @IsNotEmpty()
    @IsString()
    @IsPostalCode('FR')
    zipCode: string;

    @IsNotEmpty()
    @IsString()
    city: string;
}
