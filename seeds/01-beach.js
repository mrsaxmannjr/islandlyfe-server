
exports.seed = async function (knex, Promise) {
  await knex('beaches').del();
  await knex('beaches').insert([
    {
      id: 1,
      beachName: 'Airport Beach',
      island: 'St Marteen',
      beachUrl: 'https://www.google.com/',
    },
  ]);
};
