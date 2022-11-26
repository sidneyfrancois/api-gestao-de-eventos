import { AppDataSource } from "../database";
import { Event } from "../entities/Event";

interface IEventRequest {
  name: string;
  hostevent_id: string;
}

class CreateEventService {
  async execute({ name, hostevent_id }: IEventRequest): Promise<Event> {
    const repository = AppDataSource.getRepository(Event);
    const event = repository.create({
      eventName: name,
      hostEvent_id: hostevent_id,
    });

    await repository.save(event);

    return event;
  }
}

export { CreateEventService };
