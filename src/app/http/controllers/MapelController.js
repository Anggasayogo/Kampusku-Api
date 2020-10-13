exports.index = (req,res)=>{
    const id = req.params.id;
    return res.status(200).json({
        "Mapel" : id
    })
}

exports.test = (req,res)=>{
    const id = req.params.id;
    console.log(id);
}