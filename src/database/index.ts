import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'kolex_development',
    username: 'kolex',
    password: 'kolex',
    define: {
        underscored: true
    }
});