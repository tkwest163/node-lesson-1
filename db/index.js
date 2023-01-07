import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "cowboybebop", //database name
    "root", //username for sql
    "EmtFire22!", //password for sql
    {
        dialect: "mysql",
        host: "localhost"
    }
    
);