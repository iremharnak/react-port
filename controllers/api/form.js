const FormModel = require('../../models/form.js');

module.exports = {
  create,
};
async function create(req, res) {
  try {
    // 1. put the order in the database (the data will be incoming via `req.body`)
    await FormModel.create({userName: req.body.name, userEmail: req.body.email, userMessage: req.body.message})
    // 2. send a response to frontend - typically we send back the newly created order, or all the list of orders, or just an 'ok'
    res.status(200).json('ok. Message added to DB!')
 } catch(err) {
    res.json(err);
 }
}