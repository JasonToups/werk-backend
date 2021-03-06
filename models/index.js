const mongoose = require("mongoose");
require("dotenv").config();
const dbUrl = process.env.MONGODB_URI;

// Define Models
const UserModel = require('./User');
const GigModel = require('./Gig');
const PostModel = require('./Post');

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected."))
  .catch(err => console.log(`MongoDB connection error: ${err}`));



module.exports = {
  User: UserModel,
  Gig: GigModel,
  Post: PostModel
};