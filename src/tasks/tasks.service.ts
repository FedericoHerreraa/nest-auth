import { Injectable } from '@nestjs/common';
import { TasksDbService } from 'src/tasks-db/tasks-db.service';
import { TaskNewDto } from './dto/taskNew.dto';
import { TaskUpdateDto } from './dto/taskUpdate.dto';

@Injectable()
export class TasksService {
    constructor(private readonly taskDbService: TasksDbService) {}
    async getAllTasks(userId: string) {
        return await this.taskDbService.getAllTasks(userId)
    }

    async getTask(taskId: string) {
        return await this.taskDbService.getTask(taskId)
    }
    async createTask(newTask: TaskNewDto) {
        return await this.taskDbService.createNewTask(newTask)
    }

    async updateTask(updatedTask: TaskUpdateDto) {
        return await this.taskDbService.updateTask(updatedTask)
    }

    async deleteTask(taskId: string) {
        return await this.taskDbService.deleteTask(taskId)
    }
}
