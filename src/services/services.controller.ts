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
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Service } from './entities/service.entity';

@Controller('services')
export class ServicesController {
    constructor(private readonly servicesService: ServicesService) {}
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createServiceDto: CreateServiceDto) {
        const verif = this.servicesService.findOneByStartTime(
            createServiceDto.start_time,
        );
        if (verif) {
            return 'Service déjà proposéé';
        } else {
            return this.servicesService.create(createServiceDto);
        }
    }
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return await this.servicesService.findAll();
    }
    @UseGuards(JwtAuthGuard)
    @Get(':name')
    async findByName(@Body('name') name: string) {
        const rechName = await this.servicesService.findOneByName(name);

        return rechName;
    }
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.servicesService.findOneId(+id);
    }
    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateServiceDto: UpdateServiceDto,
    ) {
        return await this.servicesService.update(+id, updateServiceDto);
    }
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.servicesService.remove(+id);
    }
}
