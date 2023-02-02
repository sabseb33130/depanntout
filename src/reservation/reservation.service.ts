import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationService {
    createReservation(createReservationDto: CreateReservationDto) {
        const creeReservation = new Reservation();
        creeReservation.numero = createReservationDto.numero;
        creeReservation.save();

        return creeReservation;
    }

    findAll() {
        return Reservation.find();
    }

    findOne(id: number) {
        return Reservation.findBy({ id: id });
    }

    update(id: number, updateReservationDto: UpdateReservationDto) {}

    remove(id: number) {
        return `This action removes a #${id} reservation`;
    }
}
