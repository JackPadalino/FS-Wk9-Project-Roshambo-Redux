const Sequelize = require("sequelize");
const db = require("./db");

const Player = db.define("player", {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Player;