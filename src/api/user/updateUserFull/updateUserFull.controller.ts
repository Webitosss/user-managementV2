import { Controller, Put, Param, Body } from '@nestjs/common';
import { UpdateUserFullDto } from './dtos/updateUserFull.dto';
import { UpdateFullServiceUserProvider } from './updateUserFull.provider';

@Controller('users')
export class UpdateUserFullController {

  constructor(
    private readonly updateUserFullService: UpdateFullServiceUserProvider,
  ) {}

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateUserFullDto,
  ) {
    return this.updateUserFullService.execute(id, dto);
  }
}
