import { v4 as uuidV4 } from "uuid";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { HostEvent } from "./HostEvent";
import { Ticket } from "./Ticket";

@Entity("events")
class Event {
  @PrimaryColumn()
  id: string;

  @Column({ name: "name" })
  eventName: string;

  @ManyToOne(() => HostEvent)
  @JoinColumn({ name: "hostevent_id" })
  hostEvent: HostEvent;

  @Column({ name: "hostevent_id" })
  hostEvent_id: string;

  tickets: Ticket[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Event };
