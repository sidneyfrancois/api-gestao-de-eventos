import { Router } from "express";
import { CreateHostEventController } from "./controllers/CreateHostEventController";

const routes = Router();

routes.post("/hostevent", new CreateHostEventController().handle);

export { routes };
