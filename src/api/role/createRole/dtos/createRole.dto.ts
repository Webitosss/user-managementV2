import { IsString, IsNotEmpty, IsOptional, IsUppercase } from 'class-validator';
import { CreateRole } from './createRole.interface';

export class CreateRoleDto implements CreateRole {

  @IsString()
  @IsNotEmpty()
  @IsUppercase()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}  