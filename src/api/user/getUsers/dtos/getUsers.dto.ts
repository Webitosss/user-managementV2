import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { IGetUsersQuery } from './getUsers.interface';

export class GetUsersQueryDto implements IGetUsersQuery {
  @IsOptional()
  @IsBoolean({ message: 'status must be true or false' })
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  status?: boolean;

  @IsOptional()
  @IsString()
  role?: string;
}
