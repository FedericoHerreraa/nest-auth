import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, UserSchema } from './dto/userSchema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), forwardRef(() => AuthModule)],
  providers: [UsersService],
  controllers: []
})
export class UsersModule {}
