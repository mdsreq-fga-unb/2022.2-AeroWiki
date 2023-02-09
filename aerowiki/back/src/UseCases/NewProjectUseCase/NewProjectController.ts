import { Request, Response } from "express";
import { NewProjectUseCase } from "./NewProjectUseCase";

export class NewProjectController {
  constructor(
    private newProjectUseCase: NewProjectUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, area, subarea, editable } = request.body;

    try {
      await this.newProjectUseCase.execute({
        name: name,
        area: area,
        subarea: subarea,
        isfixed: false,
        editable: editable,
        ongoing: true,
        active: true,
        project: {'blocks': []}
      })

      return response.status(201).json({ message: "NOVO PROJETO CRIADO" });;
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'ERRO NO SISTEMA D:'
      })
    }
  }
}