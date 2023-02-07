import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
  constructor(
    private LoginUseCase: LoginUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    try {
      const userData = await this.LoginUseCase.execute({
        email,
        password,
      })
      return response.status(200).json(userData);
    }
    catch (err) {
      return response.status(400).json({ message: err.message || 'ERRO NO SISTEMA' })
    }
  }
}