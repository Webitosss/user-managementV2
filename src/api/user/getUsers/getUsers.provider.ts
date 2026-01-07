import { User } from '../../../core/entities/user/user.interface';

export interface GetUsersFilters {
  status?: boolean;
  role?: string;
}

export abstract class GetUsersServiceUserProvider {
  public abstract execute(filters: GetUsersFilters): Promise<User[]>;
}
