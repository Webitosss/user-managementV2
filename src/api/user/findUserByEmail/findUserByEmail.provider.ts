import { User } from '../../../core/entities/user/user.interface';

export abstract class FindUserByEmailProviderAbstract {
  public abstract execute(email: string): Promise<User>;
}
