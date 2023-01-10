export interface ICreateUserRequestDTO {
  name: string;
  email: string;
  password: string;
  unb_id: number;
  area: string;
  role: string;
  rg: number;
  cpf: number;
}