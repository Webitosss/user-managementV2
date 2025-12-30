import { Provider } from "@nestjs/common";
import { AssignRoleServiceUserProvider } from "./assignRole.provider";
import { AssignRoleService } from "./assignRole.service";

export const AssignRoleProvider: Provider = {
    provide: AssignRoleServiceUserProvider,
    useClass: AssignRoleService,
}
