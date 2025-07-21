export default class TicketRepositoy {
  async findAll() {
    throw new Error("findAll not implemented yet");
  }
  /**
   * Return a Ticket by id.
   * @param {number} id
   * @returns {Promise<import('../../domain/entities/ticket.mjs').Ticket>}
   */
  async findById(id) {
    throw new Error("findById not implemented yet");
  }
  /**
   * Delete a Ticket by id.
   * @param {number} id
   */
  async delete(id) {
    throw new Error("delete not implemented yet");
  }
  /**
   * Update or Create a Ticket
   * @param {import('../../domain/entities/ticket.mjs').Ticket} Ticket
   * @returns {Promise<import('../../domain/entities/ticket.mjs').Ticket>}
   */
  async save(Ticket) {
    throw new Error("save not implemented yet");
  }
}
