import { Injectable, NotFoundException } from '@nestjs/common';
import { FindUserByEmailProviderAbstract } from './findUserByEmail.provider';
import { UserRepositoryProvider } from '../../../core/entities/user/user.repository.provider';

@Injectable()
export class FindUserByEmailService implements FindUserByEmailProviderAbstract {
  constructor(private readonly userRepository: UserRepositoryProvider) {}

  async execute(email: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!user.isActive) {
      throw new NotFoundException('User is disabled');
    }

    return user;
  }
}
