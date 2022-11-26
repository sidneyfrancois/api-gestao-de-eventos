import { v4 as uuidV4 } from "uuid";
import { HostEvent } from "./HostEvent";
import { Ticket } from "./Ticket";

class Event {
  id: string;
  eventName: string;
  hostEvent: HostEvent;
  hostEvent_id: string;
  tickets: Ticket[];
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Event };
