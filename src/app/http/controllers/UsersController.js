const Users = require("../../models/Users")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.show = async (req,res,next)=>{

    const data = await Users.find()

    try {
        return res.status(201).json({
            status : true,
            message : "data hass geted!",
            data : data,
        })

    } catch (error) {
        return res.status(500).json({
            status : false,
            message : error,
            data : null,
        })
    }
    next()
}

exports.register = async (req,res,next)=>{
// 1 generate salt -> random text with genSalt(10)
// 2 hash a password  -> hash(123456,salt)

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt);

    const data = new Users({
        nama_user : req.body.nama,
        nim : req.body.nim,
        prodi : req.body.prodi,
        email : req.body.email,
        password : hashPassword,
        addres : req.body.addres,
        id_kelas : req.body.id_kelas,
        id_role : req.body.id_role,
    })

    const saves = await data.save()
    try {
        return res.status(201).json({
            status : true,
            message : "data hass created!",
            data : saves,
        })
    } catch (error) {
        return res.status(500).json({
            status : false,
            message : error,
            data : null,
        })
    }
    next()
}

exports.showdetail = async (req,res,next)=>{
    const id = req.params.id;
    const data = await Users.findById(id)
    try {
        return res.status(201).json({
            status : true,
            message : "details users hass geted!",
            data : data,
        })
    } catch (error) {
        return res.status(404).json({
            status : false,
            message : "id user not be found",
            data : null,
        })
    }
    next()
}

exports.deleteusers = async (req,res,next)=>{
    const id = req.params.id;
    const user = await Users.remove({
        _id : id
    })
    try {
        return res.status(201).json({
            status : true,
            message : "users success deleted!",
            data : user,
        })
    } catch (error) {
        return res.status(404).json({
            status : false,
            message : "id user not be found",
            data : null,
        })
    }
    next()
    
}

exports.update = async (req,res,next)=>{
    const iduser = req.params.id;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt);
    const user = await Users.update(
        {_id : iduser},
        {
            $set : {
                nama_user : req.body.nama,
                nim : req.body.nim,
                prodi : req.body.prodi,
                email : req.body.email,
                password : hashPassword,
                addres : req.body.addres,
                id_kelas : req.body.id_kelas,
                id_role : req.body.id_role,
            }
        }
    )

    try {
        return res.status(200).json({
            status : true,
            message : "data users hass updated!",
            data : user,
        })
    } catch (error) {
        return res.status(500).json({
            status : false,
            message : error,
            data : null,
        })
    }
    next()
}

exports.version = async (req,res,next)=>{
    res.send({
        "express": "^4.17.1",
    })
    next();
}

exports.generated = (req,res,next)=>{
    const token = jwt.sign({_id: 123456}, process.env.SECRET_KEY)
    res.send(token)
    next()
}


exports.login = async (req,res,next)=>{
    const check = await Users.findOne({email : req.body.email})
    if(!check) return res.status(401).send("Inavlid email !")
    const passwordverifycation = await bcrypt.compare(req.body.password, check.password)
    if(!passwordverifycation) return res.status(401).send("Inavlid password !")
    const token = jwt.sign({ email : check.email }, process.env.SECRET_KEY)
    const updatetoken = await Users.update(
        {_id : check._id},
        {
            $set :{
                api_token : token,
            }
        }
    )
    try {
        return res.status(200).json({
            status : true,
            message : "Berhasil login !",
            data : check,
            access_token : {
                token : token,
            }
        })

    } catch (error) {
        return res.status(400).json({
        status : true,
        message : "Error Ocureted!",
        data : null,
    })
    }
    next();
}