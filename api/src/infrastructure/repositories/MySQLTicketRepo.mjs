// src/infrastructure/persistence/MySqlTicketRepo.mjs
import TicketRepository from "../../application/ports/ticketRepository.mjs";
import pool from "../config/db.mjs";
import StateType from "../../domain/value-objects/state.mjs";
import Priority from "../../domain/value-objects/priority.mjs";
import { Ticket } from "../../domain/entities/ticket.mjs";

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
        pr.NamePriority AS priorityName
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
            namePriority: row.priorityName,
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
    //query returns [rows, fields]
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
        pr.NamePriority AS priorityName
      FROM Ticket t
      JOIN StateType st ON t.StateId    = st.Id
      JOIN Priority  pr ON t.PriorityId = pr.Id
      WHERE t.Id = ?
      LIMIT 1
    `,
      [id]
    );

    if (rows.length === 0) return null;
    const row = rows[0];
    return new Ticket({
      id: row.ticketId,
      responsibleId: row.ResponsibleId,
      state: new StateType({ id: row.StateId, nameColor: row.stateColor }),
      priority: new Priority({
        id: row.PriorityId,
        namePriority: row.priorityName,
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
      DELETE FROM Ticket
      WHERE Id = ?
      LIMIT 1
    `,
      [id]
    );
    // result.affectedRows return how much lines were delete
    return result.affectedRows;
  }

  async save(ticket) {
    const {
      id,
      responsibleId,
      state: { id: stateId },
      priority: { id: priorityId },
      createdAt,
      updatedAt,
      title,
      timeStart,
      promiseEnd,
      closedAt,
      details,
    } = ticket;

    // Upsert: insert or update
    //uses  ON DUPLICATE KEY UPDATE if id isnt exist update values

    await pool.execute(
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
        id,
        responsibleId,
        stateId,
        priorityId,
        createdAt,
        updatedAt,
        title,
        timeStart,
        promiseEnd,
        closedAt,
        details,
      ]
    );

    // get row updated or created
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
        pr.NamePriority AS priorityName
      FROM Ticket t
      JOIN StateType st ON t.StateId    = st.Id
      JOIN Priority  pr ON t.PriorityId = pr.Id
      WHERE t.Id = ?
      LIMIT 1
    `,
      [id]
    );

    if (rows.length === 0) {
      throw new Error(`Ticket with id=${id} not found after upsert`);
    }

    const row = rows[0];
    return new Ticket({
      id: row.ticketId,
      responsibleId: row.ResponsibleId,
      state: new StateType({ id: row.StateId, nameColor: row.stateColor }),
      priority: new Priority({
        id: row.PriorityId,
        namePriority: row.priorityName,
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
