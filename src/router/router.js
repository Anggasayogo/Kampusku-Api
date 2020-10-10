const express = require('express');
const router = express.Router();

const UsersController = require('../app/http/controllers/UsersController');

router.get('/',UsersController.index);


module.exports = router;