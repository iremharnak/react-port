const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    content: { type: String, required: true }
  },{
    timestamps: true,
  }
);

let PostModel = mongoose.model('Post', postSchema);
module.exports = PostModel;
