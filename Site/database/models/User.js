module.exports = (sequelize, dataTypes) => {

    let alias = "Users";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        first_name:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        last_name:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        category:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        address:{
            type: dataTypes.STRING(45),
        },
        city:{
            type: dataTypes.STRING(45),
        },
        state:{
            type: dataTypes.STRING(45),
        },
        phone:{
            type: dataTypes.INTEGER(10),  
        },
        date:{
            type: dataTypes.DATEONLY,
        }
    }

    let config = {
        tableName: "users",
        timestamps: true
    }



    const User = sequelize.define(alias, cols, config);

    return User;
}