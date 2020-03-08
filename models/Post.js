const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = mongoose.Schema({
  created_date: {
    type: Date,
    default: Date.now
  },
  user_submitted_from: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: false,
  }
});

PostSchema.set("toJSON", {
  transform: (doc, ret, opt) => {
    delete ret["password"];
    return ret
  }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;