const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const formSchema = new Schema(
  {
    name: { type: String, required: true},
    email: { type: String, required: true},
    message: {type: String, required: true}
  },
  {
    timestamps: true,
  }
);

let FormModel = mongoose.model('Form', formSchema);
module.exports = FormModel;