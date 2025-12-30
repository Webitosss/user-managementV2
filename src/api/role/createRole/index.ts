import { Provider } from "@nestjs/common";
import { CreateServiceRoleProvider } from "./createRole.provider";
import { CreateRoleService } from "./createRole.service";

export const CreateRoleProvider: Provider = {
    provide: CreateServiceRoleProvider,
    useClass: CreateRoleService,
}