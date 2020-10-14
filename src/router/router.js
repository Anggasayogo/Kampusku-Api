const express = require('express');
const router = express.Router();

const UsersController = require('../app/http/controllers/UsersController');
const KelasController = require('../app/http/controllers/KelasController');
const MapelController = require('../app/http/controllers/MapelController');

// panggil midleware
const verifytoken = require('../app/http/middleware/AuthMiddleware');


router.get('/',UsersController.version);

// test
router.get('/kelas',KelasController.index);
router.get('/mapel/:id',MapelController.index);
router.get('/mapol/:id',MapelController.test);

// users
// public route
router.post('/auth/login',UsersController.login)
router.get('/api/v1/token',UsersController.generated);

// private route
router.get('/api/v1/users',verifytoken,UsersController.show);
router.post('/api/v1/register',verifytoken,UsersController.register);
router.get('/api/v1/details/users/:id',verifytoken,UsersController.showdetail);
router.delete('/api/v1/destroy/users/:id',verifytoken,UsersController.deleteusers);
router.patch('/api/v1/update/users/:id',verifytoken,UsersController.update);


module.exports = router;