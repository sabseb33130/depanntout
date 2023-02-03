import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guards';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return req.user;
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
