import { IsString, MinLength } from "class-validator";
import { Transform } from "class-transformer";

//comentario
export class LoginDto {
    @IsString()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;
}