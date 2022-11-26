import { Request, response, Response } from "express";
import { CreateEventService } from "../services/CreateEventService";

class CreateEventControler {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, hostevent_id } = req.body;

    const services = new CreateEventService();
    const result = await services.execute({ name, hostevent_id });

    return res.json(result);
  }
}

export { CreateEventControler };
