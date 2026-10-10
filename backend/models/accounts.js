import { query } from "../lib/utils.js";

export async function createAccount(userId) {
  const sql = `
    INSERT INTO accounts (user_id, balance)
    VALUES (?, ?)
  `;

  const params = [userId, 0];
  const result = await query(sql, params);

  return {
    id: result.insertId,
    userId,
    amount: 0,
  };
}

export async function getAccountByUserId(userId) {
  const sql = `
    SELECT id, user_id, balance
    FROM accounts
    WHERE user_id = ?
    LIMIT 1
  `;
  const params = [userId];
  const accounts = await query(sql, params);

  return accounts[0];
}

export async function depositToAccount(userId, amount) {
  const sql = `
    UPDATE accounts
    SET balance = balance + ?
    WHERE user_id = ?
  `;

  const params = [amount, userId];

  const result = await query(sql, params);

  return result;
}
