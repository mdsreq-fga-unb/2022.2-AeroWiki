import { v4 as uuid_v4 } from "uuid";

export class User {
   
  public readonly id: String;

  public name: string;
  public email: string;
  public password: string;
  public unb_id: string;
  public area: string;
  public role: string;
  public telephone: string;
  public birthdate: string;
  public rg: string;
  public cpf: string;
  public active: boolean;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid_v4();
    }
  }
}