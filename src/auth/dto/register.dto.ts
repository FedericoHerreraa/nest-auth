import { IsString, MinLength, IsEmail } from "class-validator";
import { Transform } from "class-transformer";


export class RegisterDto {
    @IsString()
    username: string;
    
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @Transform(({ value }) => value.trim())
    password: string;
    
}