import { Request, Response } from "express";
import { ListAllTicketsService } from "../services/ListAllTicketsService";

class ListAllTicketsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const service = new ListAllTicketsService();

    const result = await service.execute();

    return res.json(result);
  }
}

export { ListAllTicketsController };
