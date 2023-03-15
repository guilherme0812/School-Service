import { AppDataSource } from '../data-source'
import { Subject } from '../entities/Subject'

const subjectRepository = AppDataSource.getRepository(Subject)

export class SubjectServices {
  findAll() {
    return subjectRepository.find()
  }

  async create(name: string) {
    const newSubject = subjectRepository.create({ name })

    await subjectRepository.save(newSubject)

    return newSubject
  }
}
