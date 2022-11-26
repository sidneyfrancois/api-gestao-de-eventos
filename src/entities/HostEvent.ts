import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Event } from "./Event";

@Entity("hostsevent")
class HostEvent {
  @PrimaryColumn()
  id: string;

  @OneToMany(() => Event, (event) => event.hostEvent)
  events: Event[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { HostEvent };
