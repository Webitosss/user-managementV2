import { User } from '../../../core/entities/user/user.interface';


export abstract class GetByIdServiceUserProvider {
  public abstract execute(id: string): Promise<User>;
}
 