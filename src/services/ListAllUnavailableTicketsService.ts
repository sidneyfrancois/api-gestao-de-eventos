import { AppDataSource } from "../database";
import { Ticket } from "../entities/Ticket";

class ListUnavailableTicketsService {
  async execute(): Promise<Ticket[]> {
    const repository = AppDataSource.getRepository(Ticket);

    const allAvailableTickets = await repository.find({
      where: { isAvailable: false },
      relations: ["event", "event.hostEvent"],
    });

    return allAvailableTickets;
  }
}

export { ListUnavailableTicketsService };
