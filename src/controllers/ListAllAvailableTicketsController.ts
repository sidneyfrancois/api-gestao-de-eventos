import { Request, Response } from "express";
import { ListAllAvailableTicketsService } from "../services/ListAllAvailableTicketsService";

class ListAllAvailableTicketsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const service = new ListAllAvailableTicketsService();

    const result = await service.execute();

    return res.json(result);
  }
}

export { ListAllAvailableTicketsController };
