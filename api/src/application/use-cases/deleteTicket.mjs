//delete ticket
export async function createTicket({ id }, { ticketRepo }) {
  const affected = await ticketRepo.delete(id);
  if (affected === 0) throw new Error(`Ticket ${id} not found`);
  return affected;
}
