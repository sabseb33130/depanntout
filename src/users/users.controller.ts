import {
<<<<<<< HEAD
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Response } from "express";
=======
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
>>>>>>> e31e5f2f0b785fe406ed56be260d56a80403ac9c

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const comparePass =
      createUserDto.password === createUserDto.confirmPassword;
    if (comparePass) {
      return this.usersService.register(createUserDto);
    }
    return res.status(401).json({
      status: "401",
      message: "The password confirmation is not the same as the password !!",
    });
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

<<<<<<< HEAD
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }
=======
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(+id);
    }
>>>>>>> e31e5f2f0b785fe406ed56be260d56a80403ac9c

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}
