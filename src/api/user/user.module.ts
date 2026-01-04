import { Module } from '@nestjs/common';
import { AssignRoleModule } from './assignRole/assignRole.module';
import { CreateUserModule } from './createUser/createUser.module';
import { DeleteUserModule } from './deleteUser/deleteUser.module';
import { FindUserByEmailModule } from './findUserByEmail/findUserByEmail.module';
import { GetUserByIdModule } from './getUserById/getUserById.module';
import { GetUsersModule } from './getUsers/getUsers.module';
import { UpdateUserModule } from './updateUser/updateUser.module';
import { UpdateUserFullModule } from './updateUserFull/updateUserFull.module';

@Module({
  imports: [
    AssignRoleModule,
    CreateUserModule,
    DeleteUserModule,
    FindUserByEmailModule,
    GetUserByIdModule,
    GetUsersModule,
    UpdateUserModule,
    UpdateUserFullModule,
  ],
  exports: [
    AssignRoleModule,
    CreateUserModule,
    DeleteUserModule,
    FindUserByEmailModule,
    GetUserByIdModule,
    GetUsersModule,
    UpdateUserModule,
    UpdateUserFullModule,
  ],
})
export class UserModule {}
