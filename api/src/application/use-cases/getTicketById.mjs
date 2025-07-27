import { TicketDTO } from "../dtos/ticketDTO.mjs";

// list all tickets
export default async function getTicket(id, { ticketRepo }) {
  //call the port
  const ticket = await ticketRepo.findById(id);
  if (!ticket) {
    throw new Error(`Ticket with id=${id} not found`);
  }
  return new TicketDTO({
    id: ticket.id,
    title: ticket.title,
    state: { id: ticket.state.id, color: ticket.state.value },
    priority: { level: ticket.priority.value },
    timeStart: ticket.timeStart,
    details: ticket.details,
    closedAt: ticket.closedAt,
  });
}
