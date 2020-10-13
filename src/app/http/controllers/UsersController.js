const Users = require("../../models/Users")

exports.show = async (req,res)=>{

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
}


exports.register = async (req,res)=>{
    const data = new Users({
        nama_user : req.body.nama,
        nim : req.body.nim,
        prodi : req.body.prodi,
        email : req.body.email,
        password : req.body.password,
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
}

exports.showdetail = async (req,res)=>{
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
}


exports.deleteusers = async (req,res)=>{
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
    
}

exports.update = async (req,res)=>{
    const iduser = req.params.id;

    const user = await Users.update(
        {_id : iduser},
        {
            $set : {
                nama_user : req.body.nama,
                nim : req.body.nim,
                prodi : req.body.prodi,
                email : req.body.email,
                password : req.body.password,
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
}