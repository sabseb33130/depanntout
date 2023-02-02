import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsOptional, IsBoolean, IsDate } from "class-validator";
import { CreateServiceDto } from "./create-service.dto";

export class UpdateServiceDto extends PartialType(CreateServiceDto) {
  @IsNotEmpty()
  @IsBoolean()
  @IsOptional()
  reserved: boolean;
}
