import Priority from "../../domain/value-objects/priority.mjs";
import StateType from "../../domain/value-objects/state.mjs";
import { TicketDTO } from "../dtos/ticketDTO.mjs";

//create ticket
export async function createTicket(input, { ticketRepo }) {
  //build object
  /*input should be contains:  
    closedAt,
    details,
    id,
    timeStart,
    title */
  const ticket = new TicketDTO({
    ...input,
    state: new StateType({ id: input.stateId, nameColor: input.stateColor }),
    priority: new Priority({
      id: input.priorityId,
      namePriority: input.namePriority,
    }),
  });
  //call the port
  const saved = await ticketRepo.save(ticket);
  return new TicketDTO(saved);
}
