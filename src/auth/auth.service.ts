import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from 'src/users/users.service';
import * as bcryptjs from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}
    async register({ username, email, password }: RegisterDto) {
        try {
            const hashedPassword = await bcryptjs.hash(password, 10)
            return this.usersService.createUser({ 
                username, 
                email, 
                password: hashedPassword
            })

        } catch (error) {
            console.log(error)
        }
    }

    async login({ email, password }: LoginDto) {
        const user = await this.usersService.findOneByEmail(email)
        if (!user) {
            throw new UnauthorizedException('Email incorrecto')
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password) 
        if (!isPasswordValid) {
            throw new UnauthorizedException('Contraseña incorrecta')
        }

        const payload = { email: user.email }

        const token = await this.jwtService.signAsync(payload)

        return {
            token,
            user
        };  
    }

    async profile(email: string) {
        const user = await this.usersService.findOneByEmail(email)
        return user
    }

    getAllUsers() {
        return this.usersService.getAllUsers()
    }

}
