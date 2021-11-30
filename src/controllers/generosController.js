let db = require("../database/models");
const generosController = { 
    list: (req, res)  => {
        db.Generos
            .findAll()
            .then(generos => {
                return res.json({
                    total: generos.length,
                    data: generos
                })
            })
        },
}
module.exports = generosController;
