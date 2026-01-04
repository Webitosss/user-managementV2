import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepositoryProvider } from '../../../core/entities/user/user.repository.provider';
import { RoleRepositoryProvider } from '../../../core/entities/role/role.repository.provider';
import { AssignRoleServiceUserProvider } from './assignRole.provider';

@Injectable()
export class AssignRoleService implements AssignRoleServiceUserProvider {
  constructor(
    private readonly userRepository: UserRepositoryProvider,
    private readonly roleRepository: RoleRepositoryProvider,
  ) {}

  async execute(userId: string, roleId: string): Promise<void> {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }

    const role = await this.roleRepository.findById(roleId);
    if (!role) {
      throw new NotFoundException(`Role with id ${roleId} not found`);
    }

    const alreadyHasRole = user.roles?.some((r) => r.id === role.id);

    if (!alreadyHasRole) {
      user.roles = [role];
      await this.userRepository.save(user);
    }
  }
}
