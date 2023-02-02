import { Controller, Get } from '@nestjs/common';
import { Post, Request, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport/dist';
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
}
