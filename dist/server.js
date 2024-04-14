"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("./database");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    database_1.sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    }).catch((error) => {
        console.error('Unable to connect to the database:', error);
    });
    console.log(`Server is running on port ${PORT}`);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
