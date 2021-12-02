let db = require("../database/models");
//const Op= db.Sequelize.Op;

const cancionesController = {
    list: (req, res) => {
        db.Canciones
            .findAll()
            .then(canciones => {
                return res.json({
                    meta:{
                        status: 200,
                        total: canciones.length
                },
                    data: canciones
                })
            })

    },

    detail: function (req, res) {
        db.Canciones
            .findByPk(req.params.id)
            .then(cancion => {
                return res.json({
                    meta:{
                        status: 200,
                    },
                    data: cancion
                })
            })
    },

    store: function (req, res) {
        db.Canciones
            .create({
                titulo:req.body.titulo,
                duracion:req.body.duracion,
                created_at:new Date(),
                updated_at:new Date(), 
                genero_id:req.body.genero_id,
                album_id:req.body.album_id,
                artista_id:req.body.artista_id
            })
            .then(cancion => {
                return res.json({
                    meta:{
                        status: 200,
                        created: 'ok'
                    },
                    data: cancion,
                    
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
            return res.json({
                status:200,
                deleted:'ok'
            }
        )
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
                meta:{
                    status: 200,
                    updated: 'ok'
                },
                data: cancion,
                
            })
        })
    }

}
module.exports = cancionesController;