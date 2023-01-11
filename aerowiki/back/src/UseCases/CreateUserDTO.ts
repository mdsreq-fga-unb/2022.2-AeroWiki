export interface ICreateUserRequestDTO {
  name: string;
  email: string;
  password: string;
  unb_id: string;
  area: string;
  role: string;
  telephone: string;
  birthdate: string;
  rg: string;
  cpf: string;
  active: boolean;
}