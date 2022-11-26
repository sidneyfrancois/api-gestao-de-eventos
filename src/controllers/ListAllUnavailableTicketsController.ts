import { Request, Response } from "express";
import { ListUnavailableTicketsService } from "../services/ListAllUnavailableTicketsService";

class ListAllUnavailableTicketsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const service = new ListUnavailableTicketsService();

    const result = await service.execute();

    return res.json(result);
  }
}

export { ListAllUnavailableTicketsController };
