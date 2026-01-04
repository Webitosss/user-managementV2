export const ASSIGN_ROLE_PROVIDER = 'ASSIGN_ROLE_PROVIDER';

export interface AssignRoleProvider {
  execute(userId: string, roleId: string): Promise<void>;
}
