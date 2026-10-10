import { query } from "../lib/utils.js";

export async function createUser(username, hashedPassword) {
  const sql = `
    INSERT INTO users (username, password)
    VALUES (?, ?)
  `;

  const result = await query(sql, [username, hashedPassword]);

  return {
    id: result.insertId,
    username,
  };
}

export async function getUser(username) {
  const sql = `
    SELECT id, username, password
    FROM users
    WHERE username = ?
    LIMIT 1
  `;
  const params = [username];
  const users = await query(sql, params);

  return users[0];
}

export async function updateUserPassword(username, hashedPassword) {
  const sql = `
    UPDATE users
    SET password = ?
    WHERE username = ?
  `;
  const params = [hashedPassword, username];
  const result = await query(sql, params);

  return result;
}

export async function deleteUser(userId) {
  const sql = "DELETE FROM users WHERE id = ?";
  const params = [userId];
  const result = await query(sql, params);

  return result;
}
