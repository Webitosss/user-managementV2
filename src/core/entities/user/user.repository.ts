import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserRepositoryProvider } from './user.repository.provider';

@Injectable()
export class UserRepository implements UserRepositoryProvider {

  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async create(user: Partial<UserEntity>): Promise<UserEntity> {
    const newUser = this.repository.create(user);
    return this.repository.save(newUser);
  }

  async findAll(): Promise<UserEntity[]> {
    return this.repository.find({ relations: ['roles'] });
  }

  async findById(id: string): Promise<UserEntity | null> {
    return this.repository.findOne({
      where: { id },
      relations: ['roles'],
    });
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.repository.findOne({ where: { email } });
  }

  async findByFilters({ status, role }: { status?: boolean; role?: string }) {

    const query = this.repository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'role');

    if (status !== undefined) {
      query.andWhere('user.isActive = :status', { status });
    }

    if (role) {
      query.andWhere('role.name = :role', { role });
    }

    return query.getMany();
  }

  async update(id: string, user: Partial<UserEntity>): Promise<UserEntity> {
    await this.repository.update(id, user);

    const updatedUser = await this.findById(id);

    if (!updatedUser)
      throw new Error('User not found');
    
    return updatedUser;
  }

  async save(user: UserEntity): Promise<UserEntity> {
    return this.repository.save(user);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findByRole(roleId: string): Promise<UserEntity[]> {
    return this.repository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'role')
      .where('role.id = :roleId', { roleId })
      .getMany();
  }

}
