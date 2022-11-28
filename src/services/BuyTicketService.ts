import { AppDataSource } from "../database";
import { Ticket } from "../entities/Ticket";
import { AppError } from "../error/AppError";
import "express-async-errors";

interface IBuyTicketRequest {
  ticket_id: string;
}

class BuyTicketService {
  async execute({ ticket_id }: IBuyTicketRequest): Promise<Ticket> {
    const repository = AppDataSource.getRepository(Ticket);

    const requestedTicket = await repository.findOneBy({
      id: ticket_id,
    });

    if (!requestedTicket.isAvailable) {
      throw new AppError("Ticket is not available.");
    }

    requestedTicket.isAvailable = false;

    await repository.save(requestedTicket);

    return requestedTicket;
  }
}

export { BuyTicketService };
