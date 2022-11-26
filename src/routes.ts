import { Router } from "express";
import { CreateEventControler } from "./controllers/CreateEventController";
import { CreateHostEventController } from "./controllers/CreateHostEventController";

const routes = Router();

routes.post("/hostevent", new CreateHostEventController().handle);
routes.post("/event", new CreateEventControler().handle);

export { routes };
