import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateServiceUserProvider } from './updateUser.provider';
import { UserRepositoryProvider } from 'src/core/entities/user/user.repository.provider';
import { UpdateUserDto } from './dtos/updateUser.dto';

@Injectable()
export class UpdateUserService implements UpdateServiceUserProvider {
  constructor(private readonly userRepository: UserRepositoryProvider) {}

  async execute(id: string, data: UpdateUserDto) {
    const user = await this.userRepository.findById(id);

    if (!user) throw new NotFoundException(`User with id ${id} not found`);

    return this.userRepository.update(id, data);
  }
}
