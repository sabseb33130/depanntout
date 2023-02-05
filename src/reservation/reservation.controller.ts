import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('reservation')
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) {}
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createReservationDto: CreateReservationDto) {
        return await this.reservationService.createReservation(
            createReservationDto,
        );
    }
    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.reservationService.findAll();
    }
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.reservationService.findOne(+id);
    }
    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateReservationDto: UpdateReservationDto,
    ) {
        return this.reservationService.update(+id, updateReservationDto);
    }
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.reservationService.remove(+id);
    }
}
