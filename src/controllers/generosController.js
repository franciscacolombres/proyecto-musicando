let db = require("../database/models");
const generosController = { 
    list: (req, res)  => {
        db.Generos
            .findAll()
            .then(generos => {
                return res.json({
                    meta:{
                        total: generos.length,
                        status: 200
                    },
                    data: generos
                })
            })
        },
}
module.exports = generosController;
