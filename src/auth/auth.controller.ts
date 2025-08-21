import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  ConflictException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.authService.register(createUserDto);
      const { password, ...result } = user;
      return {
        message: 'User registered successfully',
        user: result,
      };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('User with this email already exists');
      }
      throw error;
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Body() loginDto: LoginDto) {
    const { access_token } = await this.authService.login(req.user);
    return {
      message: 'Login successful',
      access_token,
      user: {
        id: req.user.id,
        email: req.user.email,
      },
    };
  }
}