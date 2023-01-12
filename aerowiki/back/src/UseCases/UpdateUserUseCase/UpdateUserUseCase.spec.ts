import { IUsersRepository } from "../../repositories/IUsersRepository";
import { mock, mockReset, MockProxy } from 'jest-mock-extended';
import {UpdateUserUseCase} from "../UpdateUserUseCase/UpdateUserUseCase"
import { IUpdateUserRequest } from "./UpdateUserUseCaseDTO";
const mockRequest: IUpdateUserRequest = {
  name: 'nome',
  email: 'email',
  telephone: '988098',
  unb_id: '190087439'
}

describe('UpdateUserUseCase', () =>{
  let sut: UpdateUserUseCase;
  let mockUserRepository: MockProxy<IUsersRepository>

  beforeEach(() => {
    mockUserRepository = mock();
    mockReset(mockUserRepository);

    sut = new UpdateUserUseCase(mockUserRepository)
  })

  test('should update a user field', async () => {
    const response = await sut.execute(mockRequest)
    expect(response).toBeTruthy
  })

})