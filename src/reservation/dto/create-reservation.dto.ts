import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateReservationDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
    @IsNotEmpty()
    @IsNumber()
    numero: number;
    @IsNotEmpty()
    @IsNumber()
    service: number;
    @IsNotEmpty()
    @IsNumber()
    user: number;
}
