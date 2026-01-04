import { Injectable } from '@nestjs/common';
import { RegisterUserProvider } from './register.provider';
import { RegisterDto } from './dtos/register.dto';
import * as bcrypt from 'bcrypt';
import { CreateServiceUserProvider } from 'src/api/user/createUser/createUser.provider';

@Injectable()
export class RegisterUserService implements RegisterUserProvider {
  constructor(private readonly createServiceUser: CreateServiceUserProvider) {}

  async execute(data: RegisterDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.createServiceUser.execute({
      ...data,
      password: hashedPassword,
    });
  }
}
