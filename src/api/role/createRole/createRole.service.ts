import { Injectable, ConflictException } from '@nestjs/common';
import { CreateServiceRoleProvider } from './createRole.provider';
import { RoleRepositoryProvider } from '../../../core/entities/role/role.repository.provider';
import { CreateRole } from './dtos/createRole.interface';

@Injectable()
export class CreateRoleService implements CreateServiceRoleProvider {
  constructor(private readonly roleRepository: RoleRepositoryProvider) {}

  async execute(data: CreateRole) {
    const existingRole = await this.roleRepository.findByName(data.name);

    if (existingRole) throw new ConflictException('Role name already exists');

    return this.roleRepository.create(data);
  }
}
