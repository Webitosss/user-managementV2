import { User } from '../../../core/entities/user/user.interface';


export abstract class DeleteServiceUserProvider {
  public abstract execute(id: string): Promise<User>;
}
 