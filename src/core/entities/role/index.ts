import { Provider } from "@nestjs/common";
import { RoleRepository } from "./role.repository";
import { RoleRepositoryProvider } from "./role.repository.provider";

export const RoleEntityProvider: Provider = {
    provide: RoleRepositoryProvider,
    useClass: RoleRepository,
}