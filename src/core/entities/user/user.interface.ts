import { Role } from "../role/role.interface";

export interface User {
  roles: Array<Role>;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  password: string;
}

