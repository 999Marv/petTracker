const knex = require('./knex');

class Pets {
  static async create(name, url, species, friendly) {
    try {
      const query = `INSERT INTO pets (pet_name, picture_url, species, is_friendly) values (?, ?, ?, ?) returning *`;
      const res = await knex.raw(query, [name, url, species, friendly]);
      return res.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async list() {
    try {
      const query = `SELECT * FROM pets`;
      const res = await knex.raw(query);
      return res;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async remove(id) {
    try {
      const query = `DELETE FROM pets WHERE id = (?)`;
      const res = await knex.raw(query, [id]);
      return res.rows || null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = Pets;
