// src/domain/entities/ticket.mjs

export class Ticket {
  constructor({
    id,
    responsibleId,
    state, // VO StateType
    priority, // VO Priority
    createdAt,
    updatedAt,
    title,
    timeStart,
    promiseEnd,
    closedAt,
    details,
  }) {
    this.id = id;
    this.responsibleId = responsibleId;
    this.state = state;
    this.priority = priority;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.title = title;
    this.timeStart = timeStart;
    this.promiseEnd = promiseEnd;
    this.closedAt = closedAt;
    this.details = details;
  }

  isClosed() {
    return this.closedAt !== null;
  }

  getDurationInHours() {
    if (!this.timeStart || !this.promiseEnd) return null;
    return (this.promiseEnd - this.timeStart) / (1000 * 60 * 60);
  }
}
