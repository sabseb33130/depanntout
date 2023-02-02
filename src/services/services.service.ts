import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';

@Injectable()
export class ServicesService {
    create(createServiceDto: CreateServiceDto) {
        const newService = new Service();
        newService.name = createServiceDto.name;
        newService.price = createServiceDto.price;
        newService.city = createServiceDto.city;
        newService.start_time = createServiceDto.start_time;
        newService.end_time = createServiceDto.end_time;
        newService.save();
        return newService;
    }

    findAll() {
        return Service.find();
    }
    async findOneByName(name: string) {
        return await Service.findOneBy({ name: name });
    }

    findOneId(id: number) {
        return Service.findBy({ id: id });
    }

    async update(id: number, updateServiceDto: UpdateServiceDto) {
        await Service.update(id, updateServiceDto);
        const serviceChanged = Service.findBy({ id: id });
        if (serviceChanged) {
            return serviceChanged;
        } else {
            return undefined;
        }
    }

    async remove(id: number) {
        const idService = await Service.findOneBy({ id: id });
        await Service.remove(idService);
        return idService;
    }
}
