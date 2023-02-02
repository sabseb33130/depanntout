import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ServicesService } from "./services.service";
import { CreateServiceDto } from "./dto/create-service.dto";
import { UpdateServiceDto } from "./dto/update-service.dto";

@Controller("services")
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.servicesService.create(createServiceDto);
  }

  @Get()
  async findAll() {
    return await this.servicesService.findAll();
  }
  @Get("name")
  async findByName(@Body("name") name: string) {
    return await this.servicesService.findByName(name);
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.servicesService.findOne(+id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateServiceDto: UpdateServiceDto
  ) {
    return await this.servicesService.update(+id, updateServiceDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.servicesService.remove(+id);
  }
}
