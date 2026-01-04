import { Controller, Get, Query } from '@nestjs/common';
import { GetUsersServiceUserProvider } from './getUsers.provider';
import { GetUsersQueryDto } from './dtos/getUsers.dto';

@Controller('users')
export class GetUsersController {
  constructor(private readonly getUsers: GetUsersServiceUserProvider) {}

  @Get()
  async execute(@Query() query: GetUsersQueryDto) {
    return this.getUsers.execute({
      status: query.status,
      role: query.role,
    });
  }
}
