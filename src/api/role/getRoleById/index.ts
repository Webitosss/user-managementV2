import { Provider } from '@nestjs/common';
import { GetByIdServiceRoleProvider } from './getRoleById.provider';
import { GetRoleByIdService } from './getRoleById.service';

export const GetRoleByIdProvider: Provider = {
  provide: GetByIdServiceRoleProvider,
  useClass: GetRoleByIdService,
};
