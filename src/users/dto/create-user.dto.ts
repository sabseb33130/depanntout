
import {

  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPostalCode,
  IsString,
} from "class-validator";

export class CreateUserDto {
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
  @IsPostalCode("any")
  zipCode: string;

  @IsNotEmpty()
  @IsString()
  city: string;
}
