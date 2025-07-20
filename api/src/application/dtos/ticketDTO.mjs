export class TicketDTO {
  constructor({ id, title, state, priority, timeStart, details, closedAt }) {
    this.id = id;
    this.title = title;
    this.state = state; // { id, color }
    this.priority = priority; // { level }
    this.timeStart = timeStart;
    this.details = details;
    this.closedAt = closedAt;
  }
}
