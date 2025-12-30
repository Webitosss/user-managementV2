import { Role } from './role.interface';

export abstract class RoleRepositoryProvider {
  public abstract create(role: Partial<Role>): Promise<Role>;
  public abstract findAll(): Promise<Role[]>;
  public abstract findById(id: string): Promise<Role | null>;
  public abstract findByName(name: string): Promise<Role | null>;
  public abstract update(id: string, role: Partial<Role>): Promise<Role>;
  public abstract delete(id: string): Promise<void>;
}
