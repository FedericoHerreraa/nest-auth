import { IsString, MinLength } from "class-validator";

export class TaskUpdateDto {
    @IsString()
    taskId: string;

    title?: string;

    description?: string;
}