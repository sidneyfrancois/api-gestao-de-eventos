import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Event } from "./Event";

@Entity("tickets")
class Ticket {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Event)
  @JoinColumn({ name: "event_id" })
  event: Event;

  @Column()
  event_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Ticket };
