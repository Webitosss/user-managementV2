import { Provider } from '@nestjs/common';
import { DeleteServiceUserProvider } from './deleteUser.provider';
import { DeleteUserService } from './deleteUser.service';

export const DeleteUserProvider: Provider = {
  provide: DeleteServiceUserProvider,
  useClass: DeleteUserService,
};
