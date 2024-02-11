import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './dto/userSchema';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}
    async createUser(userNew: UserDto) {
        const { username, email, password } = userNew
        const newUser = new this.userModel({ username, email, password });
        return newUser.save()
    }
    
    async getAllUsers(): Promise<User[]> {
        return this.userModel.find().exec()
    }

    async findOneByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ email }).exec()
    }
}
