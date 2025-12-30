import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleEntity } from './role.entity';
import { RoleRepositoryProvider } from './role.repository.provider';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class RoleRepository implements RoleRepositoryProvider {

  constructor(
    @InjectRepository(RoleEntity)
    private readonly repository: Repository<RoleEntity>,
  ) {}

  async create(role: Partial<RoleEntity>): Promise<RoleEntity> {
    const newRole = this.repository.create(role);
    return this.repository.save(newRole);
  }

  async findAll(): Promise<RoleEntity[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<RoleEntity | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findByName(name: string): Promise<RoleEntity | null> {
    return this.repository.findOne({ where: { name } });
  }

  async update(id: string, role: Partial<RoleEntity>): Promise<RoleEntity> {
    await this.repository.update(id, role);
  
    const updatedRole = await this.findById(id);
  
    if (!updatedRole)
      throw new Error('Role not found');
      
    return updatedRole;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

}
