import { Injectable, NotFoundException } from '@nestjs/common';
import { GetByIdServiceUserProvider } from './getUserById.provider';
import { UserRepositoryProvider } from '../../../core/entities/user/user.repository.provider';

@Injectable()
export class GetUserByIdService implements GetByIdServiceUserProvider {

  constructor(
    private readonly userRepository: UserRepositoryProvider,
  ) {}

  async execute(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user)
      throw new NotFoundException(`User with id ${id} not found`);

    return user;
  }
}
 