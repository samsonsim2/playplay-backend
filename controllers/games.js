const db = require("../db/models/index");
const {
  convertArrayToObject,
  generateRequiredTagId,
} = require("../utils/helper");

const { Game, Gametag, Tag } = db;

async function getSelectedGames(req, res) {
  console.log(req.query.data);
  const queryData = req.query.data;
  try {
    // Get all tags from DB
    const tags = await Tag.findAll();

    // Convert the tags data into JSON for easy manipulation
    const tagsJson = JSON.parse(JSON.stringify(tags));
    // Convert the tags into an object
    const finalTags = convertArrayToObject(tagsJson);

    // Get the ids of required tags
    const requiredTagId = generateRequiredTagId(queryData, finalTags);
    // console.log(requiredTagId);

    const games = await Game.findAll({
      include: [
        {
          model: Tag,
          through: {
            model: Gametag,
            attributes: [],
          },
          where: { id: requiredTagId },
        },
      ],
      required: true,
    });

    // console.log(games);

    return res.json(games);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

module.exports = {
  getSelectedGames,
};
