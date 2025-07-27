export class CommentDTO {
  constructor({ id, ticketId, valueComment }) {
    this.id = id;
    this.ticketId = ticketId;
    this.valueComment = valueComment;
  }
}
