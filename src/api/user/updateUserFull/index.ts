import { Provider } from '@nestjs/common';
import { UpdateFullServiceUserProvider } from './updateUserFull.provider';
import { UpdateUserFullService } from './updateUserFull.service';

export const UpdateUserFullProvider: Provider = {
  provide: UpdateFullServiceUserProvider,
  useClass: UpdateUserFullService,
};
