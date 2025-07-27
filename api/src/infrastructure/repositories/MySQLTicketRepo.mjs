// src/infrastructure/persistence/MySqlTicketRepo.mjs
import TicketRepository from "../../application/ports/ticketRepository.mjs";
import pool from "../config/db.mjs";
import StateType from "../../domain/value-objects/state.mjs";
import Priority from "../../domain/value-objects/priority.mjs";
import { Ticket } from "../../domain/entities/ticket.mjs";
import { toMySQLDateTime } from "../helpers/helpers.mjs";
export class MySqlTicketRepo extends TicketRepository {
  async findAll() {
    const [rows] = await pool.query(`
      SELECT
        t.Id            AS ticketId,
        t.ResponsibleId,
        t.StateId,
        t.PriorityId,
        t.CreatedAt,
        t.UpdatedAt,
        t.Title,
        t.TimeStart,
        t.PromiseEnd,
        t.ClosedAt,
        t.Details,
        st.NameColor    AS stateColor,
        pr.NamePriority AS namePriority
      FROM Ticket t
      JOIN StateType st ON t.StateId    = st.Id
      JOIN Priority  pr ON t.PriorityId = pr.Id
    `);

    return rows.map(
      (row) =>
        new Ticket({
          id: row.ticketId,
          responsibleId: row.ResponsibleId,
          state: new StateType({ id: row.StateId, nameColor: row.stateColor }),
          priority: new Priority({
            id: row.PriorityId,
            namePriority: row.namePriority,
          }),
          createdAt: row.CreatedAt,
          updatedAt: row.UpdatedAt,
          title: row.Title,
          timeStart: row.TimeStart,
          promiseEnd: row.PromiseEnd,
          closedAt: row.ClosedAt,
          details: row.Details,
        })
    );
  }

  async findById(id) {
    const sql = `
      SELECT
        t.Id            AS ticketId,
        t.ResponsibleId,
        t.StateId,
        t.PriorityId,
        t.CreatedAt,
        t.UpdatedAt,
        t.Title,
        t.TimeStart,
        t.PromiseEnd,
        t.ClosedAt,
        t.Details,
        st.NameColor    AS stateColor,
        pr.NamePriority AS namePriority
      FROM Ticket t
      JOIN StateType st ON t.StateId    = st.Id
      JOIN Priority  pr ON t.PriorityId = pr.Id
      WHERE t.Id = ?
      LIMIT 1
    `;
    const params = [id.id];

    //query returns [rows, fields]
    const [rows] = await pool.query(sql, params);

    if (rows.length === 0) return null;
    const row = rows[0];
    return new Ticket({
      id: row.ticketId,
      responsibleId: row.ResponsibleId,
      state: new StateType({ id: row.StateId, nameColor: row.stateColor }),
      priority: new Priority({
        id: row.PriorityId,
        namePriority: row.namePriority,
      }),
      createdAt: row.CreatedAt,
      updatedAt: row.UpdatedAt,
      title: row.Title,
      timeStart: row.TimeStart,
      promiseEnd: row.PromiseEnd,
      closedAt: row.ClosedAt,
      details: row.Details,
    });
  }

  async delete(id) {
    const [result] = await pool.query(
      `
      DELETE FROM Ticket t
      WHERE t.Id = ?
      LIMIT 1
    `,
      [id.id]
    );
    // result.affectedRows return how much lines were delete
    return result.affectedRows;
  }
  async save(ticket) {
    console.log("t t ticket ", ticket);

    const {
      id,
      responsibleId,
      state,
      priority,
      createdAt,
      updatedAt,
      title,
      timeStart,
      promiseEnd,
      closedAt,
      details,
    } = ticket;

    const stateId = state?.id ?? null;
    const priorityId = priority?.id ?? null;

    const now = new Date();
    const created = createdAt ?? now;
    const updated = updatedAt ?? now;
    const insertId = id ?? null;

    const [result] = await pool.execute(
      `
    INSERT INTO Ticket
      (Id, ResponsibleId, StateId, PriorityId, CreatedAt, UpdatedAt, Title, TimeStart, PromiseEnd, ClosedAt, Details)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      ResponsibleId = VALUES(ResponsibleId),
      StateId       = VALUES(StateId),
      PriorityId    = VALUES(PriorityId),
      UpdatedAt     = VALUES(UpdatedAt),
      Title         = VALUES(Title),
      TimeStart     = VALUES(TimeStart),
      PromiseEnd    = VALUES(PromiseEnd),
      ClosedAt      = VALUES(ClosedAt),
      Details       = VALUES(Details)
    `,
      [
        insertId,
        responsibleId,
        stateId,
        priorityId,
        toMySQLDateTime(created),
        toMySQLDateTime(updated),
        title,
        toMySQLDateTime(timeStart),
        promiseEnd ? toMySQLDateTime(promiseEnd) : null,
        closedAt ? toMySQLDateTime(closedAt) : null,
        details,
      ]
    );

    const usedId = id ?? result?.insertId;

    if (!usedId) {
      throw new Error("Not found Id after upsert");
    }

    const [rows] = await pool.query(
      `
    SELECT
      t.Id            AS ticketId,
      t.ResponsibleId,
      t.StateId,
      t.PriorityId,
      t.CreatedAt,
      t.UpdatedAt,
      t.Title,
      t.TimeStart,
      t.PromiseEnd,
      t.ClosedAt,
      t.Details,
      st.NameColor    AS stateColor,
      pr.NamePriority AS namePriority
    FROM Ticket t
    JOIN StateType st ON t.StateId = st.Id
    JOIN Priority  pr ON t.PriorityId = pr.Id
    WHERE t.Id = ?
    LIMIT 1
    `,
      [usedId]
    );

    if (rows.length === 0) {
      throw new Error(`Ticket with id=${usedId} not found after upsert`);
    }

    const row = rows[0];
    return new Ticket({
      id: row.ticketId,
      responsibleId: row.ResponsibleId,
      state: new StateType({ id: row.StateId, nameColor: row.stateColor }),
      priority: new Priority({
        id: row.PriorityId,
        namePriority: row.namePriority,
      }),
      createdAt: row.CreatedAt,
      updatedAt: row.UpdatedAt,
      title: row.Title,
      timeStart: row.TimeStart,
      promiseEnd: row.PromiseEnd,
      closedAt: row.ClosedAt,
      details: row.Details,
    });
  }
}
