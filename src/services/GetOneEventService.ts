import { AppDataSource } from "../database";
import { Event } from "../entities/Event";
import { AppError } from "../error/AppError";

class GetOneEventService {
  async execute(event_id): Promise<Event> {
    const repository = AppDataSource.getRepository(Event);

    try {
      const event = await repository.findOne({
        where: { id: event_id },
        relations: { tickets: true },
      });
      return event;
    } catch (err) {
      throw new AppError("Event specified does not exist: " + err);
    }
  }
}

export { GetOneEventService };
