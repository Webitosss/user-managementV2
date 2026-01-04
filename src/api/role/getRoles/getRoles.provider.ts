import { Role } from 'src/core/entities/role/role.interface';

export abstract class GetRolesServiceRoleProvider {
  public abstract execute(): Promise<Role[]>;
}
