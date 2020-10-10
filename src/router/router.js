const express = require('express');
const router = express.Router();

const UsersController = require('../app/http/controllers/UsersController');
const KelasController = require('../app/http/controllers/KelasController');
const MapelController = require('../app/http/controllers/MapelController');

router.get('/kelas',KelasController.index);
router.get('/mapel',MapelController.index);
router.get('/',UsersController.index);
router.post('/login',UsersController.login);


module.exports = router;