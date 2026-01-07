import { Body, Controller, Post } from '@nestjs/common';
import { CreateServiceUserProvider } from './createUser.provider';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserService: CreateServiceUserProvider) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.createUserService.execute(dto);
  }
}
