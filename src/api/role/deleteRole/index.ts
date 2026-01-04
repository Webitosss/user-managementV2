import { Provider } from '@nestjs/common';
import { DeleteServiceRoleProvider } from './deleteRole.provider';
import { DeleteRoleService } from './deleteRole.service';

export const DeleteRoleProvider: Provider = {
  provide: DeleteServiceRoleProvider,
  useClass: DeleteRoleService,
};
