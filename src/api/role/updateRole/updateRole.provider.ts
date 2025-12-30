import { Role } from "src/core/entities/role/role.interface";
import { UpdateRoleDto } from "./dtos/updateRole.Dto";


export abstract class UpdateServiceRoleProvider {
    public abstract execute(id: string, data: UpdateRoleDto): Promise <Role>;
}

