import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksDbModule } from '../tasks-db/tasks-db.module';
import { TasksDbService } from '../tasks-db/tasks-db.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from 'src/tasks-db/dto/taskSchema';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    TasksDbModule,
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])
  ],
  providers: [TasksService, TasksDbService],
  controllers: [TasksController]
})
export class TasksModule {}
