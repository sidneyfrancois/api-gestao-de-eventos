import { AppDataSource } from "../database";
import { Ticket } from "../entities/Ticket";

class ListAllAvailableTicketsService {
  async execute(): Promise<Ticket[]> {
    const repository = AppDataSource.getRepository(Ticket);

    const allAvailableTickets = await repository.find({
      where: { isAvailable: true },
      relations: ["event", "event.hostEvent"],
    });

    return allAvailableTickets;
  }
}

export { ListAllAvailableTicketsService };
