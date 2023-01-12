import { IUsersRepository } from "../../repositories/IUsersRepository";
import { mock, mockReset, MockProxy } from 'jest-mock-extended';
import {UpdateMemberUseCase} from "../UpdateMemberUseCase/UpdateMemberUseCase"
import { IUpdateMemberRequest } from "./UpdateMemberDTO";
const mockRequest: IUpdateMemberRequest = {
  area: 'nome',
  email: 'email',
  role: 'presidente'
}

describe('UpdateMemberUseCase', () =>{
  let sut: UpdateMemberUseCase;
  let mockUserRepository: MockProxy<IUsersRepository>

  beforeEach(() => {
    mockUserRepository = mock();
    mockReset(mockUserRepository);

    sut = new UpdateMemberUseCase(mockUserRepository)
  })

  test('should update a user field', async () => {
    const response = await sut.execute(mockRequest)
    expect(response).toBeTruthy
  })

})