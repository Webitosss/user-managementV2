import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
} from 'typeorm';
import { Role as RoleInterface } from './role.interface';
import { UserEntity } from '../user/user.entity';

@Entity('roles')
export class RoleEntity implements RoleInterface {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description?: string;

  @ManyToMany(() => UserEntity, user => user.roles)
  users: UserEntity[];
}
