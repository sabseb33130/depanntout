import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
        const verifPass = await User.findOneBy({ mail: createUserDto.mail });
        const comparePass =
            createUserDto.password === createUserDto.confirmPassword;

        if (verifPass) {
            res.status(401).json({
                status: '404',
                message: 'This client is existing !!',
            });
            return;
        }

        if (!comparePass) {
            res.status(401).json({
                status: '401',
                message:
                    'The password confirmation is not the same as the password !!',
            });
            return;
        }
        this.usersService.register(createUserDto);

        res.status(201).json({
            status: '201',
            message: 'Success',
            data: createUserDto,
        });
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id);
    }
}
