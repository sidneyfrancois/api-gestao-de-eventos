import { AppDataSource } from "../database";
import { Ticket } from "../entities/Ticket";

class ListAllTicketsService {
  async execute(): Promise<Ticket[]> {
    const repository = AppDataSource.getRepository(Ticket);

    const allTickets = await repository.find({
      relations: ["event", "event.hostEvent"],
    });

    return allTickets;
  }
}

export { ListAllTicketsService };
