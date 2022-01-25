import { IsString, MaxLength, IsEmail } from 'class-validator'


export class UserValidation{

    @IsString()
    @MaxLength(255)
    @IsEmail()
    email: string;

    @IsString()
    @MaxLength(120)
    name: string;

    @IsString()
    @MaxLength(20)
    password: string;
}