import { Injectable, Res } from '@nestjs/common';
import { response } from 'express';
import { User } from 'src/users/entities/user.entity';
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

    async findAll() {
        const serviceUser = await Service.find();
        return serviceUser;
    }
    async findOneByName(name: string) {
        const findService = await Service.findOneBy({ name: name });
        if (!findService) {
            return 'Le service recherché n existe pas';
        } else {
            return findService;
        }
    }
    async findOneByStartTime(start_time: Date) {
        const findService = await Service.findOneBy({ start_time: start_time });
        return findService;
    }

    async findOneId(id: number) {
        const serviceId = await Service.findBy({ id: id });
        if (!serviceId) {
            return 'Le service recherché n existe pas';
        } else {
            return serviceId;
        }
    }

    async update(id: number, updateServiceDto: UpdateServiceDto) {
        const serviceChanged = await Service.findBy({ id: id });
        console.log(serviceChanged[0]);
        console.log(updateServiceDto);

        if (updateServiceDto.reserved == serviceChanged[0].reserved) {
            return 'pas de réservation faites';
        } else {
            await Service.update(id, updateServiceDto);
            if (serviceChanged) {
                return serviceChanged;
            } else {
                return undefined;
            }
        }
    }

    async remove(id: number) {
        const idService = await Service.findOneBy({ id: id });
        if (!idService) {
            return 'Le service recherché n existe pas';
        }
        await Service.remove(idService);
        return idService;
    }
}
