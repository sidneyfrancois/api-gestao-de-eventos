import { AppDataSource } from "../database";
import { Ticket } from "../entities/Ticket";

interface ITicketRequest {
  event_id: string;
  isAvailable: boolean;
}

class CreateTicketService {
  async execute({ event_id, isAvailable }: ITicketRequest): Promise<Ticket> {
    const repository = AppDataSource.getRepository(Ticket);
    const ticket = repository.create({ event_id, isAvailable });

    await repository.save(ticket);

    return ticket;
  }
}

export { CreateTicketService };
