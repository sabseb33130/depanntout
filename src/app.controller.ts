import { Controller, Request, Post, UseGuards, Get } from "@nestjs/common";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { AppService } from "./app.service";
import { LocalAuthGuard } from "./auth/local-auth.guards";
import { AuthService } from "./auth/auth.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  //@UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}
