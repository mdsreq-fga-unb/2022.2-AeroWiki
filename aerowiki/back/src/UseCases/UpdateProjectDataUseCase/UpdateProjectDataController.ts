import { Request, Response } from "express";
import { UpdateProjectDataUseCase } from "../UpdateProjectDataUseCase/UpdateProjectDataUseCase";

export class UpdateProjectDataController {
  constructor(
    private updateProjecDatatUseCase: UpdateProjectDataUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id,
      project } = request.body;

    try {
      await this.updateProjecDatatUseCase.execute({
        id,
        project
      });

      return response
        .status(201)
        .json({ message: "TEXTO ATUALIZADO" });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "ERRO NO SISTEMA D:",
      });
    }
  }
}
