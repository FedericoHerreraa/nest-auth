import { IsString, MinLength } from "class-validator";
import { Transform } from "class-transformer";

export class LoginDto {
    @IsString()
    email: string;

    @IsString()
    @MinLength(6)
    @Transform(({ value }) => value.trim())
    password: string;
}