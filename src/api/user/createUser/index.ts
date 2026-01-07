import { Provider } from '@nestjs/common';
import { CreateServiceUserProvider } from './createUser.provider';
import { CreateUserService } from './createUser.service';

export const CreateUserProvider: Provider = {
  provide: CreateServiceUserProvider,
  useClass: CreateUserService,
};
