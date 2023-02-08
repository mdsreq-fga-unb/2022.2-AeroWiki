import { Request, Response } from "express";
import { UpdateProjectUseCase } from "../UpdateProjectUseCase/UpdateProjectUseCase";

export class UpdateProjectController {
  constructor(
    private updateProjectUseCase: UpdateProjectUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id,
      name,
      isfixed,
      editable,
      ongoing,
      active } = request.body;

    try {
      await this.updateProjectUseCase.execute({
        id,
        name,
        isfixed,
        editable,
        ongoing,
        active
      });

      return response
        .status(201)
        .json({ message: "PROJETO ATUALIZADO" });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "ERRO NO SISTEMA D:",
      });
    }
  }
}
