import { Controller, Patch, Param, Body } from '@nestjs/common';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { UpdateServiceUserProvider } from './updateUser.provider';

@Controller('users')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateServiceUserProvider) {}

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.updateUserService.execute(id, body);
  }
}
