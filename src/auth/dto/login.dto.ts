import { IsString, MinLength } from "class-validator";

//comentario
export class LoginDto {
    @IsString()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;
}