import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './dto/taskSchema';
import { Model } from 'mongoose';

@Injectable()
export class TasksDbService {
    constructor(@InjectModel(Task.name) private taskSchema: Model<Task>) {}
    async getAllTasks(userID: string) {
        return await this.taskSchema.find({ userId: userID }).exec()
    }

    async getTask(taskId: string) {
        return await this.taskSchema.findOne({ _id: taskId }).exec()
    }

    async createNewTask({ userId, title, description }: CreateTaskDto) {
        const newTask = await this.taskSchema.create({
            userId,
            title,
            description
        })
        return newTask.save()
    }

    async updateTask({ taskId, title, description }: UpdateTaskDto) {
        return await this.taskSchema.findOneAndUpdate({ _id: taskId }, { title, description }, { new: true }).exec()
    }

    async deleteTask(taskId: string) {
        return this.taskSchema.findOneAndDelete({ _id: taskId }).exec()
    }

}
