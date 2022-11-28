import { Request, Response } from "express";
import { BuyTicketService } from "../services/BuyTicketService";

class BuyTicketController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { ticket_id } = req.body;

    const service = new BuyTicketService();
    const result = await service.execute({ ticket_id });

    return res.json(result);
  }
}

export { BuyTicketController };
