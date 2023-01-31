import { Request, Response } from "express";
import { DeleteMemberUseCase } from "./DeleteMemberUseCase";

export class DeleteMemberController {
  constructor(
    private deleteMemberUseCase: DeleteMemberUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body
    console.log({email})
    try {
      await this.deleteMemberUseCase.execute({
        email
      }
    )
      return response.status(201).json({message: "MEMBRO EXCLUIDO"});  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'ERRO NO SISTEMA D:'
      })
    }
  }
}