export abstract class DeleteServiceRoleProvider {
  public abstract execute(id: string, force: boolean): Promise<string>;
}
