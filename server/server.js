const express = require("express");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const dbSeq = require("./Config/index");
const bodyParser = require("body-parser");
const { readdirSync } = require('fs')

dotenv.config({ path: "./.env" });

const app = express();
const port = 5432;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const { users } = dbSeq;
dbSeq.sequelize.sync();

//statistic_leave`List endpoint
app.get("/statistics", (req, res) => {
  const sql = "SELECT * FROM statistics";
  dbSeq.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Error Fetching Leave" });
    } else {
      res.json(result);
    }
  });
});

readdirSync('./Routes')
    .map((r)=> app.use('', require('./Routes/' + r)))

app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
