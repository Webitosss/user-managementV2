import { Role } from 'src/core/entities/role/role.interface';

export const GET_ROLE_BY_ID_PROVIDER = 'GET_ROLE_BY_ID_PROVIDER';

export abstract class GetByIdServiceRoleProvider {
  public abstract execute(id: string): Promise<Role>;
}
