import { v4 as uuidV4 } from "uuid";
import { Event } from "./Event";

class HostEvent {
  id: string;
  events: Event[];
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { HostEvent };
