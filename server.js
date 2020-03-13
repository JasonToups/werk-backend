
// -------- IMPORTS -------- //
// External Modules
const express = require('express');
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");
const bcrypt = require("bcryptjs");

// Instanced Modules
const app = express();

// Internal Modules
const db = require('./models');
const routes = require("./routes");
const utils = require('./middleware/utils');
const formatter = require('./middleware/formatter');
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// -------- MIDDLEWARE -------- //
// formats request body
app.use(bodyParser.json());
// logger
app.use(utils.logger);
// response formatter
app.use(formatter);

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

/* Express Session Auth */
app.use(
  session({
    store: new MongoStore({ url: process.env.MONGO_URI }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 3 // Expire in 3 hours
    }
  })
);

// -------- API ROUTES -------- //

// Auth
app.use('/api/v1/auth', routes.auth);
// Users
app.use('/api/v1/users', routes.user);
// Posts
app.use("/api/v1/posts", routes.post);
// Gigs
app.use("/api/v1/gigs", routes.gig);

// 405 middleware
app.use('/api/v1/*', utils.methodNotAllowed);

// ---- 404 Route
app.get('/*', utils.notFound);

// -------- START SERVER -------- //
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});