import { Module } from "@nestjs/common";
import { RoleModule } from "src/core/entities/role/role.module";
import { GetRolesProvider } from ".";
import { GetRolesController } from "./getRoles.controller";

@Module({
    imports: [RoleModule],
    controllers: [GetRolesController],
    providers: [
        GetRolesProvider,
    ],
    exports: [
        GetRolesProvider,
    ],
})
export class GetRolesModule {}
