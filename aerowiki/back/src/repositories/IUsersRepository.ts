import { User } from "../entities/User";

export interface IUsersRepository {
  getMembers(): Promise<Object>
  findByEmail(email: string): Promise<User>
  findById(unb_id: string): Promise<User>
  saveUser(user: User): Promise<void>
  updateUser(name: string, email: string, telephone: string, unb_id: string, password: string): Promise<void>
  updateMember(area: string, role: string, email: string, active: boolean): Promise<void>
  deleteMember(email: string): Promise<void>
}