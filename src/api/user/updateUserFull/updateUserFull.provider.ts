import { User } from '../../../core/entities/user/user.interface';
import { UpdateUserFullDto } from './dtos/updateUserFull.dto';


export abstract class UpdateFullServiceUserProvider {
  public abstract execute(id: string, data: UpdateUserFullDto): Promise<User>;
}
 