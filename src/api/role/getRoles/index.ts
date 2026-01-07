import { Provider } from '@nestjs/common';
import { GetRolesServiceRoleProvider } from './getRoles.provider';
import { GetRolesService } from './getRoles.service';

export const GetRolesProvider: Provider = {
  provide: GetRolesServiceRoleProvider,
  useClass: GetRolesService,
};
