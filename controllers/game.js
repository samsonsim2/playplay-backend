const db = require("../db/models/index");

const { Game } = db;

async function getAll(req, res) {
  try {
    const games = await Game.findAll();
    return res.json(games);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

module.exports = {
  getAll,
};
