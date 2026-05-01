const db = require('./db');
const { findUserByEmail } = require('./users');

async function login(email) {
  const user = await findUserByEmail(db, email);
  return user ? { ok: true, userId: user.id } : { ok: false };
}

module.exports = { login };
