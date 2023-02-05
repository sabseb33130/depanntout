import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity } from 'typeorm';
import { CreateReservationDto } from './create-reservation.dto';
@Entity()
export class UpdateReservationDto extends PartialType(CreateReservationDto) {}
