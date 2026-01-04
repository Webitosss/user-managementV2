import { Provider } from '@nestjs/common';
import { UpdateServiceUserProvider } from './updateUser.provider';
import { UpdateUserService } from './updateUser.service';

export const UpdateUserProvider: Provider = {
  provide: UpdateServiceUserProvider,
  useClass: UpdateUserService,
};
