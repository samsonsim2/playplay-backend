const express = require("express");
const { getGames } = require("../controllers/games");
const router = express.Router();

// Routes
router.route("/").get(getGames);

module.exports = router;
