const express = require('express');
const router = express.Router();
const formCtrl = require('../../controllers/api/form');


router.post('/', formCtrl.create);

module.exports = router;