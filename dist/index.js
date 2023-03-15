"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const subjectController_1 = __importDefault(require("./controllers/subjectController"));
const data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize().then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(subjectController_1.default);
    return app.listen(process.env.PORT || 3000, () => {
        console.log(`Server initialized! at port ${process.env.PORT || 3000}`);
    });
});
