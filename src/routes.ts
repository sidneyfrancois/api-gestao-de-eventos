import { Router } from "express";
import { CreateEventControler } from "./controllers/CreateEventController";
import { CreateHostEventController } from "./controllers/CreateHostEventController";
import { CreateTicketController } from "./controllers/CreateTicketController";
import { ListAllTicketsController } from "./controllers/ListAllTicketsController";

const routes = Router();

routes.post("/hostevent", new CreateHostEventController().handle);
routes.post("/event", new CreateEventControler().handle);
routes.post("/ticket", new CreateTicketController().handle);
routes.get("/ticket", new ListAllTicketsController().handle);

export { routes };
