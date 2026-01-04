import { Injectable, ConflictException } from '@nestjs/common';
import { CreateServiceUserProvider } from './createUser.provider';
import { UserRepositoryProvider } from '../../../core/entities/user/user.repository.provider';
import { CreateUserDto } from './dtos/createUser.dto';

@Injectable()
export class CreateUserService implements CreateServiceUserProvider {
  constructor(private readonly userRepository: UserRepositoryProvider) {}

  async execute(data: CreateUserDto) {
    const existingUser = await this.userRepository.findByEmail(data.email);

    if (existingUser) throw new ConflictException('Email already exists');

    return this.userRepository.create(data);
  }
}
