module.exports = (sequelize, dataTypes)=> {
    let alias = "Albumes";
    let cols = {
      id: {
          type: dataTypes.INTEGER, 
          primaryKey: true,
          autoIncrement: true
      },
      nombre: {
          type: dataTypes.STRING
      },
      duracion: {
          type: dataTypes.INTEGER
      }
    };
    let config = {
        tableName: "Albumes",
        timestamps: false
    };
    const Albumes = sequelize.define(alias, cols, config);
    return Albumes;
}
