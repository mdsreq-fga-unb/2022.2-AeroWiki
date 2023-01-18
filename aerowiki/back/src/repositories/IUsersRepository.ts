import { User } from "../entities/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>
  saveUser(user: User): Promise<void>
  updateUser(name: string, email: string, telephone: string, unb_id: string): Promise<void>
  updateMember(area: string, role: string, email: string, active: boolean): Promise<void>
  deleteMember(email: string): Promise<void>
}