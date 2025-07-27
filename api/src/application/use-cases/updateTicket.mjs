import Priority from "../../domain/value-objects/priority.mjs";
import StateType from "../../domain/value-objects/state.mjs";
import { TicketDTO } from "../dtos/ticketDTO.mjs";
import { Ticket } from "../../domain/entities/ticket.mjs";

//create ticket
export default async function updateTicket(input, { id }, { ticketRepo }) {
  console.log(input);
  console.log(id);

  //build object
  /*input should be contains:  
    closedAt,
    details,
    id,
    timeStart,
    title */
  const ticket = new Ticket({
    id: id,
    ...input,
    state: new StateType({ id: input.stateId, nameColor: input.stateColor }),
    priority: new Priority({
      id: input.priorityId,
      namePriority: input.priorityName,
    }),
  });
  console.log(ticket);
  //call the port
  const saved = await ticketRepo.save(ticket);
  console.log(saved);
  return new TicketDTO(saved);
}
