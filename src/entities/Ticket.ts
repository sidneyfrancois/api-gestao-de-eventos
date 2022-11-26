import { v4 as uuidV4 } from "uuid";
import { Event } from "./Event";

class Ticket {
  id: string;
  event: Event;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Ticket };
