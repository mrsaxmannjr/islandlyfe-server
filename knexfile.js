module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql:///islandlyfe',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};
