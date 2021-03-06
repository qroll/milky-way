import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  HttpCode,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  @HttpCode(200)
  async login(@Request() req) {
    req.session = req.user;
    return req.user;
  }

  @Post('auth/signup')
  async signUp(@Body('username') username, @Body('password') password) {
    const user = await this.authService.createUser(username, password);
    return user;
  }

  @Get('auth/session')
  async getSession(@Request() req) {
    return req.session;
  }
}
