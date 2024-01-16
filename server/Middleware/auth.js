const dbSeq = require("../Config/index");
dbSeq.sequelize.sync();

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });


//Authentication Middleware using JWT
exports.authenticate = (req, res, next) => {
    const token = req.header("Authorization");
    console.log("Unextracted Token: " + token);
  
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const extractedToken = token.split(" ")[1];
    console.log("Actual Token: " + extractedToken);
  
    try {
      //verify and validate our token
      const decoded = jwt.verify(extractedToken, process.env.JWT_SECRET);
      req.userId = decoded.userId;
      next();
    } catch (err) {
      res.status(401).json({ message: "Invalid Token" });
    }
  };