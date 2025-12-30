
export abstract class AssignRoleServiceUserProvider {
    public abstract execute(userId: string, roleId: string): Promise<void>;
}
