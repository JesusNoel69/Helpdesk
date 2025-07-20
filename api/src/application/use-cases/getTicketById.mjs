import { TicketDTO } from "../dtos/ticketDTO.mjs";

// list all tickets
export async function getTicket(id, { ticketRepo }) {
  //call the port
  const ticket = await ticketRepo.findById(id);
  if (!ticket) {
    throw new Error(`Ticket with id=${id} not fond`);
  }
  return new TicketDTO(ticket);
}
