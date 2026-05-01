async function query(sql, params) {
  return [{ id: 1, email: params?.[0] || 'user@example.com' }];
}

module.exports = { query };
