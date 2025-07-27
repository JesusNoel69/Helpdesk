import Priority from "../../domain/value-objects/priority.mjs";
import StateType from "../../domain/value-objects/state.mjs";
import { TicketDTO } from "../dtos/ticketDTO.mjs";
import { Ticket } from "../../domain/entities/ticket.mjs";

//create ticket
export default async function createTicket(input, { ticketRepo }) {
  //build object
  /*input should be contains:  
    closedAt,
    details,
    id,
    timeStart,
    title */
  console.log("t input: ", input);
  const ticket = new Ticket({
    ...input,
    state: new StateType({ id: input.stateId, nameColor: input.stateColor }),
    priority: new Priority({
      id: input.priorityId,
      namePriority: input.priorityName,
    }),
  });
  //call the port
  const saved = await ticketRepo.save(ticket);
  console.log(saved);
  return new TicketDTO({
    id: saved.id,
    title: saved.title,
    state: { id: saved.state.id, color: saved.state.value },
    priority: { level: saved.priority.value },
    timeStart: saved.timeStart,
    details: saved.details,
    closedAt: saved.closedAt,
    createdAt: saved.createdAt,
    updatedAt: saved.updatedAt,
  });
}
