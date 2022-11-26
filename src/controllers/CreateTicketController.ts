import { Request, Response } from "express";
import { CreateTicketService } from "../services/CreateTicketService";

class CreateTicketController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { event_id } = req.body;

    const service = new CreateTicketService();
    const result = await service.execute({ event_id });

    return res.json(result);
  }
}

export { CreateTicketController };
