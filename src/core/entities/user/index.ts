import { Provider } from '@nestjs/common';
import { UserRepositoryProvider } from './user.repository.provider';
import { UserRepository } from './user.repository';

export const UserEntityProvider: Provider = {
  provide: UserRepositoryProvider,
  useClass: UserRepository,
};
