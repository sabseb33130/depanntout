import { Injectable } from "@nestjs/common";
import { CreateServiceDto } from "./dto/create-service.dto";
import { UpdateServiceDto } from "./dto/update-service.dto";
import { Service } from "./entities/service.entity";

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

  findOne(id: number) {
    return Service.findBy({ id: id });
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    const newService = await Service.findOneBy({ id: id });

    newService.name = updateServiceDto.name;
    newService.price = updateServiceDto.price;
    newService.city = updateServiceDto.city;
    newService.start_time = updateServiceDto.start_time;
    newService.end_time = updateServiceDto.end_time;
    newService.reserved = updateServiceDto.reserved;

    const serviceChanged = await Service.save(newService);
    return serviceChanged;
  }

  async remove(id: number) {
    const idService = await Service.findOneBy({ id: id });
    idService.id = id;

    const ServiceSupp = await Service.remove(idService);
    return ServiceSupp;
  }
}
