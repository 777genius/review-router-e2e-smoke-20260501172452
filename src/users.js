function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

async function findUserByEmail(db, email) {
  const normalized = normalizeEmail(email);
  const rows = await db.query('SELECT * FROM users WHERE email = ? LIMIT 1', [normalized]);
  return rows[0] || null;
}

module.exports = { findUserByEmail, normalizeEmail };
