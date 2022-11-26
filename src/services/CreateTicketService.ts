import { AppDataSource } from "../database";
import { Ticket } from "../entities/Ticket";

interface ITicketRequest {
  event_id: string;
}

class CreateTicketService {
  async execute({ event_id }: ITicketRequest): Promise<Ticket> {
    const repository = AppDataSource.getRepository(Ticket);
    const ticket = repository.create({ event_id });

    await repository.save(ticket);

    return ticket;
  }
}

export { CreateTicketService };
