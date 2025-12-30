import { Injectable } from '@nestjs/common';
import { RoleRepositoryProvider } from 'src/core/entities/role/role.repository.provider';
import { GetRolesServiceRoleProvider } from './getRoles.provider';

@Injectable()
export class GetRolesService implements GetRolesServiceRoleProvider {

  constructor(
    private readonly roleRepository: RoleRepositoryProvider,
  ) {}

  async execute() {
    return this.roleRepository.findAll();
  }
}
