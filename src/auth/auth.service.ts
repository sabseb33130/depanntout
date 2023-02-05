import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findByMail(username);
        const verifpassword = await bcrypt.compare(password, user.password);

        if (user && verifpassword) {
            const { password, ...result } = user;

            return result;
        }
        return null;
    }
    async login(user: any) {
        const payload = { mail: user.mail, sub: user.userId };
        console.log(payload);

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
