import { Body, Controller, Delete, Get, Post, Put, Query, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskNewDto } from './dto/taskNew.dto';
import { TaskUpdateDto } from './dto/taskUpdate.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}
    
    @Get('allTasks')
    @UseGuards(AuthGuard)
    async getAllTasks(@Query('userId') userId: string) {
        return await this.tasksService.getAllTasks(userId)
    }

    @Get('getTask')
    @UseGuards(AuthGuard)
    async getTask(@Query('taskId') taskId: string) {
        return await this.tasksService.getTask(taskId)
    }

    @Post('createTask')
    @UseGuards(AuthGuard)
    async createTask(@Body() newTask: TaskNewDto) {
        return await this.tasksService.createTask(newTask)
    }

    @Put('updateTask')
    @UseGuards(AuthGuard)
    async updateTask(@Body() updatedTask: TaskUpdateDto) {
        return await this.tasksService.updateTask(updatedTask)
    }

    @Delete('deleteTask')
    @UseGuards(AuthGuard)
    async deleteTask(@Query('taskId') taskId: string) {
        return await this.tasksService.deleteTask(taskId)
    }
}
