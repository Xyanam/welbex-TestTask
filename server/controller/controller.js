const db = require("../db");

class UserController {
  async createSport(req, res) {
    const { date, name, count, distance } = req.body;
    const newSport = await db.query(
      "INSERT INTO sportsdata (date, name, count, distance) values($1, $2, $3, $4) RETURNING *",
      [date, name, count, distance]
    );
    res.json(newSport.rows[0]);
  }
  async getSport(req, res) {
    const sports = await db.query("SELECT * FROM sportsdata");
    res.json(sports.rows);
  }
}
module.exports = new UserController();
