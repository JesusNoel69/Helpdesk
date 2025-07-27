import { TicketDTO } from "../dtos/ticketDTO.mjs";

// list all tickets
export default async function listTickets(_, { ticketRepo }) {
  //call the port
  const tickets = await ticketRepo.findAll();

  //map ticket in dto
  return tickets.map(
    (ticket) =>
      new TicketDTO({
        id: ticket.id,
        title: ticket.title,
        responsibleId: ticket.responsibleId,
        state: { id: ticket.state.id, color: ticket.state.value },
        priority: { level: ticket.priority.value },
        timeStart: ticket.timeStart,
        details: ticket.details,
        closedAt: ticket.closedAt,
      })
  );
}
