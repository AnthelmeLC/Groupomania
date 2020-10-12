const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Message = sequelize.define("Message", {
    id : {
        type : DataTypes.NUMBER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    userId : {
        type : DataTypes.NUMBER,
        allowNull : false
    },
    time : {
        type : DataTypes.DATE,
        allowNull : false
    },
    message : {
        type : DataTypes.STRING,
        allowNull : false
    }
});

module.exports = sequelize.models.Message;