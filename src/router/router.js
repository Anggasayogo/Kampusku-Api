const express = require('express');
const router = express.Router();

const UsersController = require('../app/http/controllers/UsersController');
const KelasController = require('../app/http/controllers/KelasController');
const MapelController = require('../app/http/controllers/MapelController');

router.get('/kelas',KelasController.index);
router.get('/mapel',MapelController.index);

// users
router.post('/register',UsersController.register);
router.get('/users',UsersController.show);


module.exports = router;