import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { TasksDbModule } from './tasks-db/tasks-db.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule, 
    UsersModule, 
    TasksModule, 
    TasksDbModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
