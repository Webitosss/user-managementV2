import { Provider } from '@nestjs/common';
import { GetByIdServiceUserProvider } from './getUserById.provider';
import { GetUserByIdService } from './getUserById.service';

export const GetUserByIdProvider: Provider = {
  provide: GetByIdServiceUserProvider,
  useClass: GetUserByIdService,
};
