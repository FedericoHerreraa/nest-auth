import { IsString, MinLength } from "class-validator";

export class CreateTaskDto {
    @IsString()
    userId: string

    @IsString()
    @MinLength(6)
    title: string;

    @IsString()
    description: string;
}