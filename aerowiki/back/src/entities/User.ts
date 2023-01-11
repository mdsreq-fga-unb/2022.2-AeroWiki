import { v4 as uuid_v4 } from "uuid";

export class User {
   
  public readonly id: String;

  public name: String;
  public email: String;
  public password: String;
  public unb_id: String;
  public area: String;
  public role: String;
  public telephone: String;
  public birthdate: String;
  public rg: String;
  public cpf: String;


  constructor(props: Omit<User, 'id'>, id?: String) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid_v4();
    }
  }
}