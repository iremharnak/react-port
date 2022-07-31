const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const formSchema = new Schema(
  {
    userName: { type: String, required: true},
    userEmail: { type: String, required: true},
    userMessage: {type: String, required: true}
  },
  {
    timestamps: true,
  }
);

let FormModel = mongoose.model('Form', formSchema);
module.exports = FormModel;