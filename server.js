
// -------- IMPORTS -------- //
const express = require('express');
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");
const bcrypt = require("bcryptjs");

// Database & Variables
const app = express();

/* When Models are ready, import them */
// const db = require("./models");

/* Change to .env variable later	 */
const PORT = process.env.PORT || 4000;
/* When Routes are ready, import them */
// const routes = require("./routes");

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

app.get("/api/v1/users", (req, res) => {
  db.User.find({}, (err, foundUsers) => {
    if (err) {
      return res.json({ err });
    }
    res.json({ foundUsers });
  });
});

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const test = [
  {
    name: 'John Dough',
    home: 'Springfield'
  },
  {
    name: 'Tester Testington',
    home: 'Testingtown'
  },
  {
    name: 'Dolly Levi',
    home: 'Yonkers'
  }
];

app.get('/', (req, res) => res.send('Hello Dolly!'));
app.get('/test', (req, res) => res.json(test));

// $.ajax({
//   method: 'GET',
//   url: 'http://localhost:3000/api/test',
//   success: handleSuccess,
//   error: handleError
// });

// const handleSuccess = json => console.log(json);

// const handleError = (xhr, status, errorThrown) => console.log('uh oh');

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});