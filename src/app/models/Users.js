const { text } = require('body-parser');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = Schema({
    'id_users' : getSequenceNextValue("itemId"),
    'nama_user' : {type : String},
    'nim' : {type : String},
    'prodi' : {type : String},
    'email' : {type : String},
    'password' : {type : String},
    'addres' : {type : text},
    'id_kelas' : {type : BigInt},
    'id_role' : {type : BigInt},
});

module.exports = mongoose.model("users",UsersSchema);