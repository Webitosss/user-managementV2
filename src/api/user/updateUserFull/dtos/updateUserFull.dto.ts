import { IsEmail, IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateUserFullDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}
