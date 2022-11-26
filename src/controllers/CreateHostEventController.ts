import { Request, Response } from "express";
import { CreateHostEventService } from "../services/CreateHostEventService";

class CreateHostEventController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const service = new CreateHostEventService();
    const result = await service.execute({ name });

    return res.json(result);
  }
}

export { CreateHostEventController };
