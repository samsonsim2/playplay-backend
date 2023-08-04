//Dependencies
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const gamesRouter = require("./routes/GameRouter");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/games", gamesRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
