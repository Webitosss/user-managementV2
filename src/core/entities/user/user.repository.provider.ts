import { UserEntity } from './user.entity';
import { User } from './user.interface';

export const USER_REPOSITORY = 'USER_REPOSITORY';

export abstract class UserRepositoryProvider {
  public abstract create(user: Partial<User>): Promise<User>;
  public abstract findAll(): Promise<User[]>;
  public abstract findById(id: string): Promise<User | null>;
  public abstract findByEmail(email: string): Promise<User | null>;
  public abstract findByFilters(filters: {
    status?: boolean;
    role?: string;
  }): Promise<User[]>;
  public abstract update(id: string, user: Partial<User>): Promise<User>;
  public abstract save(user: User): Promise<User>;
  public abstract delete(id: string): Promise<void>;
  public abstract findByRole(roleId: string): Promise<UserEntity[]>;
}
