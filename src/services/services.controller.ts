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

@Controller('services')
export class ServicesController {
    constructor(private readonly servicesService: ServicesService) {}
    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createServiceDto: CreateServiceDto) {
        return this.servicesService.create(createServiceDto);
    }
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return await this.servicesService.findAll();
    }
    @UseGuards(JwtAuthGuard)
    @Get('name')
    async findByName(@Body('name') name: string) {
        return await this.servicesService.findOneByName(name);
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
