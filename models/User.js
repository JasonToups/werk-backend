const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//TODO Add Gig Requirements either in-line or as a separate model
const UserSchema = mongoose.Schema({
  userType: {
    type: String,
    required: [true, "Are you a Queen or a Fan?"]
  },
  name: {
    type: String,
    required: [true, "Name is required."]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  userImage: {
    type: String,
    required: false
  },
  homeCity: {
    type: String,
    required: [true, "Home city is required"]
  },
  tips: {
    type: Number,
    required: false
  },
  gigs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Gig"
    }
  ],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  ],
  gigAppearanceFee: {
    type: Number,
    required: false
  },
  gigPerformanceFee: {
    type: Number,
    required: false
  },
  gigFeeTotal: {
    type: Number,
    required: false
  },
  gigRequirementDescription: {
    type: String,
    required: false
  }
});

UserSchema.set("toJSON", {
  transform: (doc, ret, opt) => {
    delete ret["password"];
    return ret
  }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;
