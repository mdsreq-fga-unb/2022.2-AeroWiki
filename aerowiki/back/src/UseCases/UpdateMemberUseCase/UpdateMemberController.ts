import { Request, Response } from "express";
import { UpdateMemberUseCase } from "../UpdateMemberUseCase/UpdateMemberUseCase";

export class UpdateMemberController {
  constructor(
    private updateMemberUseCase: UpdateMemberUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { area, email, role } = request.body;

    try {
      await this.updateMemberUseCase.execute({
        area,
        role,
        email,
      });

      return response
        .status(201)
        .json({ message: "Membro ATUALIZADO" });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error ao createUser.",
      });
    }
  }
}
