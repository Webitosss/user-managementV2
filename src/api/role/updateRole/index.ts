import { Provider } from '@nestjs/common';
import { UpdateServiceRoleProvider } from './updateRole.provider';
import { UpdateRoleService } from './updateRole.service';

export const UpdateRoleProvider: Provider = {
  provide: UpdateServiceRoleProvider,
  useClass: UpdateRoleService,
};
