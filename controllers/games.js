const { db, sequelize } = require("../db/models/index");
const {
  convertArrayToObject,
  generateRequiredTagId,
  generateExcludedTagId,
  revertSelection,
} = require("../utils/helper");
const { Op, QueryTypes, Sequelize } = require("sequelize");

const { Game, Gametag, Tag } = db;

async function getSelectedGames(req, res) {
  console.log("hello");
  const data = req.query.data;
  const { queryData, selectionType } = revertSelection(data);
  console.log("selectionType", selectionType);
  let games;

  try {
    // Get all tags from DB
    const tags = await Tag.findAll();

    // Convert the tags data into JSON for easy manipulation
    const tagsJson = JSON.parse(JSON.stringify(tags));
    // Convert the tags into an object
    const finalTags = convertArrayToObject(tagsJson);

    // Get the ids of required tags
    const requiredTagId = generateRequiredTagId(queryData, finalTags);
    // console.log("required tag", requiredTagId);

    // As play style tag id is added after play without, get the max number in the required tag id to find the required play style
    const requiredPlayStyle = Math.max(...requiredTagId);
    // console.log("required play style", requiredTagId);

    const excludedTagId = generateExcludedTagId(queryData, finalTags);
    // If no tags are selected, return all games

    console.log("requiredTagId", requiredTagId);
    console.log("requiredPlayStyle", requiredPlayStyle);

    if (selectionType === "all") {
      games = await sequelize.query(
        `SELECT
      g.id AS "id",
      g.title AS "title",
      g.content AS "content",
      JSON_AGG(
        JSON_BUILD_OBJECT(
          'id', t.id,
          'tag', t.tag,
          'createdAt', t.created_at,
          'updatedAt', t.updated_at
        )
      ) AS "Tags"
    FROM games AS g
    JOIN gametags AS gt ON g.id = gt.game_id
    JOIN tags AS t ON gt.tag_id = t.id
    GROUP BY g.id
    ORDER BY g.id;`,
        {
          model: Game,
          mapToModel: true, // pass true here if you have any mapped fields
        }
      );
    } else if (selectionType === "playWithout") {
      // If game contains any of the excluded tag, it will not be included in final result
      games = await sequelize.query(
        `SELECT
      g.id AS "id",
      g.title AS "title",
      g.content AS "content",
      JSON_AGG(
        JSON_BUILD_OBJECT(
          'id', t.id,
          'tag', t.tag,
          'createdAt', t.created_at,
          'updatedAt', t.updated_at
        )
      ) AS "Tags"
    FROM games AS g
    JOIN gametags AS gt ON g.id = gt.game_id
    JOIN tags AS t ON gt.tag_id = t.id
    WHERE t.id IN (${requiredTagId})
    AND NOT EXISTS (
        SELECT 1
        FROM gametags gt_exclude
        WHERE g.id = gt_exclude.game_id
        AND gt_exclude.tag_id IN (${excludedTagId})
    )
    GROUP BY g.id
    ORDER BY g.id;`,
        {
          model: Game,
          mapToModel: true, // pass true here if you have any mapped fields
        }
      );
    } else {
      // Result will only include games that are tagged with the required PlayStyle
      // The HAVING clause includes only those games where there is at least one associated tag with requiredPlayStyle
      games = await sequelize.query(
        `SELECT
    g.id AS "id",
    g.title AS "title",
    g.content AS "content",
    JSON_AGG(
        JSON_BUILD_OBJECT(
            'id', t.id,
            'tag', t.tag,
            'createdAt', t.created_at,
            'updatedAt', t.updated_at
        )
    ) AS "Tags"
FROM games AS g
JOIN gametags AS gt ON g.id = gt.game_id
RIGHT JOIN tags AS t ON gt.tag_id = t.id
GROUP BY g.id
HAVING bool_or(gt.tag_id = ${requiredPlayStyle})
ORDER BY g.id;`,
        {
          model: Game,
          mapToModel: true, // pass true here if you have any mapped fields
        }
      );
    }

    return res.json(games);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

module.exports = {
  getSelectedGames,
};
