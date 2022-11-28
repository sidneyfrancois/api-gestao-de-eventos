import { Router } from "express";
import { BuyTicketController } from "./controllers/BuyTicketController";
import { CreateEventControler } from "./controllers/CreateEventController";
import { CreateHostEventController } from "./controllers/CreateHostEventController";
import { CreateTicketController } from "./controllers/CreateTicketController";
import { GetOneEventController } from "./controllers/GetOneEventController";
import { ListAllAvailableTicketsController } from "./controllers/ListAllAvailableTicketsController";
import { ListAllTicketsController } from "./controllers/ListAllTicketsController";
import { ListAllUnavailableTicketsController } from "./controllers/ListAllUnavailableTicketsController";

const routes = Router();

routes.post("/hostevent", new CreateHostEventController().handle);
routes.post("/event", new CreateEventControler().handle);
routes.post("/ticket", new CreateTicketController().handle);
routes.get("/ticket", new ListAllTicketsController().handle);
routes.get("/availabletickets", new ListAllAvailableTicketsController().handle);
routes.get(
  "/unavailabletickets",
  new ListAllUnavailableTicketsController().handle
);
routes.post("/buyticket", new BuyTicketController().handle);
routes.get("/event", new GetOneEventController().handle);

export { routes };
