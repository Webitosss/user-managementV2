import { Controller, Patch, Param, Body } from '@nestjs/common';
import { UpdateServiceRoleProvider } from './updateRole.provider';
import { UpdateRoleDto } from './dtos/updateRole.Dto';


@Controller('roles')
export class UpdateRoleController {
  constructor(
    private readonly updateRoleService: UpdateServiceRoleProvider,
  ) {}

  @Patch(':id')
  async updateRole(
    @Param('id') id: string,
    @Body() body: UpdateRoleDto,
  ) {
    return this.updateRoleService.execute(id, body);
  }
}
 