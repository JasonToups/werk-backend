
// -------- IMPORTS -------- //
const express = require('express');
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");
const bcrypt = require("bcryptjs");
const app = express();

// Database & Variables
const db = require('./models');
require("dotenv").config();

/* Change to .env variable later	 */
const PORT = process.env.PORT || 4000;
/* When Routes are ready, import them */
const routes = require("./routes");

// -------- MIDDLEWARE -------- //
const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

/* Express Session Auth */
// app.use(
//   session({
//     store: new MongoStore({ url: process.env.MONGO_URI }),
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 3 // Expire in 3 hours
//     }
//   })
// );

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* Post API Routes */
app.use("/api/v1/", routes.post);

app.get("/api/v1/users", (req, res) => {
  db.User.find({}, (err, foundUsers) => {
    if (err) {
      return res.json({ err });
    }
    res.json({ foundUsers });
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});