import { Controller, Get } from '@nestjs/common';
import { GetRolesServiceRoleProvider } from './getRoles.provider';

@Controller('roles')
export class GetRolesController {

  constructor(
    private readonly getRoles: GetRolesServiceRoleProvider,
  ) {}

  @Get()
  async findAll() {
    return this.getRoles.execute();
  }
}
