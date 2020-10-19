module.exports = (sequelize, dataTypes) => {

    let alias = "Product";

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
        price: {
            type: dataTypes.DECIMAL(10,2).UNSIGNED,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        images: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        warranty: {
            type: dataTypes.INTEGER(100),
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER(10),
        },
        id_category: {
            type: dataTypes.INTEGER
        },
        id_manager: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "products",
        timestamps: true
    }



    const Product = sequelize.define(alias, cols, config);

    return Product;
}