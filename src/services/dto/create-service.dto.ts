import {
  IsNumber,
  IsNotEmpty,
  IsString,
  IsDate,
  IsOptional,
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
  @IsDate()
  @IsOptional()
  start_time: Date;

  @IsNotEmpty()
  @IsDate()
  @IsOptional()
  end_time: Date;
}
