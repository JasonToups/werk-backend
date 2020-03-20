const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//TODO Figure out how to reference queen_submitted_to in Schema
const GigSchema = mongoose.Schema({
  created_date: {
    type: Date,
    default: Date.now
  },
  queen_submitted_to: {
    type: String,
    required: false
  },
  user_submitted_from: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: [true, "Name is required."]
  },
  description: {
    type: String,
    required: [true, "Description is required."]
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  date_of_gig: {
    type: Date,
    required: false
  },
  cost: {
    type: Number,
    required: false
  },
  visibility: {
    type: Boolean,
    required: false
  },
  approval: {
    type: Boolean,
    required: false
  }
});

GigSchema.set("toJSON", {
  transform: (doc, ret, opt) => {
    delete ret["password"];
    return ret
  }
})

const Gig = mongoose.model("Gig", GigSchema);

module.exports = Gig;
