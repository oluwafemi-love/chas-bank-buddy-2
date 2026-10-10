import { query } from "../lib/utils.js";

export async function createSession(userId, token) {
  const sql = `
      INSERT INTO sessions (user_id, token)
      VALUES (?, ?)
    `;
  const params = [userId, token];
  const result = await query(sql, params);

  const session = {
    id: result.insertId,
    userId,
    token,
  };

  return session;
}


export async function getSessionByToken(token) {
  const sql = `
    SELECT id, user_id, token
    FROM sessions
    WHERE token = ?
    LIMIT 1
  `;

  const sessions = await query(sql, [token]);

  return sessions[0];
}