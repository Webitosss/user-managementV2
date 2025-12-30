import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { GetByIdServiceUserProvider } from './getUserById.provider';

@Controller('users')
export class GetUserByIdController {

  constructor(
    private readonly getUserById: GetByIdServiceUserProvider,
  ) {}

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string) {
    return this.getUserById.execute(id);
  }
}
 