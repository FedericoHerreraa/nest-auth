import { Module } from '@nestjs/common';
import { TasksDbService } from './tasks-db.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './dto/taskSchema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])],
  providers: [TasksDbService],
  controllers: []
})
export class TasksDbModule {}
