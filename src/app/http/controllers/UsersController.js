const Users = require("../../models/Users")

exports.index = (req,res)=>{
    return res.status(200).json({
        "work" : "itworks"
    })
}

exports.login = (req,res)=>{
    const data = {
        nama_user : req.body.nama,
        nim : req.body.nim,
        prodi : req.body.prodi,
        email : req.body.email,
        password : req.body.password,
        addres : req.body.addres,
        id_kelas : req.body.id_kelas,
        id_role : req.body.id_role,
    }

    let user = new Users(data)
    user.save((err)=>{
        if(err){
            return res.status(500).json({
                status : false,
                message : err,
                data : null,
            })
        }else{
            return res.status(201).json({
                status : true,
                message : "data hass created!",
                data : data,
            })
        }
    })
}