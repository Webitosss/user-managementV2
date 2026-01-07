import { Controller, Post, Param, ParseUUIDPipe } from '@nestjs/common';
import { AssignRoleServiceUserProvider } from './assignRole.provider';

@Controller('users')
export class AssignRoleController {
  constructor(
    private readonly assignRoleService: AssignRoleServiceUserProvider,
  ) {}

  @Post(':id/roles/:roleId')
  async assignRole(
    @Param('id', ParseUUIDPipe) userId: string,
    @Param('roleId', ParseUUIDPipe) roleId: string,
  ) {
    await this.assignRoleService.execute(userId, roleId);
    return { message: 'Role assigned successfully' };
  }
}
