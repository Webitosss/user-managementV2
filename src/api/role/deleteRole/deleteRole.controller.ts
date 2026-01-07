import {
  Controller,
  Delete,
  Param,
  ParseBoolPipe,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { DeleteServiceRoleProvider } from './deleteRole.provider';

@Controller('roles')
export class DeleteRoleController {
  constructor(private readonly deleteRole: DeleteServiceRoleProvider) {}

  @Delete(':id')
  async delete(
    @Param('id', ParseUUIDPipe) id: string,
    @Query('force', ParseBoolPipe) force: boolean,
  ) {
    return this.deleteRole.execute(id, force);
  }
}
