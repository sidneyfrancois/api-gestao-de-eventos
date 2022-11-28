import { Request, response, Response } from "express";
import { GetOneEventService } from "../services/GetOneEventService";

class GetOneEventController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { event_id } = req.query;

    const service = new GetOneEventService();
    const result = await service.execute(event_id);

    return res.json(result);
  }
}

export { GetOneEventController };
