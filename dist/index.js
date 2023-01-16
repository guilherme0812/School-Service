"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./config/data-source");
data_source_1.AppDataSource.initialize().then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.get('/', (_, res) => {
        res.send([{ message: 'Voce acessou o server' }]);
    });
    return app.listen(process.env.PORT || 3000, () => {
        console.log(`Server initialized! at port ${process.env.PORT || 3000}`);
    });
});
