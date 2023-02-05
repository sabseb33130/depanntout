import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateReservationDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
    @IsNotEmpty()
    @IsNumber()
    numero: number;
    @IsNotEmpty()
    @IsString()
    service: string;
    @IsNotEmpty()
    @IsString()
    user: string;
}
