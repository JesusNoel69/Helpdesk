//delete ticket
export default async function deleteTicket(id, { ticketRepo }) {
  const affected = await ticketRepo.delete(id);
  if (affected === 0) throw new Error(`Ticket ${id} not found`);
  return affected;
}
