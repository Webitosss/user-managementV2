import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateUser } from './createUser.interface';

export class CreateUserDto implements CreateUser {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  password?: string;
}
