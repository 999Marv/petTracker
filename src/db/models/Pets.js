const knex = require('./knex');

class Pets {
  static async create(name, url, species, friendly) {
    try {
      const query = `INSERT INTO pets (pet_name, picture_url, species, is_friendly) values (?, ? ? ?) returning *`;
      const res = await knex.raw(query, [name, url, species, friendly]);
      return res.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async list() {}
}

module.exports = Pets;
