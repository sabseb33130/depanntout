import { Injectable } from '@nestjs/common';
import { userInfo } from 'os';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    async register(createUserDto: CreateUserDto) {
        const user = new User();
        user.username = createUserDto.username;
        user.mail = createUserDto.mail;
        user.password = createUserDto.password;
        user.adress_line1 = createUserDto.adress_line1;
        user.adress_line2 = createUserDto.adress_line2;
        user.adress_line3 = createUserDto.adress_line3;
        user.zipCode = createUserDto.zipCode;
        user.city = createUserDto.city;
        await User.save(user);
        return user;
    }

    findAll() {
        return User.find();
    }
    async findByName(username: string) {
        const oneUsername = await User.findOneBy({ username: username });
        return oneUsername;
    }

    async findOne(id: number) {
        const oneUser = await User.findBy({ id: id });
        return oneUser;
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        await User.update(id, updateUserDto);
        const updateUser = User.findOneBy({ id: id });
        return updateUser;
    }

    async remove(id: number) {
        const deleteUser = await User.findOneBy({ id: id });
        User.remove(deleteUser);
        return deleteUser;
    }
}
