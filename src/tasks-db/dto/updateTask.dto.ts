import { IsString } from "class-validator";

export class UpdateTaskDto {
    @IsString()
    taskId: string;

    title?: string;

    description?: string;
}