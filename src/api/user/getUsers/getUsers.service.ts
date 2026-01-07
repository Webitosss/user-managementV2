import { Injectable, NotFoundException } from '@nestjs/common';
import {
  GetUsersServiceUserProvider,
  GetUsersFilters,
} from './getUsers.provider';
import { UserRepositoryProvider } from '../../../core/entities/user/user.repository.provider';

@Injectable()
export class GetUsersService implements GetUsersServiceUserProvider {
  constructor(private readonly userRepository: UserRepositoryProvider) {}

  async execute({ status, role }: GetUsersFilters) {
    const users = await this.userRepository.findByFilters({
      status,
      role,
    });

    if (!users || users.length === 0)
      throw new NotFoundException('Users not found');

    return users;
  }
}
