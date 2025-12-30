import { CreateUser } from './dtos/createUser.interface';
import { User } from '../../../core/entities/user/user.interface';


export abstract class CreateServiceUserProvider {
  public abstract execute(data: CreateUser): Promise<User>;
}
