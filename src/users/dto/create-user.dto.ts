import { IsEmail, IsEnum, IsNotEmpty, IsString, isEmpty } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["INTERN", "ENGINEER", "ADMIN"], {
        message: 'Valid role required'
    })
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}