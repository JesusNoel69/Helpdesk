// src/infrastructure/persistence/MySqlUserRepo.mjs
import { UserRepository } from "../../application/ports/userRepository.mjs";
import { pool } from "../config/db.mjs";
import { User } from "../../domain/entities/user.mjs";
import { Role } from "../../domain/value-objects/role.mjs";
import Email from "../../domain/value-objects/email.mjs";

export class MySqlUserRepo extends UserRepository {
  async findAll() {
    const [rows] = await pool.query(`
      SELECT
        u.Id            AS userId,
        u.RoleUserId,
        u.NameUser,
        u.PasswordUser,
        u.Account,
        ru.NameRole     AS roleName,
        u.CreatedAt,
        u.UpdatedAt
      FROM User u
      JOIN RoleUser ru ON u.RoleUserId = ru.Id
    `);

    return rows.map(
      (row) =>
        new User({
          id: row.userId,
          roleUserId: row.RoleUserId,
          role: new Role({ id: row.RoleUserId, nameRole: row.roleName }),
          createdAt: row.CreatedAt,
          updatedAt: row.UpdatedAt,
          nameUser: row.NameUser,
          passwordUser: row.PasswordUser,
          account: row.Account,
        })
    );
  }

  async findById(id) {
    const [rows] = await pool.query(
      `
      SELECT
        u.Id            AS userId,
        u.RoleUserId,
        u.NameUser,
        u.PasswordUser,
        u.Account,
        ru.NameRole     AS roleName,
        u.CreatedAt,
        u.UpdatedAt
      FROM User u
      JOIN RoleUser ru ON u.RoleUserId = ru.Id
      WHERE u.Id = ?
      LIMIT 1
    `,
      [id]
    );

    if (rows.length === 0) return null;
    const row = rows[0];
    return new User({
      id: row.userId,
      roleUserId: row.RoleUserId,
      role: new Role({ id: row.RoleUserId, nameRole: row.roleName }),
      createdAt: row.CreatedAt,
      updatedAt: row.UpdatedAt,
      nameUser: row.NameUser,
      passwordUser: row.PasswordUser,
      account: row.Account,
    });
  }

  async delete(id) {
    const [result] = await pool.query(
      `
      DELETE FROM User u
      WHERE u.Id = ?
      LIMIT 1
    `,
      [id]
    );
    return result.affectedRows;
  }

  async save(user) {
    const {
      id,
      roleUserId,
      createdAt,
      updatedAt,
      nameUser,
      passwordUser,
      account,
    } = user;

    const email = account instanceof Email ? account.email : account;

    await pool.execute(
      `
    INSERT INTO User
      (Id, RoleUserId, NameUser, PasswordUser, Account, CreatedAt, UpdatedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      RoleUserId   = VALUES(RoleUserId),
      NameUser     = VALUES(NameUser),
      PasswordUser = VALUES(PasswordUser),
      Account      = VALUES(Account),
      UpdatedAt    = VALUES(UpdatedAt)
  `,
      [
        id ?? null,
        roleUserId ?? null,
        nameUser ?? null,
        passwordUser ?? null,
        email ?? null,
        createdAt ?? null,
        updatedAt ?? null,
      ]
    );

    const [rows] = await pool.query(
      `
    SELECT
      u.Id            AS userId,
      u.RoleUserId,
      u.NameUser,
      u.PasswordUser,
      u.Account,
      ru.NameRole     AS roleName,
      u.CreatedAt,
      u.UpdatedAt
    FROM User u
    JOIN RoleUser ru ON u.RoleUserId = ru.Id
    WHERE u.NameUser = ?
    ORDER BY u.Id DESC
    LIMIT 1
  `,
      [nameUser]
    );

    if (rows.length === 0) {
      throw new Error(`User not found after upsert`);
    }

    const row = rows[0];
    return new User({
      id: row.userId,
      roleUserId: row.RoleUserId,
      role: new Role({ id: row.RoleUserId, nameRole: row.roleName }),
      createdAt: row.CreatedAt,
      updatedAt: row.UpdatedAt,
      nameUser: row.NameUser,
      passwordUser: row.PasswordUser,
      account: row.Account,
    });
  }
}
