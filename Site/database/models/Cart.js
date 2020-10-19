module.exports = (sequelize, dataTypes) => {

    let alias = "Carts";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        id_user: {
            type: dataTypes.INTEGER
        },
        id_product: {
            type: dataTypes.INTEGER
        },
        amount: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        bill: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        date: {
            type: dataTypes.DATEONLY,
        }
    }

    let config = {
        tableName: "carts",
        timestamps: true
    }


    const Cart = sequelize.define(alias, cols, config);

    return Cart;
}