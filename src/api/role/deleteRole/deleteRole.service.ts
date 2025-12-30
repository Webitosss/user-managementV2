import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DeleteServiceRoleProvider } from './deleteRole.provider';
import { RoleRepositoryProvider } from 'src/core/entities/role/role.repository.provider';
import { UserRepositoryProvider } from 'src/core/entities/user/user.repository.provider';

@Injectable()
export class DeleteRoleService implements DeleteServiceRoleProvider {

  constructor(
    private readonly roleRepository: RoleRepositoryProvider,
    private readonly userRepository: UserRepositoryProvider,
  ) {}

  async execute(id: string, force: boolean): Promise<string> {

    const role = await this.roleRepository.findById(id);

    if (!role) {
      throw new NotFoundException(`Role with id ${id} not found`);
    }

    if (force === false) {
      throw new BadRequestException(
        'Cannot delete role without force=true'
      );
    }

    // Obtener usuarios con ese rol
    const usersWithRole = await this.userRepository.findByRole(id);

    // Eliminar usuarios
    for (const user of usersWithRole) {
      await this.userRepository.delete(user.id);
    }

    // Eliminar rol
    await this.roleRepository.delete(id);

    return 'Deleted Role and Users';

  }

}
