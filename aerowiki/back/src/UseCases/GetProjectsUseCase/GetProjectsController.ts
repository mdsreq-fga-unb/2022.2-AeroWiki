import { Request, Response } from "express";
import { GetProjectsUseCase } from "./GetProjectsUseCase";

export class GetProjectsController {
  constructor(
    private getProjectsUseCase: GetProjectsUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const membersList = await this.getProjectsUseCase.execute()
      return response.status(200).json(membersList);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'ERRO NO SISTEMA D:'
      })
    }
  }
}