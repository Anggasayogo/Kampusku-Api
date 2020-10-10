const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = Schema({
    'nama_user' : {type : String},
    'nim' : {type : String},
    'prodi' : {type : String},
    'email' : {type : String},
    'password' : {type : String},
    'addres' : {type : String},
    'id_kelas' : {type : String},
    'id_role' : {type : String},
});

module.exports = mongoose.model("users",UsersSchema);