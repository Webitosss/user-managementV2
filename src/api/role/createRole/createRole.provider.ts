import { Role } from '../../../core/entities/role/role.interface';
import { CreateRole } from './dtos/createRole.interface';


export abstract class CreateServiceRoleProvider {
  public abstract execute(data: CreateRole): Promise<Role>;
}
 