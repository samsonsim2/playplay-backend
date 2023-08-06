const express = require("express");
const { getSelectedGames } = require("../controllers/games");
const router = express.Router();

// Routes
router.route("/").get(getSelectedGames);

module.exports = router;
