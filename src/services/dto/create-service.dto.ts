import {
<<<<<<< HEAD
  IsNumber,
  IsNotEmpty,
  IsString,
  IsDate,
  IsOptional,
  IsDateString,
} from "class-validator";
=======
    IsNumber,
    IsNotEmpty,
    IsString,
    IsDate,
    IsOptional,
} from 'class-validator';
>>>>>>> b787694acd04fb12f0c49e6a0233f87baadb6081

export class CreateServiceDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsString()
    city: string;

<<<<<<< HEAD
  @IsNotEmpty()
  @IsDateString()
  @IsOptional()
  start_time: Date;

  @IsNotEmpty()
  @IsDateString()
  @IsOptional()
  end_time: Date;
=======
    @IsNotEmpty()
    @IsDate()
    @IsOptional()
    start_time: Date;

    @IsNotEmpty()
    @IsDate()
    @IsOptional()
    end_time: Date;
>>>>>>> b787694acd04fb12f0c49e6a0233f87baadb6081
}
