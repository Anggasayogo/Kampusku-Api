const express = require('express');
const router = express.Router();

const UsersController = require('../app/http/controllers/UsersController');
const KelasController = require('../app/http/controllers/KelasController');
const MapelController = require('../app/http/controllers/MapelController');

router.get('/kelas',KelasController.index);
router.get('/mapel/:id',MapelController.index);
router.get('/mapol/:id',MapelController.test);

// users
router.post('/register',UsersController.register);
router.get('/details/users/:id',UsersController.showdetail);
router.get('/users',UsersController.show);
router.delete('/destroy/users/:id',UsersController.deleteusers);
router.patch('/update/users/:id',UsersController.update);


module.exports = router;