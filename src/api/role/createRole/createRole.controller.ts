import { Body, Controller, Post } from '@nestjs/common';
import { CreateRoleDto } from './dtos/createRole.dto';
import { CreateServiceRoleProvider } from './createRole.provider';

@Controller('roles')
export class CreateRoleController {
  constructor(private readonly createRoleService: CreateServiceRoleProvider) {}

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.createRoleService.execute(dto);
  }
}
