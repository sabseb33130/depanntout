import { IsNumber, IsNotEmpty, IsString, IsDateString } from 'class-validator';

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
    start_time: Date;

    @IsNotEmpty()
    @IsDateString()
    end_time: Date;
}
