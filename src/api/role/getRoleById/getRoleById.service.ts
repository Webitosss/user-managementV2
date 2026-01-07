import { Injectable, NotFoundException } from '@nestjs/common';
import { GetByIdServiceRoleProvider } from './getRoleById.provider';
import { RoleRepositoryProvider } from 'src/core/entities/role/role.repository.provider';

@Injectable()
export class GetRoleByIdService implements GetByIdServiceRoleProvider {
  constructor(private readonly roleRepository: RoleRepositoryProvider) {}

  async execute(id: string) {
    const role = await this.roleRepository.findById(id);

    if (!role) throw new NotFoundException(`Role with id ${id} not found`);

    return role;
  }
}
