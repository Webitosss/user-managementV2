import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterUserProvider } from './register.provider';
import { RegisterDto } from './dtos/register.dto';
import * as bcrypt from 'bcrypt';
import { CreateServiceUserProvider } from 'src/api/user/createUser/createUser.provider';
import { FindUserByEmailProviderAbstract } from 'src/api/user/findUserByEmail/findUserByEmail.provider';

@Injectable()
export class RegisterUserService implements RegisterUserProvider {
  constructor(
    private readonly createServiceUser: CreateServiceUserProvider,
    private readonly findUserByEmail: FindUserByEmailProviderAbstract,
  ) {}

  async execute(data: RegisterDto) {
    try {
      await this.findUserByEmail.verify(data.email);

      const hashedPassword = await bcrypt.hash(data.password, 10);

      return this.createServiceUser.execute({
        ...data,
        password: hashedPassword,
      });
    } catch (error) {
      throw new BadRequestException({
        message: 'User already exists',
        error: JSON.stringify(error),
      });
    }
  }
}
