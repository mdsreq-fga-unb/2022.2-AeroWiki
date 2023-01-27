import { Request, Response } from "express";
import { DeleteProjectUseCase } from "./DeleteProjectUseCase";

export class DeleteProjectController {
  constructor(
    private deleteProjectUseCase: DeleteProjectUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body
    // console.log({id})
    try {
      await this.deleteProjectUseCase.execute({
        id
      }
      )
      return response.status(201).json({ message: "PROJETO EXCLUIDO" });
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'ERRO NO SISTEMA D:'
      })
    }
  }
}