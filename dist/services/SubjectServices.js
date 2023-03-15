"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectServices = void 0;
const data_source_1 = require("../data-source");
const Subject_1 = require("../entities/Subject");
const subjectRepository = data_source_1.AppDataSource.getRepository(Subject_1.Subject);
class SubjectServices {
    async findAll() {
        return await subjectRepository.find();
    }
    async create(name) {
        const newSubject = subjectRepository.create({ name });
        await subjectRepository.save(newSubject);
        return newSubject;
    }
}
exports.SubjectServices = SubjectServices;
