import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateServiceRoleProvider } from './updateRole.provider';
import { RoleRepositoryProvider } from 'src/core/entities/role/role.repository.provider';
import { UpdateRoleDto } from './dtos/updateRole.Dto';

@Injectable()
export class UpdateRoleService implements UpdateServiceRoleProvider {
  
  constructor(
    private readonly roleRepository: RoleRepositoryProvider,
  ) {}

  async execute(id: string, data: UpdateRoleDto) {
    const role = await this.roleRepository.findById(id);

    if (!role) 
      throw new NotFoundException(`Role with id ${id} not found`);

    return this.roleRepository.update(id, data);
  }
}
 