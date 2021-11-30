module.exports = (sequelize, dataTypes)=> {
    let alias = "Artistas";
    let cols = {
      id: {
          type: dataTypes.INTEGER, 
          primaryKey: true,
          autoIncrement: true
      },
      nombre: {
          type: dataTypes.STRING
      },
      apellido: {
          type: dataTypes.STRING
      }
    };
    let config = {
        tableName: "Artistas",
        timestamps: false
    };
    const Artistas = sequelize.define(alias, cols, config);
    return Artistas;
}