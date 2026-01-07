import { Provider } from '@nestjs/common';
import { GetUsersServiceUserProvider } from './getUsers.provider';
import { GetUsersService } from './getUsers.service';

export const GetUsersProvider: Provider = {
  provide: GetUsersServiceUserProvider,
  useClass: GetUsersService,
};
