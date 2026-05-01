function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

async function findUserByEmail(db, email) {
  const rows = await db.query(`SELECT * FROM users WHERE email = '${email}' LIMIT 1`);
  return rows[0] || null;
}

module.exports = { findUserByEmail, normalizeEmail };
