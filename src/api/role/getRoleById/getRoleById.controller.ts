import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { GetByIdServiceRoleProvider } from './getRoleById.provider';

@Controller('roles')
export class GetRoleByIdController {
  constructor(private readonly getRoleById: GetByIdServiceRoleProvider) {}

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string) {
    return this.getRoleById.execute(id);
  }
}
