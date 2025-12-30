import { Controller, Delete, Param, ParseUUIDPipe } from '@nestjs/common';
import { DeleteServiceUserProvider } from './deleteUser.provider';

@Controller('users')
export class DeleteUserController {

  constructor(
    private readonly deleteUser: DeleteServiceUserProvider,
  ) {}

  @Delete(':id')
  async deleteUserById(@Param('id', ParseUUIDPipe) id: string) {
    return this.deleteUser.execute(id);
  }
}
 