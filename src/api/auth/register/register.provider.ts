import { User } from 'src/core/entities/user/user.interface';
import { RegisterDto } from './dtos/register.dto';

export abstract class RegisterUserProvider {
  abstract execute(data: RegisterDto): Promise<User>;
}
