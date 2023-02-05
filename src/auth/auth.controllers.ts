import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthToken } from './dto/authToken.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('auth/login')
    async login(@Request() authToken: AuthToken) {
        return await this.authService.login(authToken);
    }
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req: any) {
        return req.body.user;
    }
}
