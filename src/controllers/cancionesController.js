let db = require("../database/models");
//const Op= db.Sequelize.Op;

const cancionesController = {
    list: (req, res) => {
        db.Canciones
            .findAll()
            .then(canciones => {
                return res.json({
                    total: canciones.length,
                    data: canciones
                })
            })

    },

    detail: function (req, res) {
        db.Canciones
            .findByPk(req.params.id)
            .then(cancion => {
                return res.json({
                    data: cancion
                })
            })
    },

    store: function (req, res) {
        db.Canciones
            .create({
                titulo:req.body.titulo,
                duracion:req.body.duracion,
                created_at:req.body.created_at,
                updated_at:req.body.updated_at, 
                genero_id:req.body.genero_id,
                album_id:req.body.album_id,
                artista_id:req.body.artista_id
            })
            .then(cancion => {
                return res.json({
                    data: cancion,
                    created: 'ok'
                })
            })
    },

    delete: function (req, res) {
        db.Canciones
        .destroy({
                where: {
                    id: req.params.id
                }
            })
        .then(response => {
            return res.json("se ha borrado la cancion")
        })
    },

    edit: function (req, res) {
        db.Canciones
        .update({
            titulo:req.body.titulo,
            duracion:req.body.duracion,
            updated_at: new Date(), 
            genero_id:req.body.genero_id,
            album_id:req.body.album_id,
            artista_id:req.body.artista_id
        },
        {
            where: {
              id: req.params.id
            }
          }
        )
        .then(cancion => {
            return res.json({
                data: cancion,
                updated: 'ok'
            })
        })
    }

}
module.exports = cancionesController;