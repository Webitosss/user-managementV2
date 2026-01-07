import { User } from '../../../core/entities/user/user.interface';
import { UpdateUserDto } from './dtos/updateUser.dto';

export abstract class UpdateServiceUserProvider {
  public abstract execute(id: string, data: UpdateUserDto): Promise<User>;
}
