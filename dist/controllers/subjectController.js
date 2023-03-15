"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SubjectServices_1 = require("../services/SubjectServices");
const subjectController = (0, express_1.Router)();
const subjectServices = new SubjectServices_1.SubjectServices();
subjectController.get('/subject', async (req, res, next) => {
    try {
        return res.status(201).json(subjectServices.findAll());
    }
    catch (error) {
        next(error);
    }
});
subjectController.get('/subject/:id', (req, res) => {
    res.json({ message: req.params.id });
});
subjectController.post('/subject', (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'O nome é obrigatório' });
    }
    try {
        return res.status(201).json(subjectServices.create(name));
    }
    catch (error) {
        next(Error);
    }
});
exports.default = subjectController;
