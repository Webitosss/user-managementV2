import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from '../../createRole/dtos/createRole.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {}
