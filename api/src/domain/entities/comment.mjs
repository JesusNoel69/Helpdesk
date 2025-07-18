// src/domain/entities/comment.mjs

export class Comment {
  constructor({ id, userId, ticketId, createdAt, updatedAt, valueComment }) {
    this.id = id;
    this.userId = userId;
    this.ticketId = ticketId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.valueComment = valueComment;
  }
}
