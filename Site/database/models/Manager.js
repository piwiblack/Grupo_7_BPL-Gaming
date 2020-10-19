module.exports = (sequelize, dataTypes) => {

    let alias = "Managers";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        id_user: {
            type: dataTypes.INTEGER
        }

    }

    let config = {
        tableName: "managers",
        timestamps: true
    }



    const Manager = sequelize.define(alias, cols, config);

    return Manager;
}