import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findByName(username);
        console.log(user);

        /*    if (user && user === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;*/
    }
}
