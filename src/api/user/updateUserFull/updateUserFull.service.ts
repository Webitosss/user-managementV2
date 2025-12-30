import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateFullServiceUserProvider } from './updateUserFull.provider';
import { UserRepositoryProvider } from '../../../core/entities/user/user.repository.provider';
import { UpdateUserFullDto } from './dtos/updateUserFull.dto';

@Injectable()
export class UpdateUserFullService implements UpdateFullServiceUserProvider {

  constructor(
    private readonly userRepository: UserRepositoryProvider,
  ) {}

  async execute(id: string, data: UpdateUserFullDto) {

    const user = await this.userRepository.findById(id);

    if (!user)
      throw new NotFoundException(`User with id ${id} not found`);

    return this.userRepository.update(id, data);

  }
}
