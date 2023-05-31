import {Roles} from "./roles";

export class User {
  id: number;
  userName: string;
  lastName: string;
  email: string;
  password: string;
  token: string;
  role: Roles ;
}
