import {
  IsNumber,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsDateString,
} from "class-validator";

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

  @IsNotEmpty()
  @IsDateString()
  @IsOptional()
  start_time: Date;

  @IsNotEmpty()
  @IsDateString()
  @IsOptional()
  end_time: Date;
}
