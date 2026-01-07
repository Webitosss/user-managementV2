import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteServiceUserProvider } from './deleteUser.provider';
import { UserRepositoryProvider } from 'src/core/entities/user/user.repository.provider';

@Injectable()
export class DeleteUserService implements DeleteServiceUserProvider {
  constructor(private readonly userRepository: UserRepositoryProvider) {}

  async execute(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) throw new NotFoundException(`User with id ${id} not found`);

    await this.userRepository.delete(id);

    return user;
  }
}
