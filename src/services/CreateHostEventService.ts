import { AppDataSource } from "../database";
import { HostEvent } from "../entities/HostEvent";

interface IHostEventRequest {
  name: string;
}

class CreateHostEventService {
  async execute({ name }: IHostEventRequest): Promise<HostEvent> {
    const repository = AppDataSource.getRepository(HostEvent);
    const hostEvent = repository.create({ hostEventName: name });

    await repository.save(hostEvent);

    return hostEvent;
  }
}

export { CreateHostEventService };
