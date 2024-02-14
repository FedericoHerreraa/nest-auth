import { IsString, MinLength, IsEmail } from "class-validator";

//comentario
export class LoginDto {
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;
}