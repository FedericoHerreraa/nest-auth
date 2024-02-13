import { Body, Controller, Post, Get, UseGuards, Request, Res } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post('register')
    async register(@Body() registerDto: RegisterDto) {
        console.log(registerDto)
        return this.authService.register(registerDto)
    }

    @Get('getUsers')
    async getUsers() {
        const users = await this.authService.getAllUsers();
        return { users };
    }

    @Post('login')
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto)
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    profile(@Request() req, @Res() res) {
        res.header('Access-Control-Allow-Origin', 'https://nestauth-phi.vercel.app');
        res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.header('Access-Control-Allow-Credentials', 'true');
        return req.user
    }
}
