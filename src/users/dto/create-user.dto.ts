import {
<<<<<<< HEAD
  Equals,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPostalCode,
  IsString,
} from "class-validator";
=======
    Equals,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsPostalCode,
    IsString,
} from 'class-validator';
>>>>>>> e31e5f2f0b785fe406ed56be260d56a80403ac9c

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

<<<<<<< HEAD
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  mail: string;
=======
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    mail: string;
>>>>>>> e31e5f2f0b785fe406ed56be260d56a80403ac9c

  @IsNotEmpty()
  @IsString()
  password: string;

<<<<<<< HEAD
  @IsNotEmpty()
  @IsString()
  confirmPassword: string;
=======
    @IsNotEmpty()
    @IsString()
    confirmPassword: string;

    @IsNotEmpty()
    @IsString()
    adress_line1: string;
>>>>>>> e31e5f2f0b785fe406ed56be260d56a80403ac9c

  @IsNotEmpty()
  @IsString()
  adress_line1: string;

  @IsString()
  @IsOptional()
  adress_line2: string;

<<<<<<< HEAD
  @IsString()
  @IsOptional()
  adress_line3: string;
=======
    @IsNotEmpty()
    @IsString()
    @IsPostalCode('FR')
    zipCode: string;
>>>>>>> e31e5f2f0b785fe406ed56be260d56a80403ac9c

  @IsNotEmpty()
  @IsString()
  @IsPostalCode("any")
  zipCode: string;

  @IsNotEmpty()
  @IsString()
  city: string;
}
