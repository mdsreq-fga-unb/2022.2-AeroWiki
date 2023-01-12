import { User } from "../../entities/User";
import { CreateUserUseCase } from "../CreateUserUseCase/CreateUserUseCase";
import { mock, mockReset, MockProxy } from 'jest-mock-extended';
import { IUsersRepository } from "../../repositories/IUsersRepository";

const mockRequest: User = {
  id: "12817918",
  name: "ola",
  email: "ola@gmail",
  password: "12345",
  unb_id: "12890",
  area: "sla",
  role: "muito",
  telephone: "890890",
  birthdate: "1i7832723",
  rg: "2183789",
  cpf: "58975895",
  active: true,
};


describe("CreateUserCase", () => {
  let sut:CreateUserUseCase;
  let mockUserRepository: MockProxy<IUsersRepository>
  let mockUserResponse: MockProxy<User>

  beforeEach(() => {
    mockUserRepository = mock();
    mockReset(mockUserRepository);

    sut = new CreateUserUseCase(mockUserRepository)
  })
  test("should create user", async () => {
    const user = new User(mockRequest)
    mockUserRepository.findByEmail.mockResolvedValue(mockUserResponse)
    
    const response = await sut.execute(user);
    
    expect(response).toBeTruthy
    
    expect(mockUserRepository.findByEmail).toBeCalledTimes(1)
  });
});
