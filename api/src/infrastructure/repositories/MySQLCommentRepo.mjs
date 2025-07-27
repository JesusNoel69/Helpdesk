// src/infrastructure/persistence/MySqlCommentRepo.mjs
import { CommentRepository } from "../../application/ports/commentRepository.mjs";
import { pool } from "../config/db.mjs";
import { Comment } from "../../domain/entities/comment.mjs";
import { toMySQLDateTime } from "../helpers/helpers.mjs";
export class MySqlCommentRepo extends CommentRepository {
  async findAll() {
    const [rows] = await pool.query(`
      SELECT
        c.Id             AS commentId,
        c.UserId,
        c.TicketId,
        c.CreatedAt,
        c.UpdatedAt,
        c.ValueComment,
        u.NameUser       AS nameUser,
        t.Title          AS ticket
      FROM Comment c
      JOIN User u   ON c.UserId   = u.Id
      JOIN Ticket t ON c.TicketId = t.Id
    `);

    return rows.map(
      (row) =>
        new Comment({
          id: row.commentId,
          userId: row.UserId,
          ticketId: row.TicketId,
          createdAt: row.CreatedAt,
          updatedAt: row.UpdatedAt,
          valueComment: row.ValueComment,
        })
    );
  }

  async findById(id) {
    const [rows] = await pool.query(
      `
      SELECT
        c.Id             AS commentId,
        c.UserId,
        c.TicketId,
        c.CreatedAt,
        c.UpdatedAt,
        c.ValueComment,
        u.NameUser       AS nameUser,
        t.Title          AS ticket
      FROM Comment c
      JOIN User u   ON c.UserId   = u.Id
      JOIN Ticket t ON c.TicketId = t.Id
      WHERE c.Id = ?
      LIMIT 1
    `,
      [id.id]
    );

    if (rows.length === 0) return null;
    const row = rows[0];
    return new Comment({
      id: row.commentId,
      userId: row.UserId,
      ticketId: row.TicketId,
      createdAt: row.CreatedAt,
      updatedAt: row.UpdatedAt,
      valueComment: row.ValueComment,
    });
  }

  async delete(id) {
    // Return afected rows by delete
    const [result] = await pool.query(
      `
      DELETE FROM Comment c
      WHERE c.Id = ?
      LIMIT 1
    `,
      [id.id]
    );
    return result.affectedRows;
  }

  async save(comment) {
    const { id, userId, ticketId, createdAt, updatedAt, valueComment } =
      comment;

    const insertId = id && id > 0 ? id : null;

    await pool.execute(
      `
      INSERT INTO Comment
        (Id, UserId, TicketId, CreatedAt, UpdatedAt, ValueComment)
      VALUES (?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        UserId       = VALUES(UserId),
        TicketId     = VALUES(TicketId),
        UpdatedAt    = VALUES(UpdatedAt),
        ValueComment = VALUES(ValueComment)
      `,
      [
        insertId,
        userId,
        ticketId,
        toMySQLDateTime(createdAt),
        toMySQLDateTime(updatedAt),
        valueComment,
      ]
    );

    const [rows] = await pool.query(
      `
      SELECT *
      FROM Comment
      WHERE UserId = ? AND TicketId = ?
      ORDER BY CreatedAt DESC
      LIMIT 1
      `,
      [userId, ticketId]
    );

    if (rows.length === 0) {
      return null;
    }

    const row = rows[0];
    return new Comment({
      id: row.Id,
      userId: row.UserId,
      ticketId: row.TicketId,
      createdAt: row.CreatedAt,
      updatedAt: row.UpdatedAt,
      valueComment: row.ValueComment,
    });
  }
}
