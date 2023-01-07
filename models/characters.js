import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const Character = sequelize.define("character", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    char_name: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    char_age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    episode_first_appeared: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})